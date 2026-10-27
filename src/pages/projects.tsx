import PortfolioLayout from "@/components/layout";
import Seo from "@/components/seo";
import Image from "next/image";
import { projectData } from "@/config";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ARCHITECTURE_STEPS = [
  "Auth & RBAC",
  "Employees & Projects",
  "Attendance & Leave",
  "AI & Reports",
];
const STEP_HEIGHT = 32;

const findProject = (title: string) =>
  projectData.find((p) => p.title.trim() === title)!;

const aiOs = findProject("AI Workforce OS");
const flagships = [findProject("Trend Hive"), findProject("To-do full stack")];
const earlyWork = [
  findProject("Movie-App"),
  findProject("Shopping Cart"),
  findProject("Calculator"),
];

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
      <Seo
        title="Work — Shruti Dhungana"
        description="Full-stack projects, from an in-progress workforce management platform to shipped MERN and Next.js applications."
        path="/projects"
      />
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Work
        </h1>
        <p className="mt-3 max-w-xl text-base text-muted">
          Flagship builds first, then projects in order of depth.
        </p>

        <motion.article
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
          variants={item}
          className="mt-10 overflow-hidden rounded-theme border border-border bg-surface"
        >
          <div className="flex h-48 items-center justify-center border-b border-border bg-background px-6">
            <div className="relative pl-5">
              <span
                aria-hidden="true"
                className="absolute bg-accent"
                style={{
                  left: 3,
                  top: STEP_HEIGHT / 2,
                  height: (ARCHITECTURE_STEPS.length - 1) * STEP_HEIGHT,
                  width: 1,
                }}
              />
              {ARCHITECTURE_STEPS.map((label) => (
                <div
                  key={label}
                  className="relative flex items-center gap-3"
                  style={{ height: STEP_HEIGHT }}
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 rounded-full bg-accent"
                  />
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                    {label}
                  </span>
                </div>
              ))}
            </div>
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
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {aiOs.details[2]?.text}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {aiOs.details.slice(3).map((detail, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {detail.text}
                </span>
              ))}
            </div>
            {aiOs.github && (
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <a
                  href={aiOs.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-fast hover:text-accent"
                >
                  <FiGithub aria-hidden="true" size={14} />
                  Code
                </a>
              </div>
            )}
          </div>
        </motion.article>

        {flagships.map((flagship) => (
          <motion.div
            key={flagship.id}
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
        ))}

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
              className="overflow-hidden rounded-theme border border-border bg-surface"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title.trim()}
                  width={800}
                  height={450}
                  className="w-full border-b border-border object-cover"
                />
              )}
              <div className="p-6">
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PortfolioLayout>
  );
};

export default Projects;
