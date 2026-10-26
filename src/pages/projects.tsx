import PortfolioLayout from "@/components/layout";
import Image from "next/image";
import { projectData } from "@/config";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FiGithub, FiExternalLink, FiLayers } from "react-icons/fi";

const findProject = (title: string) =>
  projectData.find((p) => p.title.trim() === title)!;

const aiOs = findProject("AI Workforce OS");
const flagship = findProject("Movie-App");
const earlyWork = [findProject("Shopping Cart"), findProject("Calculator")];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <PortfolioLayout>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Work
        </h1>
        <p className="mt-3 max-w-xl text-base text-muted">
          The flagship build first, then projects in order of depth.
        </p>

        <motion.article
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
          variants={item}
          className="mt-10 overflow-hidden rounded-theme border border-border bg-surface"
        >
          <div className="flex h-48 items-center justify-center border-b border-border bg-background">
            <FiLayers aria-hidden="true" size={32} className="text-muted" />
          </div>
          <div className="p-6 sm:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Currently building
            </span>
            <h2 className="mt-3 text-xl font-semibold text-foreground">
              {aiOs.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {aiOs.details[0]?.text}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {aiOs.details[1]?.text}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {aiOs.details.slice(2).map((detail, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {detail.text}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-10 overflow-hidden rounded-theme border border-border bg-surface"
        >
          <motion.div variants={item}>
            <Image
              src={flagship.image}
              alt={flagship.title}
              width={1200}
              height={675}
              className="w-full border-b border-border object-cover"
            />
          </motion.div>
          <motion.div variants={item} className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground">
              {flagship.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {flagship.details[0]?.text}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {flagship.details[1]?.text}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {flagship.details.slice(3).map((detail, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {detail.text}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              {flagship.github && (
                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-fast hover:text-accent"
                >
                  <FiGithub aria-hidden="true" size={14} />
                  Code
                </a>
              )}
              {flagship.website && (
                <a
                  href={flagship.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-fast hover:text-accent"
                >
                  <FiExternalLink aria-hidden="true" size={14} />
                  Live site
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>

        <h2 className="mt-14 text-xs font-medium uppercase tracking-[0.15em] text-muted">
          Early Work
        </h2>
        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 grid gap-6 sm:grid-cols-2"
        >
          {earlyWork.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="rounded-theme border border-border bg-surface p-6"
            >
              <h3 className="text-base font-semibold text-foreground">
                {project.title.trim()}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.details[0]?.text}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-fast hover:text-accent"
                  >
                    <FiGithub aria-hidden="true" size={14} />
                    Code
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-fast hover:text-accent"
                  >
                    <FiExternalLink aria-hidden="true" size={14} />
                    Live site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PortfolioLayout>
  );
};

export default Projects;
