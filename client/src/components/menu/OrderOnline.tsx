import { useMemo, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Minus, Plus, MapPin, Store, MessageCircle, CheckCircle2, ShoppingBag } from "lucide-react";
import { formatXAF } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import type { CartLine } from "./CartBar";

type Status = "idle" | "success";
type Fulfillment = "pickup" | "delivery";

function buildWhatsAppMessage(
  name: string,
  phone: string,
  fulfillment: Fulfillment,
  address: string,
  lines: CartLine[],
  total: number
) {
  const rows = [
    "Nouvelle commande — Le Glacier Moderne",
    "",
    `Nom : ${name}`,
    `Téléphone : ${phone}`,
    `Mode : ${fulfillment === "pickup" ? "Retrait sur place" : "Livraison"}`,
  ];
  if (fulfillment === "delivery") rows.push(`Adresse : ${address}`);

  rows.push("", "Commande :");
  lines.forEach(({ item, qty }) => {
    rows.push(`- ${qty}× ${item.name} (${formatXAF((item.price || 0) * qty)})`);
  });
  rows.push(`Total : ${formatXAF(total)}`);

  return rows.join("\n");
}

const OrderOnline = ({
  lines,
  total,
  onAdd,
  onRemove,
}: {
  lines: CartLine[];
  total: number;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
}) => {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [fulfillment, setFulfillment] = useState<Fulfillment>("pickup");
  const [address, setAddress] = useState("");

  const reason = useMemo(() => {
    if (lines.length === 0) return "Ajoutez au moins un plat à votre commande.";
    if (!name.trim() || !phone.trim()) return "Merci de renseigner votre nom et votre téléphone.";
    if (fulfillment === "delivery" && !address.trim())
      return "Merci de renseigner votre adresse de livraison.";
    return null;
  }, [lines, name, phone, fulfillment, address]);

  const canSubmit = reason === null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    const message = buildWhatsAppMessage(name, phone, fulfillment, address, lines, total);
    window.open(`${restaurant.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank");
    setStatus("success");
  }

  function resetOrder() {
    setStatus("idle");
    setName("");
    setPhone("");
    setFulfillment("pickup");
    setAddress("");
  }

  return (
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
            Commande
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            Commandez en ligne
          </h2>
          <p className="mt-6 text-cream/80 leading-relaxed">
            Parcourez notre carte ci-dessus, ajoutez vos plats, puis choisissez
            un retrait sur place ou une livraison — nous confirmons votre
            commande par WhatsApp.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-cream/85">
            <li className="flex items-center gap-3">
              <Store size={18} className="text-white" /> Retrait sur place, tous les jours 07:00 – 23:00
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-white" /> Livraison à Douala selon disponibilité
            </li>
          </ul>

          <div className="mt-8 rounded-2xl border border-white/25 bg-white/10 p-5">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <ShoppingBag size={14} /> Votre commande
            </h3>

            {lines.length === 0 ? (
              <p className="mt-3 text-sm text-cream/70">
                Aucun plat sélectionné pour l'instant. Ajoutez des plats depuis
                la carte ci-dessus pour commencer votre commande.
              </p>
            ) : (
              <>
                <div className="mt-3 space-y-2.5">
                  {lines.map(({ item, qty }) => (
                    <div key={item.id} className="flex items-center justify-between gap-3 text-sm text-cream/90">
                      <span className="min-w-0 flex-1 truncate">{item.name}</span>
                      <div className="flex shrink-0 items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          aria-label={`Retirer ${item.name}`}
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 active:scale-95"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-5 text-center font-semibold text-white">{qty}</span>
                        <button
                          type="button"
                          onClick={() => onAdd(item.id)}
                          aria-label={`Ajouter ${item.name}`}
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-red shadow-sm transition-transform hover:scale-105 active:scale-95"
                        >
                          <Plus size={16} />
                        </button>
                        <span className="w-20 shrink-0 text-right text-cream/70">
                          {formatXAF((item.price || 0) * qty)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-between border-t border-white/20 pt-3 text-sm font-bold text-white">
                  <span>Total</span>
                  <span>{formatXAF(total)}</span>
                </div>
              </>
            )}
          </div>
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
                Votre commande est prête !
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                Nous avons ouvert WhatsApp avec le détail de votre commande —
                il ne vous reste qu'à appuyer sur envoyer pour la transmettre
                au Glacier Moderne.
              </p>
              <button
                type="button"
                onClick={resetOrder}
                className="mt-6 text-sm font-semibold text-red underline underline-offset-4"
              >
                Passer une nouvelle commande
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-red">
                  Nom complet
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="+237 6XX XXX XXX"
                  className="w-full rounded-lg border border-red/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red focus:ring-2 focus:ring-red/30"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-red">
                  Retrait ou livraison
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                      fulfillment === "pickup"
                        ? "border-red bg-red text-white"
                        : "border-red/20 bg-white text-red/70 hover:bg-red/5"
                    }`}
                  >
                    <input
                      type="radio"
                      name="fulfillment"
                      value="pickup"
                      checked={fulfillment === "pickup"}
                      onChange={() => setFulfillment("pickup")}
                      className="sr-only"
                    />
                    <Store size={16} /> Retrait sur place
                  </label>
                  <label
                    className={`flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                      fulfillment === "delivery"
                        ? "border-red bg-red text-white"
                        : "border-red/20 bg-white text-red/70 hover:bg-red/5"
                    }`}
                  >
                    <input
                      type="radio"
                      name="fulfillment"
                      value="delivery"
                      checked={fulfillment === "delivery"}
                      onChange={() => setFulfillment("delivery")}
                      className="sr-only"
                    />
                    <MapPin size={16} /> Livraison
                  </label>
                </div>
              </div>

              {fulfillment === "delivery" && (
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-red">
                    Adresse de livraison
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={2}
                    placeholder="Quartier, rue, point de repère…"
                    className="w-full resize-none rounded-lg border border-red/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red focus:ring-2 focus:ring-red/30"
                  />
                </div>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                >
                  Envoyer ma commande sur WhatsApp <MessageCircle size={16} />
                </button>
                {reason && (
                  <p className="mt-3 text-center text-xs text-red">{reason}</p>
                )}
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default OrderOnline;
