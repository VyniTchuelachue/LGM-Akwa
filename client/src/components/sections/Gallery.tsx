import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { gallery } from "@/data/restaurant";

const Gallery = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="galerie" className="bg-ink py-24 sm:py-28">
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="section-eyebrow !text-white">
            <span className="h-px w-8 bg-white" />
            Galerie
            <span className="h-px w-8 bg-white" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            L'ambiance Le Glacier Moderne
          </h2>
          <p className="mt-5 text-cream/60">
            Plats signature, salle et instants partagés — un aperçu de l'expérience qui vous attend.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {gallery.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              viewport={{ once: true }}
              onClick={() => setActive(img.src)}
              className={`group relative overflow-hidden rounded-xl border border-white/10 ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ aspectRatio: "1/1" }}
              />
              <div className="absolute inset-0 bg-red-dark/0 transition-colors duration-300 group-hover:bg-red-dark/20" />
            </motion.button>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-6"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute right-6 top-6 text-cream hover:text-white"
              onClick={() => setActive(null)}
              aria-label="Fermer"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={active}
              alt=""
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
