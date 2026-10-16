import PortfolioLayout from "@/components/layout";
import { educationData, socialMediaLinks } from "@/config";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <PortfolioLayout>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          About
        </h1>
        <p className="mt-3 max-w-xl text-base text-muted">
          Background, education, and a bit of what I do outside of code.
        </p>

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
          className="mt-10 max-w-2xl"
        >
          <motion.div
            variants={item}
            className="space-y-4 text-base leading-relaxed text-foreground"
          >
            <p>
              I&apos;m a full-stack developer based in Nepal, currently
              working as a Software Engineer at LeftclickTech. I started in
              frontend development, interning at Prixa Technologies and
              Treeleaf Technologies, then worked as a React developer at
              Digital Anka (Varicon) before moving into full-stack work
              covering APIs, data models, and deployment.
            </p>
            <p>
              Outside of work, I read novels, watch films, and spend time
              trying out new tools and frameworks to see how they&apos;d fit
              into a real project.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex items-center gap-5"
          >
            <div className="flex items-center gap-4">
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
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-theme border border-border px-4 py-2 text-sm font-medium text-foreground transition-all duration-fast hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Resume
              <IoMdDownload aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        <h2 className="mt-14 text-xs font-medium uppercase tracking-[0.15em] text-muted">
          Education
        </h2>
        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
          className="mt-6 grid gap-4 sm:grid-cols-3"
        >
          {educationData.map((edu) => (
            <motion.article
              key={edu.id}
              variants={item}
              className="rounded-theme border border-border bg-surface p-5"
            >
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                {edu.year}
              </span>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {edu.title}
              </h3>
              <p className="text-sm text-muted">{edu.institution}</p>
              <p className="mt-1 text-sm text-muted">{edu.location}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </PortfolioLayout>
  );
};

export default About;
