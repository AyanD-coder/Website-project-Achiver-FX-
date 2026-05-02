import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";
import type { BlogPost } from "@/components/ui/discover-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/discover/blogs");

type WordPressRenderedValue = {
  rendered?: string;
};

type WordPressFeaturedMedia = {
  source_url?: string;
};

type WordPressPost = {
  excerpt?: WordPressRenderedValue;
  link?: string;
  title?: WordPressRenderedValue;
  _embedded?: {
    "wp:featuredmedia"?: WordPressFeaturedMedia[];
  };
};

const defaultWordPressPostsUrl =
  "https://achieverfinancials.com/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=12";

const wordpressPostsUrl =
  process.env.WORDPRESS_BLOG_POSTS_URL ?? defaultWordPressPostsUrl;

function stripHtml(value = "") {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtmlEntities(value = "") {
  return value
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8211;|&#8212;/g, "-")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

async function getWordPressPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(wordpressPostsUrl, {
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      return [];
    }

    const posts = (await response.json()) as WordPressPost[];

    return posts
      .map((post) => {
        const title = decodeHtmlEntities(stripHtml(post.title?.rendered));
        const excerpt = decodeHtmlEntities(stripHtml(post.excerpt?.rendered));
        const href = post.link;
        const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        if (!title || !href || !image) {
          return null;
        }

        return {
          title,
          excerpt,
          href,
          image,
        };
      })
      .filter((post): post is BlogPost => post !== null);
  } catch {
    return [];
  }
}

export default async function BlogsPage() {
  const wordPressPosts = await getWordPressPosts();

  return (
    <DiscoverPage
      page={{
        ...discoverPages.blogs,
        blogPosts: wordPressPosts.length
          ? wordPressPosts
          : discoverPages.blogs.blogPosts,
      }}
    />
  );
}
