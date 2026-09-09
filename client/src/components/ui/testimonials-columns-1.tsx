import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import type { Review } from "@/data/reviews";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Review[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role, rating }, i) => (
                <div
                  className="w-full max-w-xs rounded-2xl border border-red/20 bg-white/80 p-8 shadow-soft backdrop-blur-sm"
                  key={i}
                >
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        size={14}
                        className={
                          s < rating
                            ? "fill-red text-red"
                            : "fill-transparent text-red/25"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-[0.95rem] leading-relaxed text-ink/80">
                    &ldquo;{text}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-gradient text-xs font-semibold tracking-wide text-white">
                      {initials(name)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-serif font-semibold leading-5 text-red">
                        {name}
                      </div>
                      <div className="text-xs leading-5 text-ink/50">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
