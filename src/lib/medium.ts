import Parser from "rss-parser";

const MEDIUM_FEED_URL = "https://medium.com/feed/@shrutidhungana123";

export type WritingPost = {
  title: string;
  link: string;
  pubDate: string;
  summary: string;
  thumbnail: string | null;
};

export async function fetchMediumPosts(): Promise<WritingPost[]> {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(MEDIUM_FEED_URL);
    return (feed.items ?? [])
      .map((item) => {
        const title = item.title ?? "Untitled";
        const rawSnippet =
          (item as Record<string, string>)["content:encodedSnippet"] ??
          item.contentSnippet ??
          "";
        const cleaned = rawSnippet.replace(/\s+/g, " ").trim();
        const normalize = (s: string) => s.replace(/\s+/g, " ").trim();
        const normalizedTitle = normalize(title);
        const summary = normalize(cleaned).startsWith(normalizedTitle)
          ? cleaned.slice(normalizedTitle.length).trim()
          : cleaned;

        const html = (item as Record<string, string>)["content:encoded"] ?? "";
        const imgMatches = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)];
        const thumbnail =
          imgMatches
            .map((m) => m[1])
            .find(
              (src) =>
                /^https:\/\/(miro\.medium\.com|cdn-images-1\.medium\.com)\//.test(
                  src
                )
            ) ?? null;

        return {
          title,
          link: item.link ?? "",
          pubDate: item.pubDate ?? "",
          summary: summary.slice(0, 220),
          thumbnail,
        };
      })
      .filter((post) => post.link);
  } catch {
    return [];
  }
}
