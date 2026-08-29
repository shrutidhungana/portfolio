import PortfolioLayout from "@/components/layout";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { socialMediaLinks } from "@/config";

const STACK = ["TypeScript", "React", "Node", "Hono", "Drizzle"];

const FACTS = [
  { label: "Currently", value: "Software Engineer, LeftclickTech" },
  { label: "Building software since", value: "2022" },
];

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

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <PortfolioLayout>
      <section className="mx-auto grid w-full max-w-6xl gap-16 px-6 py-20 sm:py-28 lg:grid-cols-[1fr_320px] lg:items-center lg:px-8 lg:py-32">
        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
              Full-Stack Software Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            I build full-stack products
            <br className="hidden sm:block" /> from interfaces to the APIs and
            data underneath.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            I work across product interfaces, backend APIs, and the data
            layer connecting them — taking features from first commit to what
            ships to production. Outside of work, I build and deploy complete
            projects the same way: end to end, not just demos.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-theme bg-accent px-6 py-3 text-sm font-medium text-background transition-all duration-fast hover:-translate-y-0.5 hover:opacity-90"
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

          <motion.p
            variants={item}
            className="mt-14 text-xs font-medium uppercase tracking-[0.15em] text-muted"
          >
            {STACK.join(" · ")}
          </motion.p>
        </motion.div>

        <motion.aside
          variants={item}
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
          className="rounded-theme border border-border bg-surface p-6"
        >
          <dl className="space-y-5">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
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
        </motion.aside>
      </section>
    </PortfolioLayout>
  );
}
