import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const links = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#avis", label: "Avis" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/menu#reservation", label: "Réservation" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-pink transition-all duration-300 ${
        scrolled ? "py-2 shadow-lg shadow-black/10 backdrop-blur-md" : "py-3.5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/#accueil" className="-ml-1 flex items-center gap-1.5 sm:ml-0 sm:gap-2.5">
          <img
            src="/images/logo.png"
            alt="Logo Le Glacier Moderne"
            className="h-9 w-auto shrink-0 object-contain sm:h-14"
          />
          <span className="font-script text-2xl leading-none text-red sm:text-4xl">
            {restaurant.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-red transition-colors hover:text-red-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link to="/menu#reservation" className="btn-primary !px-6 !py-2.5 text-xs">
            Réserver
          </Link>
        </div>

        <button
          className="text-red lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="mt-4 border-t border-red/15 bg-pink px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.15em] text-red hover:text-red-dark"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/menu#reservation" onClick={() => setOpen(false)} className="btn-primary mt-2 text-xs">
              Réserver une table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
