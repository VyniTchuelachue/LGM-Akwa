import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { CalendarDays, Users, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { formatXAF } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import type { CartLine } from "./CartBar";

type Status = "idle" | "success";

function buildWhatsAppMessage(
  data: Record<string, FormDataEntryValue>,
  lines: CartLine[],
  total: number
) {
  const rows = [
    "Nouvelle réservation — Le Glacier Moderne",
    "",
    `Nom : ${data.name}`,
    `Téléphone : ${data.phone}`,
    `Date : ${data.date}`,
    `Heure : ${data.time}`,
    `Convives : ${data.guests}`,
  ];
  if (data.location) rows.push(`Adresse souhaitée : ${data.location}`);
  if (data.email) rows.push(`Email : ${data.email}`);
  if (data.message) rows.push(`Message : ${data.message}`);

  if (lines.length > 0) {
    rows.push("", "Sélection :");
    lines.forEach(({ item, qty }) => {
      rows.push(`- ${qty}× ${item.name} (${formatXAF((item.price || 0) * qty)})`);
    });
    rows.push(`Total estimé : ${formatXAF(total)}`);
  }

  return rows.join("\n");
}

const MenuReservation = ({ lines, total }: { lines: CartLine[]; total: number }) => {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const message = buildWhatsAppMessage(data, lines, total);

    window.open(`${restaurant.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank");
    setStatus("success");
    form.reset();
  }

  return (
    <section id="reservation" className="scroll-mt-40 bg-red-gradient py-24 sm:py-28">
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow !text-white">
              <span className="h-px w-8 bg-white" />
              Réservation
            </span>
            <h2 className="mt-5 font-serif text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
              Réservez votre table
            </h2>
            <p className="mt-6 text-cream/80 leading-relaxed">
              Ajoutez des plats à votre sélection ci-dessus pour les inclure à
              votre réservation, ou réservez simplement une table — notre
              équipe confirmera par téléphone ou WhatsApp.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-cream/85">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-white" /> Ouvert tous les jours, 07:00 – 23:00
              </li>
              <li className="flex items-center gap-3">
                <Users size={18} className="text-white" /> Groupes, gâteaux et événements sur demande
              </li>
              <li className="flex items-center gap-3">
                <CalendarDays size={18} className="text-white" /> Confirmation par téléphone ou WhatsApp
              </li>
            </ul>

            {lines.length > 0 && (
              <div className="mt-8 rounded-2xl border border-white/25 bg-white/10 p-5">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Votre sélection
                </h3>
                <div className="mt-3 space-y-1.5">
                  {lines.map(({ item, qty }) => (
                    <div key={item.id} className="flex justify-between text-sm text-cream/90">
                      <span>{qty}× {item.name}</span>
                      <span className="text-cream/70">{formatXAF((item.price || 0) * qty)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-between border-t border-white/20 pt-3 text-sm font-bold text-white">
                  <span>Total estimé</span>
                  <span>{formatXAF(total)}</span>
                </div>
              </div>
            )}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/25 bg-cream/95 p-7 shadow-2xl sm:p-9"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 size={48} className="text-red" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-red">
                  Votre demande est prête !
                </h3>
                <p className="mt-2 text-sm text-ink/60">
                  Nous avons ouvert WhatsApp avec les détails de votre
                  réservation — il ne vous reste qu'à appuyer sur envoyer
                  pour la transmettre au Glacier Moderne.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-red underline underline-offset-4"
                >
                  Faire une nouvelle réservation
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-red">
                    Nom complet
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    className="w-full rounded-lg border border-red/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red focus:ring-2 focus:ring-red/30"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-red">
                    Téléphone
                  </label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="+237 6XX XXX XXX"
                    className="w-full rounded-lg border border-red/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red focus:ring-2 focus:ring-red/30"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-red">
                    Date
                  </label>
                  <input
                    required
                    name="date"
                    type="date"
                    className="w-full rounded-lg border border-red/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red focus:ring-2 focus:ring-red/30"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-red">
                    Heure
                  </label>
                  <input
                    required
                    name="time"
                    type="time"
                    className="w-full rounded-lg border border-red/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red focus:ring-2 focus:ring-red/30"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-red">
                    Nombre de convives
                  </label>
                  <input
                    required
                    name="guests"
                    type="number"
                    min={1}
                    max={30}
                    defaultValue={2}
                    className="w-full rounded-lg border border-red/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red focus:ring-2 focus:ring-red/30"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-red">
                    Adresse souhaitée
                  </label>
                  <select
                    name="location"
                    defaultValue="Akwa"
                    className="w-full rounded-lg border border-red/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red focus:ring-2 focus:ring-red/30"
                  >
                    {restaurant.locations.map((loc) => (
                      <option key={loc.name} value={loc.name}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-red">
                    Email (optionnel)
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="vous@email.com"
                    className="w-full rounded-lg border border-red/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red focus:ring-2 focus:ring-red/30"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-red">
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Occasion spéciale, préférences, allergies…"
                    className="w-full resize-none rounded-lg border border-red/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red focus:ring-2 focus:ring-red/30"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full">
                    Envoyer sur WhatsApp <MessageCircle size={16} />
                  </button>
                  <p className="mt-3 text-center text-xs text-ink/50">
                    Ouvre WhatsApp avec votre demande pré-remplie — confirmez
                    l'envoi pour la transmettre au restaurant.
                  </p>
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default MenuReservation;
