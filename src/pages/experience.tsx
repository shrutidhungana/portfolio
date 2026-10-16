import PortfolioLayout from "@/components/layout";
import { experienceData } from "@/config";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const Experience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [current, ...past] = experienceData;

  return (
    <PortfolioLayout>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Experience
        </h1>
        <p className="mt-3 max-w-xl text-base text-muted">
          A timeline of roles, from early internships to full-stack work
          today.
        </p>

        <motion.article
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
          variants={item}
          className="mt-10 rounded-theme border border-border bg-surface p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Current
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
              {current.year}
            </span>
          </div>

          <h2 className="mt-3 text-xl font-semibold text-foreground">
            {current.title}
          </h2>
          <p className="mt-1 text-sm text-muted">
            {current.institution} &middot; {current.location}
          </p>

          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {current.details.map((detail, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                {detail.description}
              </li>
            ))}
          </ul>
        </motion.article>

        <h2 className="mt-14 text-xs font-medium uppercase tracking-[0.15em] text-muted">
          Earlier Roles
        </h2>
        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
          className="mt-6 grid gap-6 sm:grid-cols-2"
        >
          {past.map((exp) => (
            <motion.article
              key={exp.id}
              variants={item}
              className="group rounded-theme border border-border bg-surface p-6 transition-all duration-fast hover:-translate-y-0.5 hover:border-accent/40"
            >
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                {exp.year}
              </span>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {exp.title}
              </h3>
              <p className="text-sm text-muted">
                {exp.institution} &middot; {exp.location}
              </p>

              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {exp.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {detail.description}
                  </li>
                ))}
              </ul>

              {exp.credentialLink && (
                <a
                  href={exp.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-fast hover:opacity-80"
                >
                  View credential
                  <FiDownload aria-hidden="true" size={14} />
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </section>
    </PortfolioLayout>
  );
};

export default Experience;
