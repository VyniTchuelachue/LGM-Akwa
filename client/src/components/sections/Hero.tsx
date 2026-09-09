import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MapPin, ChevronDown } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <img
          src="/images/facade-akwa.jpg"
          alt="Façade du Glacier Moderne à Akwa, Douala"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-red-dark/60" />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <div className="container relative z-10 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span className="section-eyebrow !text-white">
            <span className="h-px w-8 bg-white" />
            Salon de thé · Glacier · Pâtisserie · Restaurant · Pizzeria
            <span className="h-px w-8 bg-white" />
          </span>

          <h1 className="mt-6 font-script text-6xl leading-none text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-7xl md:text-8xl">
            Le Glacier Moderne
          </h1>

          <p className="mt-6 max-w-xl font-serif text-xl italic text-cream/90 sm:text-2xl">
            Une maison douala&iuml;se fondée en {restaurant.since}, où glaces
            artisanales et cuisine généreuse se retrouvent sous un même toit.
          </p>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/70 sm:text-base">
            Glaces fabriquées sur place chaque matin, pizzas au four, grillades
            et spécialités orientales, servies chaque jour à Akwa et dans nos
            quatre autres adresses de Douala.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/menu#reservation" className="btn-primary">
              Réserver une table
            </Link>
            <Link to="/menu" className="btn-outline">
              Découvrir le menu
            </Link>
          </div>

          <a
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-cream/60 transition-colors hover:text-white"
          >
            <MapPin size={14} className="text-white" />
            {restaurant.address}
          </a>
        </motion.div>
      </div>

      <a
        href="#avis"
        aria-label="Défiler vers le bas"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/80"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
