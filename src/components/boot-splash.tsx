import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const STORAGE_KEY = "portfolio-boot-seen";
const STEPS = ["Interface", "API", "Data", "Infrastructure"];
const ROW_HEIGHT = 28;

const BootSplash: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // localStorage unavailable — nothing to persist, just stop showing it
    }
  }, []);

  useEffect(() => {
    let seen = true;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = true;
    }

    if (seen || shouldReduceMotion) return;

    setVisible(true);
    const timer = setTimeout(dismiss, 1900);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion, dismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          onClick={dismiss}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-background"
        >
          <div className="relative pl-5">
            <motion.span
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: 3,
                top: ROW_HEIGHT / 2,
                height: (STEPS.length - 1) * ROW_HEIGHT,
                width: 1,
                transformOrigin: "top",
              }}
              className="bg-accent"
            />
            {STEPS.map((label, i) => (
              <div
                key={label}
                className="relative flex items-center gap-3"
                style={{ height: ROW_HEIGHT }}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: (i / (STEPS.length - 1)) * 0.9,
                    duration: 0.15,
                  }}
                  className="h-2 w-2 shrink-0 rounded-full bg-accent"
                />
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSplash;
