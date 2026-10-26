import PortfolioLayout from "@/components/layout";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import type { GetStaticProps } from "next";
import Parser from "rss-parser";

const MEDIUM_FEED_URL = "https://medium.com/feed/@shrutidhungana123";

type WritingPost = {
  title: string;
  link: string;
  pubDate: string;
  summary: string;
};

type WritingProps = {
  posts: WritingPost[];
};

export const getStaticProps: GetStaticProps<WritingProps> = async () => {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(MEDIUM_FEED_URL);
    const posts: WritingPost[] = (feed.items ?? [])
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

        return {
          title,
          link: item.link ?? "",
          pubDate: item.pubDate ?? "",
          summary: summary.slice(0, 220),
        };
      })
      .filter((post) => post.link);

    return { props: { posts }, revalidate: 3600 };
  } catch {
    return { props: { posts: [] }, revalidate: 3600 };
  }
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const Writing: React.FC<WritingProps> = ({ posts }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <PortfolioLayout>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Writing
        </h1>
        <p className="mt-3 max-w-xl text-base text-muted">
          Blogs and articles on engineering topics I&apos;ve worked through.
        </p>

        {posts.length === 0 ? (
          <div className="mt-10 rounded-theme border border-border bg-surface p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-muted">
              Nothing published yet. New articles appear here automatically
              once posted.
            </p>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            className="mt-10 space-y-4"
          >
            {posts.map((post) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                className="block rounded-theme border border-border bg-surface p-6 transition-all duration-fast hover:-translate-y-0.5 hover:border-accent/40"
              >
                {post.pubDate && (
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                    {formatDate(post.pubDate)}
                  </span>
                )}
                <h2 className="mt-1 text-lg font-semibold text-foreground">
                  {post.title}
                </h2>
                {post.summary && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {post.summary}
                  </p>
                )}
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Read article
                  <FiExternalLink aria-hidden="true" size={14} />
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </section>
    </PortfolioLayout>
  );
};

export default Writing;
