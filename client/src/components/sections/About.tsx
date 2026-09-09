import { motion } from "motion/react";
import { IceCreamCone, Clock, Users, Cake } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const features = [
  {
    icon: IceCreamCone,
    title: "Glaces Artisanales",
    text: "Fabriquées sur place chaque matin, en coupes, liégeois ou entremets glacés.",
  },
  {
    icon: Clock,
    title: "Ouvert Tous les Jours",
    text: "Salon de thé, restaurant et pizzeria de 7h à 23h, sept jours sur sept.",
  },
  {
    icon: Users,
    title: "Cadre Convivial",
    text: "Salle lumineuse et terrasse, idéales entre collègues, en famille ou entre amis.",
  },
  {
    icon: Cake,
    title: "Pâtisserie & Traiteur",
    text: "Gâteaux de mariage et d'anniversaire sur commande, service traiteur et livraison.",
  },
];

const About = () => {
  return (
    <section id="a-propos" className="relative bg-red-gradient py-24 sm:py-28">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/interieur-1.jpg"
              alt="Intérieur du Glacier Moderne à Akwa"
              className="col-span-2 h-64 w-full rounded-2xl object-cover shadow-xl"
            />
            <img
              src="/images/interieur-2.jpg"
              alt="Salle du Glacier Moderne"
              className="h-48 w-full rounded-2xl object-cover shadow-xl"
            />
            <img
              src="/images/interieur-3.jpg"
              alt="Ambiance du Glacier Moderne"
              className="h-48 w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-white/40 bg-ink/90 px-7 py-5 text-center shadow-2xl backdrop-blur sm:block">
            <div className="font-script text-4xl text-white">{restaurant.since}</div>
            <div className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-cream/70">
              Depuis
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow !text-white">
            <span className="h-px w-8 bg-white" />
            Notre histoire
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            L'art de recevoir, à la douala&iuml;se
          </h2>
          <p className="mt-6 text-cream/80 leading-relaxed">
            Niché au cœur d'Akwa, Le Glacier Moderne fait partie du quotidien
            des Douala&iuml;s depuis {restaurant.since}. Ce qui a commencé
            comme un glacier de quartier est devenu une véritable maison
            gourmande&nbsp;: salon de thé, glacier, pâtisserie, restaurant et
            pizzeria réunis sous une même enseigne, aujourd'hui déclinée en
            cinq adresses à travers Douala.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-red shadow-soft">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-cream">{title}</h3>
                  <p className="mt-1 text-sm text-cream/70">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
