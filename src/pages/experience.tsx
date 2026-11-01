import PortfolioLayout from "@/components/layout";
import Seo from "@/components/seo";
import { experienceData } from "@/config";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import DiamondMark from "@/components/svg/diamond-mark";

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
      <Seo
        title="Experience — Shruti Dhungana"
        description="Professional experience across full-stack engineering roles, from early internships to building NDIS compliance software."
        path="/experience"
      />
      <section className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-16 lg:px-8">
        <div
          aria-hidden="true"
          className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-64"
        />
        <DiamondMark className="animate-rotate-reverse-slow pointer-events-none absolute -top-2 right-0 hidden h-12 w-12 text-accent/50 sm:block" />
        <div className="relative">
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Experience
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted">
            A timeline of roles, from early internships to{" "}
            <span className="text-gradient-accent">full-stack</span> work
            today.
          </p>
        </div>

        <motion.article
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
          variants={item}
          className="mt-10 rounded-theme border border-border bg-surface p-6 shadow-theme-sm transition-shadow duration-slow hover:shadow-theme-md sm:p-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-accent">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent text-accent" />
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
            {current.institutionLink ? (
              <a
                href={current.institutionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors duration-fast hover:text-accent"
              >
                {current.institution}
                <FiExternalLink aria-hidden="true" size={12} />
              </a>
            ) : (
              current.institution
            )}{" "}
            &middot; {current.location}
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
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 grid gap-6 sm:grid-cols-2"
        >
          {past.map((exp) => (
            <motion.article
              key={exp.id}
              variants={item}
              className="group rounded-theme border border-border bg-surface p-6 shadow-theme-sm transition-all duration-slow hover:-translate-y-1 hover:border-accent/40 hover:shadow-theme-md"
            >
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                {exp.year}
              </span>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {exp.title}
              </h3>
              <p className="text-sm text-muted">
                {exp.institutionLink ? (
                  <a
                    href={exp.institutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors duration-fast hover:text-accent"
                  >
                    {exp.institution}
                    <FiExternalLink aria-hidden="true" size={12} />
                  </a>
                ) : (
                  exp.institution
                )}{" "}
                &middot; {exp.location}
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
