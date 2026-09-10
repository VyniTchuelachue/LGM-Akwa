import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Phase 1: logo entrance + a couple of breathing pulses, held on screen alone.
const LOGO_PULSE_DURATION = prefersReducedMotion ? 0 : 1.9;
const LOGO_PULSE_TIMES = [0, 0.26, 0.47, 0.63, 0.84, 1];

// Phase 2: text reveal (same animation as before), starting once the logo settles.
const TEXT_START = prefersReducedMotion ? 0 : LOGO_PULSE_DURATION;
const FILL_DELAY = TEXT_START + 0.25;
const FILL_DURATION = prefersReducedMotion ? 0 : 0.7;
const SHIMMER_DELAY = FILL_DELAY + FILL_DURATION - 0.05;
const SHIMMER_DURATION = prefersReducedMotion ? 0 : 0.7;

const HOLD_MS = prefersReducedMotion ? 250 : (SHIMMER_DELAY + SHIMMER_DURATION + 0.3) * 1000;

const PageTransition = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const t = setTimeout(() => setVisible(false), HOLD_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #8F0E22 0%, #C8102E 100%)" }}
          aria-hidden="true"
        >
          <div className="relative flex flex-col items-center px-6 text-center">
            <motion.img
              src="/images/logo.png"
              alt="Logo Le Glacier Moderne"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: prefersReducedMotion ? 1 : [0.7, 1, 1.05, 1, 1.05, 1] }}
              transition={{
                opacity: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                scale: {
                  duration: prefersReducedMotion ? 0.2 : LOGO_PULSE_DURATION,
                  times: prefersReducedMotion ? undefined : LOGO_PULSE_TIMES,
                  ease: "easeInOut",
                },
              }}
              className="h-28 w-auto object-contain drop-shadow-lg sm:h-32"
            />

            <motion.span
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: TEXT_START }}
              className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.45em] text-white/70"
            >
              Depuis 1996 — Akwa, Douala
            </motion.span>

            <div className="relative mt-3 select-none">
              <span className="font-script text-5xl leading-none text-white/25 sm:text-6xl md:text-7xl">
                Le Glacier Moderne
              </span>

              {/* White fill, left to right */}
              <motion.span
                initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: FILL_DURATION, delay: FILL_DELAY, ease: [0.45, 0, 0.2, 1] }}
                className="absolute inset-0 font-script text-5xl leading-none text-white drop-shadow-[0_2px_16px_rgba(255,255,255,0.35)] sm:text-6xl md:text-7xl"
              >
                Le Glacier Moderne
              </motion.span>

              {/* Shine sweep, right to left */}
              <motion.span
                initial={{ backgroundPosition: "200% 0%" }}
                animate={{ backgroundPosition: "-100% 0%" }}
                transition={{ duration: SHIMMER_DURATION, delay: SHIMMER_DELAY, ease: "easeInOut" }}
                className="absolute inset-0 bg-clip-text font-script text-5xl leading-none text-transparent sm:text-6xl md:text-7xl"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg, transparent 42%, rgba(255,255,255,0.9) 50%, transparent 58%)",
                  backgroundSize: "300% 100%",
                }}
              >
                Le Glacier Moderne
              </motion.span>
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: TEXT_START + 0.1 }}
              className="mt-3 text-[0.6rem] font-semibold uppercase tracking-[0.45em] text-white/70"
            >
              Salon de thé · Glacier · Pâtisserie · Restaurant
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
