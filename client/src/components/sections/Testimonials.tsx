import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { reviews, overallRating, totalReviews } from "@/data/reviews";

const firstColumn = [reviews[0], reviews[3], reviews[6]];
const secondColumn = [reviews[1], reviews[4]];
const thirdColumn = [reviews[2], reviews[5]];

const Testimonials = () => {
  return (
    <section id="avis" className="relative overflow-hidden bg-cream py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #C8102E 0, transparent 45%), radial-gradient(circle at 80% 80%, #8F0E22 0, transparent 45%)",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-xl flex-col items-center text-center"
        >
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-red" />
            Ils nous ont fait confiance
            <span className="h-px w-8 bg-red" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-red sm:text-4xl md:text-5xl">
            Ce que disent nos convives
          </h2>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-red/30 bg-white/70 px-5 py-2.5 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(overallRating)
                        ? "fill-red text-red"
                        : "fill-transparent text-red/25"
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-red">{overallRating.toFixed(1)}/5</span>
            </div>
            <span className="text-xs text-ink/50 sm:text-sm">
              plus de {totalReviews.toLocaleString("fr-FR")} avis en ligne
            </span>
          </div>

          <p className="mt-5 text-ink/60">
            Une sélection de nos avis, laissés par nos clients sur Google et Pages Jaunes Cameroun.
          </p>
        </motion.div>

        <div className="mt-14 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={17} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={21}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={19}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
