import PortfolioLayout from "@/components/layout";
import BootSplash from "@/components/boot-splash";
import Seo from "@/components/seo";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import SpinMark from "@/components/svg/spin-mark";
import type { GetStaticProps } from "next";
import { socialMediaLinks, experienceData, skillGroups } from "@/config";
import { fetchMediumPosts, type WritingPost } from "@/lib/medium";

type HomeProps = {
  latestPost: WritingPost | null;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await fetchMediumPosts();
  return { props: { latestPost: posts[0] ?? null }, revalidate: 3600 };
};

const FACTS = [
  { label: "Currently", value: "Software Engineer, LeftclickTech" },
  { label: "Building since", value: "2022" },
];

const BUILD_PRINCIPLES = [
  {
    title: "API-first",
    detail:
      "Data model and API contract come before the UI, using Zod and Drizzle, so the frontend consumes a stable shape.",
  },
  {
    title: "Typed boundaries",
    detail:
      "TypeScript end to end between client and server, so mismatches surface at build time, not in production.",
  },
  {
    title: "Deploy early",
    detail:
      "Features go to Vercel or Docker early, so integration and environment issues show up before launch day.",
  },
];

const latestRole = experienceData[0];
const latestRoleSummary = (() => {
  const desc = latestRole.details[0]?.description ?? "";
  return desc.length > 110 ? `${desc.slice(0, 110).trim()}…` : desc;
})();

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

export default function Home({ latestPost }: HomeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <PortfolioLayout>
      <Seo
        title="Shruti Dhungana — Full-Stack Software Engineer"
        description="Full-stack software engineer building product interfaces, APIs, and data systems end to end."
        path="/"
      />
      <BootSplash />
      <div className="relative flex flex-1 flex-col">
        <div
          aria-hidden="true"
          className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[480px]"
        />
        <section className="relative m-auto grid w-full max-w-6xl gap-10 px-6 py-10 sm:py-12 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-20 lg:px-8 lg:py-10 [@media(min-width:1024px)and(min-height:850px)]:-translate-y-10">
          <motion.div
            variants={container}
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1"
            >
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent text-accent" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                Full-Stack Software Engineer
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              I build full-stack products,
              <br className="hidden sm:block" /> from interface to{" "}
              <span className="text-gradient-accent">infrastructure</span>.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted"
            >
              I work across product interfaces, backend APIs, and the data
              layer connecting them. Outside work, I build complete products
              end to end, with architecture, deployment, and production
              concerns included.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-theme bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-all duration-fast hover:-translate-y-0.5 hover:opacity-90"
              >
                View Work
                <FiArrowUpRight
                  aria-hidden="true"
                  className="transition-transform duration-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-theme border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-fast hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                Resume
                <IoMdDownload aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.aside
            variants={item}
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            className="float-panel relative overflow-visible rounded-theme border border-border bg-surface shadow-theme-md"
          >
            <SpinMark className="animate-rotateSlow pointer-events-none absolute -right-4 -top-4 h-10 w-10 text-accent/50" />
            <div className="overflow-hidden rounded-theme">
              <div className="flex items-center gap-1.5 border-b border-border bg-chip px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f06a6a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e8b34a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="ml-2 text-xs text-muted">profile.ts</span>
              </div>

              <pre className="overflow-hidden px-5 py-5 font-mono text-[12.5px] leading-relaxed">
                <code className="block whitespace-pre-wrap break-words">
                  <span className="text-muted">const</span>{" "}
                  <span className="text-accent">engineer</span>
                  <span className="text-muted">:</span>{" "}
                  <span className="text-muted">Engineer</span>{" "}
                  <span className="text-muted">= {"{"}</span>
                  {FACTS.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-wrap items-baseline gap-x-1.5 py-0.5 pl-4"
                    >
                      <span className="text-foreground">
                        {fact.label.toLowerCase().replace(/[^a-z]+/g, "_")}:
                      </span>
                      <span className="break-words text-accent">
                        &quot;{fact.value}&quot;
                      </span>
                      <span className="text-muted">,</span>
                    </div>
                  ))}
                  <span className="text-muted">{"}"}</span>
                  <span className="code-caret" aria-hidden="true" />
                </code>
              </pre>

              <div className="flex items-center gap-4 border-t border-border px-5 py-4">
                {socialMediaLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-lg text-muted transition-colors duration-fast hover:text-accent"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
          >
            <motion.h2
              variants={item}
              className="text-xs font-medium uppercase tracking-[0.15em] text-muted"
            >
              Skills
            </motion.h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group) => (
                <motion.div key={group.id} variants={item}>
                  <h3 className="text-sm font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-chip px-3 py-1 text-xs text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
          >
            <motion.h2
              variants={item}
              className="text-xs font-medium uppercase tracking-[0.15em] text-muted"
            >
              How I Build
            </motion.h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {BUILD_PRINCIPLES.map((principle) => (
                <motion.div key={principle.title} variants={item}>
                  <h3 className="text-base font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {principle.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="grid gap-6 sm:grid-cols-3"
          >
            <motion.div
              variants={item}
              className="rounded-theme border border-border bg-surface p-6 shadow-theme-sm transition-shadow duration-slow hover:shadow-theme-md"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                Experience
              </p>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                {latestRole.title}, {latestRole.institution}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {latestRoleSummary}
              </p>
              <Link
                href="/experience"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-fast hover:opacity-80"
              >
                View experience
                <FiArrowUpRight aria-hidden="true" size={14} />
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="rounded-theme border border-border bg-surface p-6 shadow-theme-sm transition-shadow duration-slow hover:shadow-theme-md"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                Writing
              </p>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                {latestPost
                  ? latestPost.title.length > 64
                    ? `${latestPost.title.slice(0, 64).trim()}…`
                    : latestPost.title
                  : "Notes on engineering trade-offs"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {latestPost
                  ? `${(latestPost.summary || "Read the latest write-up.").slice(0, 110).trim()}…`
                  : "An index of real technical write-ups. Coming soon."}
              </p>
              <Link
                href="/writing"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-fast hover:opacity-80"
              >
                View writing
                <FiArrowUpRight aria-hidden="true" size={14} />
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="rounded-theme border border-border bg-surface p-6 shadow-theme-sm transition-shadow duration-slow hover:shadow-theme-md"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                About
              </p>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                Background &amp; education
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                How I got into full-stack development, plus a short note on
                what I do outside of it.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-fast hover:opacity-80"
              >
                More about me
                <FiArrowUpRight aria-hidden="true" size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={item}
            className="flex flex-col items-start gap-6 rounded-theme border border-border bg-surface p-8 shadow-theme-md sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Get In Touch
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                Open to full-stack roles and interesting projects. The
                quickest way to reach me is email.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:shrutidhungana123@gmail.com"
                className="group inline-flex items-center gap-2 rounded-theme bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-all duration-fast hover:-translate-y-0.5 hover:opacity-90"
              >
                <FaRegEnvelope aria-hidden="true" />
                Email Me
              </a>
              <div className="flex items-center gap-4 border-l border-border pl-4">
                {socialMediaLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-lg text-muted transition-colors duration-fast hover:text-accent"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </PortfolioLayout>
  );
}
