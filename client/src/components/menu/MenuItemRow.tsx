import { Minus, Plus } from "lucide-react";
import { formatXAF, type MenuItem } from "@/data/menu";

const MenuItemRow = ({
  item,
  qty,
  onAdd,
  onRemove,
}: {
  item: MenuItem;
  qty: number;
  onAdd: () => void;
  onRemove: () => void;
}) => {
  const available = item.price !== null;

  return (
    <div className="flex items-center gap-4 border-b border-red/10 py-4 last:border-none">
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="h-14 w-14 shrink-0 rounded-lg object-cover"
        />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h4 className="font-serif font-semibold text-red">{item.name}</h4>
          {item.nameEn && (
            <span className="font-serif text-sm italic text-ink/40">
              / {item.nameEn}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-0.5 text-xs text-ink/50">{item.description}</p>
        )}
      </div>

      <div className="shrink-0 text-right text-sm font-bold text-red">
        {item.priceLabel ? (
          <span className={available ? "" : "text-xs font-medium italic text-ink/40"}>
            {item.priceLabel}
          </span>
        ) : (
          formatXAF(item.price as number)
        )}
      </div>

      {available && (
        <div className="flex shrink-0 items-center gap-2">
          {qty > 0 && (
            <>
              <button
                onClick={onRemove}
                aria-label={`Retirer ${item.name}`}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-red/30 text-red transition-colors hover:bg-red/10"
              >
                <Minus size={13} />
              </button>
              <span className="w-4 text-center text-sm font-semibold text-red">{qty}</span>
            </>
          )}
          <button
            onClick={onAdd}
            aria-label={`Ajouter ${item.name}`}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-red-gradient text-white shadow-sm transition-transform hover:scale-105"
          >
            <Plus size={13} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuItemRow;
