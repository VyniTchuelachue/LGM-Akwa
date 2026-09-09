import { motion } from "motion/react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const Contact = () => {
  return (
    <section id="contact" className="bg-cream py-24 sm:py-28">
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-red" />
            Nous trouver
            <span className="h-px w-8 bg-red" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-red sm:text-4xl md:text-5xl">
            Venez nous rendre visite
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-4 rounded-2xl border border-red/15 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-gradient text-white">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-red">Adresse — Akwa</h3>
                <p className="mt-1 text-sm text-ink/60">{restaurant.address}</p>
                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs font-semibold uppercase tracking-wider text-red underline underline-offset-4"
                >
                  Voir l'itinéraire
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-red/15 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-gradient text-white">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-red">Téléphone &amp; WhatsApp</h3>
                <a href={restaurant.phoneHref} className="mt-1 block text-sm text-ink/60 hover:text-red">
                  {restaurant.phone}
                </a>
                <a
                  href={restaurant.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-red underline underline-offset-4"
                >
                  <MessageCircle size={14} /> Écrire sur WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-red/15 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-gradient text-white">
                <Clock size={20} />
              </div>
              <div className="w-full">
                <h3 className="font-serif font-semibold text-red">Horaires d'ouverture</h3>
                <div className="mt-2 space-y-1 text-sm text-ink/60">
                  {restaurant.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="font-semibold text-red">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="min-h-[360px] overflow-hidden rounded-2xl border border-red/15 shadow-sm"
          >
            <iframe
              title="Localisation du Glacier Moderne sur Google Maps"
              src={restaurant.mapEmbedUrl}
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-center font-serif text-xl font-semibold text-red">
            Nos cinq adresses à Douala
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {restaurant.locations.map((loc) => (
              <div
                key={loc.name}
                className={`rounded-xl border p-5 text-center shadow-sm ${
                  loc.featured
                    ? "border-red/40 bg-red-gradient text-white"
                    : "border-red/15 bg-white text-ink"
                }`}
              >
                <h4 className={`font-serif font-semibold ${loc.featured ? "text-white" : "text-red"}`}>
                  {loc.name}
                </h4>
                <div className={`mt-2 space-y-0.5 text-xs ${loc.featured ? "text-cream/90" : "text-ink/60"}`}>
                  {loc.phones.map((p) => (
                    <a key={p} href={`tel:+237${p.replace(/\s/g, "")}`} className="block hover:underline">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
