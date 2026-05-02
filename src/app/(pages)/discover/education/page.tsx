import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";
import type { BlogPost } from "@/components/ui/discover-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/discover/education");

type WordPressRenderedValue = {
  rendered?: string;
};

type WordPressPage = {
  content?: WordPressRenderedValue;
};

const defaultWordPressEducationPageUrl =
  "https://achieverfinancials.com/wp-json/wp/v2/pages?slug=education&_embed=wp:featuredmedia";

const wordpressEducationPageUrl =
  process.env.WORDPRESS_EDUCATION_PAGE_URL ?? defaultWordPressEducationPageUrl;

function stripHtml(value = "") {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtmlEntities(value = "") {
  return value
    .replace(/&#038;|&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#8211;|&#8212;|&ndash;|&mdash;/g, "-")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function getAttribute(html: string, name: string) {
  const match = html.match(new RegExp(`${name}=["']([^"']+)["']`, "i"));
  return match?.[1] ?? "";
}

function getLargestSrcFromSrcset(srcset = "") {
  const candidates = srcset
    .split(",")
    .map((candidate) => {
      const [url = "", width = "0w"] = candidate.trim().split(/\s+/);
      return {
        url,
        width: Number.parseInt(width.replace(/\D/g, ""), 10) || 0,
      };
    })
    .filter((candidate) => candidate.url);

  return candidates.sort((a, b) => b.width - a.width)[0]?.url ?? "";
}

function mapEducationPageHtmlToPosts(contentHtml = ""): BlogPost[] {
  const articles = contentHtml.match(/<article\b[\s\S]*?<\/article>/gi) ?? [];

  return articles
    .map((article) => {
      const titleLink = article.match(
        /<a\b[^>]*class=["'][^"']*eael-grid-post-link[^"']*["'][^>]*>[\s\S]*?<\/a>/i,
      )?.[0];
      const imageTag = article.match(/<img\b[^>]*>/i)?.[0];
      const excerptHtml = article.match(
        /<div\b[^>]*class=["'][^"']*eael-grid-post-excerpt[^"']*["'][^>]*>[\s\S]*?<p>([\s\S]*?)<\/p>/i,
      )?.[1];

      const href = titleLink ? decodeHtmlEntities(getAttribute(titleLink, "href")) : "";
      const title = titleLink ? decodeHtmlEntities(stripHtml(titleLink)) : "";
      const image = imageTag
        ? decodeHtmlEntities(
            getLargestSrcFromSrcset(getAttribute(imageTag, "srcset")) ||
              getAttribute(imageTag, "src"),
          )
        : "";
      const excerpt = decodeHtmlEntities(stripHtml(excerptHtml));

      if (!href || !title || !image) {
        return null;
      }

      return {
        excerpt,
        href,
        image,
        title,
      };
    })
    .filter((post): post is BlogPost => post !== null);
}

async function getWordPressEducationPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(wordpressEducationPageUrl, {
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      return [];
    }

    const pages = (await response.json()) as WordPressPage[];
    return mapEducationPageHtmlToPosts(pages[0]?.content?.rendered);
  } catch {
    return [];
  }
}

export default async function EducationPage() {
  const wordPressEducationPosts = await getWordPressEducationPosts();

  return (
    <DiscoverPage
      page={{
        ...discoverPages.education,
        blogPosts: wordPressEducationPosts.length
          ? wordPressEducationPosts
          : discoverPages.education.blogPosts,
      }}
    />
  );
}
