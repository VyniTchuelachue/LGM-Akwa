import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, ChevronDown, Trash2, ShoppingBag } from "lucide-react";
import { formatXAF, type MenuItem } from "@/data/menu";

export interface CartLine {
  item: MenuItem;
  qty: number;
}

const CartBar = ({
  lines,
  total,
  onRemove,
  onGoToReservation,
}: {
  lines: CartLine[];
  total: number;
  onRemove: (id: string) => void;
  onGoToReservation: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const count = lines.reduce((n, l) => n + l.qty, 0);

  if (count === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="border-t border-white/20 bg-ink/98 backdrop-blur-md"
          >
            <div className="container max-h-72 overflow-y-auto py-4">
              {lines.map(({ item, qty }) => (
                <div key={item.id} className="flex items-center justify-between gap-3 py-2 text-sm text-cream/90">
                  <span>
                    <span className="font-semibold text-white">{qty}×</span> {item.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-cream/60">
                      {formatXAF((item.price || 0) * qty)}
                    </span>
                    <button
                      onClick={() => onRemove(item.id)}
                      aria-label={`Retirer ${item.name} de la sélection`}
                      className="text-cream/40 hover:text-red-light"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="border-t border-white/20 bg-red-gradient shadow-2xl">
        <div className="container flex items-center justify-between gap-4 py-4">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 text-left text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-red">
              <ShoppingBag size={18} />
            </span>
            <span>
              <span className="block text-sm font-semibold">
                {count} plat{count > 1 ? "s" : ""} sélectionné{count > 1 ? "s" : ""}
              </span>
              <span className="block text-xs text-cream/80">{formatXAF(total)}</span>
            </span>
            {open ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </button>

          <button onClick={onGoToReservation} className="btn-outline !px-6 !py-2.5 !text-white text-xs">
            Réserver avec ma sélection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartBar;
