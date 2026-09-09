import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";
import { dishes } from "@/data/restaurant";

const MenuHighlights = () => {
  return (
    <section id="menu" className="bg-cream py-24 sm:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-xl flex-col items-center text-center"
        >
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-red" />
            Notre carte
            <span className="h-px w-8 bg-red" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-red sm:text-4xl md:text-5xl">
            Quelques Incontournables
          </h2>
          <p className="mt-5 text-ink/60">
            Un avant-goût de notre carte — glaces maison, pizzas et
            spécialités généreusement servies.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-red/15 bg-white shadow-sm transition-shadow duration-300 hover:shadow-red"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4">
                  <span className="rounded-full bg-red-gradient px-3 py-1 text-xs font-bold text-white">
                    {dish.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-red">
                  {dish.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-center gap-4 rounded-2xl bg-red-gradient px-8 py-10 text-center shadow-red sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-red">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-white">
                Envie de voir la carte complète ?
              </h3>
              <p className="mt-1 text-sm text-cream/80">
                Petit déjeuner, glaces, pizzas, grillades et boissons — composez votre sélection et réservez en un clic.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-2">
            <Link to="/menu" className="btn-outline !text-white">
              Voir la carte &amp; réserver <ArrowRight size={16} />
            </Link>
            <a
              href="/menu-lgm.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-cream/70 underline underline-offset-4 hover:text-white"
            >
              Télécharger en PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHighlights;
