import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import MenuPageHero from "@/components/menu/MenuPageHero";
import MenuSearch from "@/components/menu/MenuSearch";
import CategoryNav from "@/components/menu/CategoryNav";
import CategorySection from "@/components/menu/CategorySection";
import MenuItemRow from "@/components/menu/MenuItemRow";
import CartBar from "@/components/menu/CartBar";
import MenuReservation from "@/components/menu/MenuReservation";
import { menu, allMenuItems } from "@/data/menu";

function normalize(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function MenuPage() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(menu[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const addItem = (id: string) =>
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));

  const removeItem = (id: string) =>
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) return c;
      next[id] -= 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });

  const lines = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => {
          const item = allMenuItems.find((i) => i.id === id);
          return item ? { item, qty } : null;
        })
        .filter((l): l is { item: (typeof allMenuItems)[number]; qty: number } => !!l),
    [cart]
  );

  const total = lines.reduce((sum, l) => sum + (l.item.price || 0) * l.qty, 0);

  const filtered = useMemo(() => {
    if (!search.trim()) return null;
    const q = normalize(search);
    return allMenuItems.filter(
      (i) =>
        normalize(i.name).includes(q) ||
        (i.nameEn && normalize(i.nameEn).includes(q)) ||
        (i.description && normalize(i.description).includes(q))
    );
  }, [search]);

  useEffect(() => {
    if (filtered) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-160px 0px -70% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  function scrollToCategory(id: string) {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function scrollToReservation() {
    document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`min-h-screen bg-cream ${lines.length > 0 ? "pb-20" : ""}`}>
      <Navbar />
      <main>
        <MenuPageHero />

        <div className="border-b border-red/10 bg-cream py-6">
          <div className="container">
            <MenuSearch value={search} onChange={setSearch} />
          </div>
        </div>

        {!filtered && <CategoryNav active={active} onSelect={scrollToCategory} />}

        <div className="container">
          {filtered ? (
            <div className="py-10">
              <p className="mb-4 text-sm text-ink/50">
                {filtered.length} résultat{filtered.length !== 1 ? "s" : ""} pour «&nbsp;{search}&nbsp;»
              </p>
              <div className="mx-auto max-w-3xl">
                {filtered.length === 0 ? (
                  <p className="py-16 text-center text-ink/40">
                    Aucun plat ne correspond à votre recherche.
                  </p>
                ) : (
                  filtered.map((item) => (
                    <MenuItemRow
                      key={item.id}
                      item={item}
                      qty={cart[item.id] || 0}
                      onAdd={() => addItem(item.id)}
                      onRemove={() => removeItem(item.id)}
                    />
                  ))
                )}
              </div>
            </div>
          ) : (
            <div className="divide-y divide-red/10">
              {menu.map((cat) => (
                <CategorySection
                  key={cat.id}
                  category={cat}
                  cart={cart}
                  onAdd={addItem}
                  onRemove={removeItem}
                  ref={(el) => {
                    sectionRefs.current[cat.id] = el;
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <MenuReservation lines={lines} total={total} />
      </main>
      <Footer />

      <CartBar
        lines={lines}
        total={total}
        onRemove={(id) => setCart((c) => {
          const next = { ...c };
          delete next[id];
          return next;
        })}
        onGoToReservation={scrollToReservation}
      />
    </div>
  );
}

export default MenuPage;
