import { motion } from "motion/react";

const MenuPageHero = () => {
  return (
    <section className="relative flex h-[46vh] min-h-[320px] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="/images/interieur-2.jpg"
          alt="Salle du Glacier Moderne"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      </div>

      <div className="container relative z-10 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow !text-white">
            <span className="h-px w-8 bg-white" />
            Sur place, à emporter ou réservé à l'avance
          </span>
          <h1 className="mt-4 font-script text-6xl text-white sm:text-7xl">
            Notre Carte
          </h1>
          <p className="mt-3 max-w-lg text-sm text-cream/70 sm:text-base">
            Composez votre sélection et réservez votre table en un seul geste —
            petit déjeuner, glaces, pizzas, grillades et boissons.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPageHero;
