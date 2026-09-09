import { menu } from "@/data/menu";

const CategoryNav = ({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) => {
  return (
    <div className="sticky top-[64px] z-30 border-b border-red/15 bg-cream/95 backdrop-blur-sm">
      <div className="container">
        <div className="scrollbar-none flex gap-2 overflow-x-auto py-3">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                active === cat.id
                  ? "border-red bg-red text-white"
                  : "border-red/20 text-red/70 hover:bg-red/5"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
