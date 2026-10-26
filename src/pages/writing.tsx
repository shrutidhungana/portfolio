import PortfolioLayout from "@/components/layout";
import Seo from "@/components/seo";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import type { GetStaticProps } from "next";
import { fetchMediumPosts, type WritingPost } from "@/lib/medium";

type WritingProps = {
  posts: WritingPost[];
};

export const getStaticProps: GetStaticProps<WritingProps> = async () => {
  const posts = await fetchMediumPosts();
  return { props: { posts }, revalidate: 3600 };
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
      <Seo
        title="Writing — Shruti Dhungana"
        description="Technical articles on full-stack engineering: API design, authentication, and architecture trade-offs."
        path="/writing"
      />
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
                className="flex flex-col gap-5 rounded-theme border border-border bg-surface p-6 transition-all duration-fast hover:-translate-y-0.5 hover:border-accent/40 sm:flex-row sm:items-start"
              >
                {post.thumbnail && (
                  <Image
                    src={post.thumbnail}
                    alt=""
                    width={160}
                    height={160}
                    className="h-28 w-full shrink-0 rounded-theme border border-border object-cover sm:h-24 sm:w-32"
                  />
                )}
                <div className="min-w-0 flex-1">
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
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </section>
    </PortfolioLayout>
  );
};

export default Writing;
