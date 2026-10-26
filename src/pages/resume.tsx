import PortfolioLayout from "@/components/layout";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { IoMdDownload } from "react-icons/io";

const PAGES = [
  { src: "/resume-preview-1.png", page: 1 },
  { src: "/resume-preview-2.png", page: 2 },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const Resume: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <PortfolioLayout>
      <motion.section
        variants={container}
        initial={shouldReduceMotion ? "show" : "hidden"}
        animate="show"
        className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8"
      >
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Resume
            </h1>
            <p className="mt-2 text-base text-muted">
              Experience, projects, and skills in one document.
            </p>
          </div>
          <a
            href="/Shruti_Dhungana_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-theme bg-accent px-6 py-3 text-sm font-medium text-background transition-all duration-fast hover:-translate-y-0.5 hover:opacity-90"
          >
            Download
            <IoMdDownload aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div variants={container} className="mt-8 space-y-6">
          {PAGES.map(({ src, page }) => (
            <motion.div
              key={page}
              variants={item}
              className="overflow-hidden rounded-theme border border-border bg-surface"
            >
              <Image
                src={src}
                alt={`Resume, page ${page}`}
                width={1275}
                height={1650}
                className="w-full"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.p variants={item} className="mt-4 text-sm text-muted">
          Can&apos;t see the pages above?{" "}
          <a
            href="/Shruti_Dhungana_Resume.pdf"
            className="text-accent transition-colors duration-fast hover:opacity-80"
          >
            Download the PDF
          </a>{" "}
          instead.
        </motion.p>
      </motion.section>
    </PortfolioLayout>
  );
};

export default Resume;
