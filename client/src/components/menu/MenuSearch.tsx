import { Search, X } from "lucide-react";

const MenuSearch = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  return (
    <div className="relative">
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-red/40" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ex. Glace, Pizza, Burger…"
        className="w-full rounded-full border border-red/20 bg-white py-3.5 pl-12 pr-12 text-sm text-ink outline-none transition focus:border-red focus:ring-2 focus:ring-red/30"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="Effacer la recherche"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-red/40 hover:text-red"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default MenuSearch;
