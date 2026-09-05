import PortfolioLayout from "@/components/layout";
import BootSplash from "@/components/boot-splash";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { socialMediaLinks } from "@/config";

const FACTS = [
  { label: "Currently", value: "Software Engineer, LeftclickTech" },
  { label: "Building for the web since", value: "2022" },
];

const FLOW_STEPS = [
  { label: "Interface", detail: "React · TypeScript" },
  { label: "API", detail: "Node · Hono" },
  { label: "Data", detail: "PostgreSQL" },
  { label: "Infrastructure", detail: "Vercel · Docker" },
];

const FLOW_ROW_HEIGHT = 32;

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
      <BootSplash />
      <div className="relative flex flex-1 flex-col">
        <section className="m-auto grid w-full max-w-6xl gap-10 px-6 py-10 sm:py-12 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-20 lg:px-8 lg:py-10 [@media(min-height:850px)]:-translate-y-10">
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
              className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              I build full-stack products,
              <br className="hidden sm:block" /> from interface to
              infrastructure.
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
          </motion.div>

          <motion.aside
            variants={item}
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            className="rounded-theme border border-border bg-surface p-6"
          >
            <dl className="space-y-3">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 border-t border-border pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                What I Work Across
              </p>
              <div className="relative mt-3 pl-5">
                <motion.span
                  initial={shouldReduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.9,
                    ease: "easeOut",
                  }}
                  style={{
                    position: "absolute",
                    left: 3,
                    top: FLOW_ROW_HEIGHT / 2,
                    height: (FLOW_STEPS.length - 1) * FLOW_ROW_HEIGHT,
                    width: 1,
                    transformOrigin: "top",
                  }}
                  className="bg-accent"
                />
                {FLOW_STEPS.map((step, i) => (
                  <div
                    key={step.label}
                    className="relative flex items-center justify-between gap-3"
                    style={{ height: FLOW_ROW_HEIGHT }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.span
                        initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: shouldReduceMotion
                            ? 0
                            : (i / (FLOW_STEPS.length - 1)) * 0.9,
                          duration: 0.15,
                        }}
                        className="h-2 w-2 shrink-0 rounded-full bg-accent"
                      />
                      <span className="text-sm font-medium text-foreground">
                        {step.label}
                      </span>
                    </div>
                    <span className="text-xs text-foreground">
                      {step.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
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
      </div>
    </PortfolioLayout>
  );
}
