import fs from "node:fs";
import path from "node:path";

export type AnalysisMarket = {
  analysis: string;
  bias: string;
  name: string;
  resistance: string[];
  support: string[];
  symbol: string;
  trend: string;
  watch: string;
};

export type AnalysisReport = {
  author: string;
  contentHtml?: string;
  date: string;
  disclaimer: string;
  image?: string;
  markets: AnalysisMarket[];
  outlook: string;
  slug: string;
  source: "json" | "wordpress";
  sourceUrl?: string;
  summary: string;
  title: string;
};

export type DailyAnalysisReport = {
  date: string;
  href: string;
  title: string;
};

type WordPressRenderedValue = {
  rendered?: string;
};

type WordPressFeaturedMedia = {
  source_url?: string;
};

type WordPressPost = {
  content?: WordPressRenderedValue;
  date?: string;
  excerpt?: WordPressRenderedValue;
  link?: string;
  slug?: string;
  title?: WordPressRenderedValue;
  _embedded?: {
    "wp:featuredmedia"?: WordPressFeaturedMedia[];
  };
};

type WordPressPage = {
  content?: WordPressRenderedValue;
};

const reportsDirectory = path.join(
  process.cwd(),
  "src",
  "content",
  "analysis-reports",
);

const defaultWordPressReportsUrl =
  "https://achieverfinancials.com/wp-json/wp/v2/posts?categories=269&_embed=wp:featuredmedia&per_page=10";

const wordpressReportsUrl =
  process.env.WORDPRESS_ANALYSIS_REPORTS_URL ?? defaultWordPressReportsUrl;

const defaultWordPressDailyReportsPageUrl =
  "https://achieverfinancials.com/wp-json/wp/v2/pages/19458";

const wordpressDailyReportsPageUrl =
  process.env.WORDPRESS_DAILY_ANALYSIS_PAGE_URL ??
  defaultWordPressDailyReportsPageUrl;

const wordpressReportsEnabled =
  process.env.WORDPRESS_ANALYSIS_REPORTS_ENABLED !== "false";

const wordpressRevalidateSeconds = Number(
  process.env.WORDPRESS_ANALYSIS_REPORTS_REVALIDATE_SECONDS ?? 900,
);

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function readString(
  object: Record<string, unknown>,
  key: string,
  source: string,
) {
  const value = object[key];

  if (typeof value !== "string") {
    throw new Error(`${source} is missing string field: ${key}`);
  }

  return value;
}

function stripHtml(value = "") {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtmlEntities(value = "") {
  return value
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#8211;|&#8212;|&ndash;|&mdash;/g, "-")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function extractDailyReportDate(title: string) {
  const match = title.match(
    /Technical\s+Analysis\s+Report\s+(\d{1,2}\s+[A-Za-z]+)/i,
  );

  return match?.[1] ?? "";
}

function parseDailyReportsFromElementorContent(
  contentHtml = "",
): DailyAnalysisReport[] {
  const reports: DailyAnalysisReport[] = [];
  const seenHrefs = new Set<string>();
  const reportPattern =
    /<h1[^>]*>\s*(Technical\s+Analysis\s+Report[^<]*)\s*<\/h1>[\s\S]*?<a[^>]*href="([^"]+)"[^>]*>[\s\S]*?View\s+Report/gi;

  for (const match of contentHtml.matchAll(reportPattern)) {
    const title = decodeHtmlEntities(stripHtml(match[1]));
    const href = decodeHtmlEntities(match[2]);

    if (!title || !href || seenHrefs.has(href)) {
      continue;
    }

    seenHrefs.add(href);
    reports.push({
      date: extractDailyReportDate(title),
      href,
      title,
    });
  }

  return reports;
}

function parseMarket(value: unknown): AnalysisMarket {
  if (!value || typeof value !== "object") {
    throw new Error("Report market must be an object.");
  }

  const market = value as Record<string, unknown>;

  if (!isStringArray(market.support) || !isStringArray(market.resistance)) {
    throw new Error("Report market support and resistance must be string arrays.");
  }

  return {
    analysis: readString(market, "analysis", "Report market"),
    bias: readString(market, "bias", "Report market"),
    name: readString(market, "name", "Report market"),
    resistance: market.resistance,
    support: market.support,
    symbol: readString(market, "symbol", "Report market"),
    trend: readString(market, "trend", "Report market"),
    watch: readString(market, "watch", "Report market"),
  };
}

function parseReport(value: unknown, source: string): AnalysisReport {
  if (!value || typeof value !== "object") {
    throw new Error(`${source} must contain a report object.`);
  }

  const report = value as Record<string, unknown>;

  if (!Array.isArray(report.markets)) {
    throw new Error(`${source} must include a markets array.`);
  }

  return {
    author: readString(report, "author", source),
    contentHtml: undefined,
    date: readString(report, "date", source),
    disclaimer: readString(report, "disclaimer", source),
    image: undefined,
    markets: report.markets.map(parseMarket),
    outlook: readString(report, "outlook", source),
    slug: readString(report, "slug", source),
    source: "json",
    sourceUrl: undefined,
    summary: readString(report, "summary", source),
    title: readString(report, "title", source),
  };
}

export function getLocalAnalysisReports(): AnalysisReport[] {
  if (!fs.existsSync(reportsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(reportsDirectory)
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const filePath = path.join(reportsDirectory, fileName);
      const content = fs.readFileSync(filePath, "utf8");

      return parseReport(JSON.parse(content), fileName);
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

function mapWordPressPostToReport(post: WordPressPost): AnalysisReport | null {
  const slug = post.slug;
  const title = decodeHtmlEntities(stripHtml(post.title?.rendered));
  const summary = decodeHtmlEntities(stripHtml(post.excerpt?.rendered));
  const contentHtml = post.content?.rendered;
  const date = post.date?.slice(0, 10);

  if (!slug || !title || !contentHtml || !date) {
    return null;
  }

  return {
    author: "Achiever Financials Research Desk",
    contentHtml,
    date,
    disclaimer:
      "This report is for educational and informational purposes only and does not constitute investment advice. Trading leveraged products involves risk.",
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
    markets: [],
    outlook: summary || title,
    slug,
    source: "wordpress",
    sourceUrl: post.link,
    summary: summary || title,
    title,
  };
}

export async function getWordPressAnalysisReports(): Promise<AnalysisReport[]> {
  if (!wordpressReportsEnabled) {
    return [];
  }

  try {
    const response = await fetch(wordpressReportsUrl, {
      next: {
        revalidate: wordpressRevalidateSeconds,
        tags: ["analysis-reports"],
      },
    });

    if (!response.ok) {
      return [];
    }

    const posts = (await response.json()) as WordPressPost[];

    return posts
      .map(mapWordPressPostToReport)
      .filter((report): report is AnalysisReport => report !== null);
  } catch {
    return [];
  }
}

export async function getWordPressDailyAnalysisReports(): Promise<
  DailyAnalysisReport[]
> {
  if (!wordpressReportsEnabled) {
    return [];
  }

  try {
    const response = await fetch(wordpressDailyReportsPageUrl, {
      next: {
        revalidate: wordpressRevalidateSeconds,
        tags: ["analysis-reports"],
      },
    });

    if (!response.ok) {
      return [];
    }

    const page = (await response.json()) as WordPressPage;

    return parseDailyReportsFromElementorContent(page.content?.rendered);
  } catch {
    return [];
  }
}

export async function getAnalysisReports(): Promise<AnalysisReport[]> {
  const wordPressReports = await getWordPressAnalysisReports();

  if (wordPressReports.length) {
    return wordPressReports.sort((a, b) => b.date.localeCompare(a.date));
  }

  return getLocalAnalysisReports();
}

export async function getAnalysisReportBySlug(
  slug: string,
): Promise<AnalysisReport | undefined> {
  return (await getAnalysisReports()).find((report) => report.slug === slug);
}

export function getAnalysisReportHref(report: Pick<AnalysisReport, "slug">) {
  return `/discover/analysis-report/${report.slug}`;
}

export function formatReportDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00.000Z`));
}
