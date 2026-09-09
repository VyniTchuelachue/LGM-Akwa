import { forwardRef } from "react";
import type { MenuCategory } from "@/data/menu";
import MenuItemRow from "./MenuItemRow";

const CategorySection = forwardRef<
  HTMLDivElement,
  {
    category: MenuCategory;
    cart: Record<string, number>;
    onAdd: (id: string) => void;
    onRemove: (id: string) => void;
  }
>(({ category, cart, onAdd, onRemove }, ref) => {
  return (
    <div ref={ref} id={category.id} className="scroll-mt-40 py-10">
      <h2 className="font-script text-4xl text-red sm:text-5xl">{category.title}</h2>
      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-ink/40">
        {category.subtitle}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-x-12 lg:grid-cols-2">
        {category.groups.map((group, gi) => (
          <div key={group.label || gi} className={category.groups.length > 1 ? "" : "lg:col-span-2"}>
            {group.label && (
              <h3 className="mb-1 mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-red-dark first:mt-0">
                <span className="h-1.5 w-1.5 rotate-45 bg-red-dark" />
                {group.label}
              </h3>
            )}
            <div>
              {group.items.map((item) => (
                <MenuItemRow
                  key={item.id}
                  item={item}
                  qty={cart[item.id] || 0}
                  onAdd={() => onAdd(item.id)}
                  onRemove={() => onRemove(item.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {category.note && (
        <p className="mt-8 text-center text-xs italic text-ink/40">{category.note}</p>
      )}
    </div>
  );
});

CategorySection.displayName = "CategorySection";

export default CategorySection;
