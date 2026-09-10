import { useState } from "react";
import { CalendarCheck, ShoppingBag } from "lucide-react";
import MenuReservation from "./MenuReservation";
import OrderOnline from "./OrderOnline";
import type { CartLine } from "./CartBar";

type Tab = "reservation" | "order";

const ReservationTabs = ({
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
  const [tab, setTab] = useState<Tab>("reservation");

  return (
    <section id="reservation" className="scroll-mt-40 bg-red-gradient py-24 sm:py-28">
      <div className="container mb-12 flex justify-center">
        <div className="grid w-full max-w-md grid-cols-2 gap-1.5 rounded-full border border-white/25 bg-white/10 p-1.5 sm:w-auto sm:inline-grid">
          <button
            type="button"
            onClick={() => setTab("reservation")}
            className={`flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors sm:px-6 sm:text-sm ${
              tab === "reservation"
                ? "bg-white text-red shadow-lg"
                : "text-cream/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            <CalendarCheck size={16} /> Réserver une table
          </button>
          <button
            type="button"
            onClick={() => setTab("order")}
            className={`flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors sm:px-6 sm:text-sm ${
              tab === "order"
                ? "bg-white text-red shadow-lg"
                : "text-cream/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            <ShoppingBag size={16} /> Commander en ligne
          </button>
        </div>
      </div>

      {tab === "reservation" ? (
        <MenuReservation lines={lines} total={total} />
      ) : (
        <OrderOnline lines={lines} total={total} onAdd={onAdd} onRemove={onRemove} />
      )}
    </section>
  );
};

export default ReservationTabs;
