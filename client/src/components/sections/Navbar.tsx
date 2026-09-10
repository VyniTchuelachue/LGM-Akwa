import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const links = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#avis", label: "Avis" },
  { href: "/menu", label: "Menu" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-red-dark/95 py-2.5 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/#accueil" className="flex items-center gap-2.5">
          <img
            src="/images/logo.png"
            alt="Logo Le Glacier Moderne"
            className={`h-10 w-10 shrink-0 rounded-full border-2 object-cover shadow-sm transition-colors duration-300 sm:h-11 sm:w-11 ${
              scrolled ? "border-white/80" : "border-white"
            }`}
          />
          <span
            className="font-script text-3xl leading-none transition-colors duration-300 sm:text-4xl"
            style={{ color: scrolled ? "#FFFFFF" : "#C8102E" }}
          >
            {restaurant.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                scrolled ? "text-cream/90 hover:text-white" : "text-red hover:text-red-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={restaurant.phoneHref}
            className={`flex items-center gap-2 text-sm font-semibold ${
              scrolled ? "text-cream" : "text-red"
            }`}
          >
            <Phone size={16} className={scrolled ? "text-white" : "text-red"} />
            {restaurant.phone}
          </a>
          <Link to="/menu#reservation" className="btn-primary !px-6 !py-2.5 text-xs">
            Réserver
          </Link>
        </div>

        <button
          className={`lg:hidden ${scrolled ? "text-cream" : "text-red"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="mt-4 border-t border-white/20 bg-red-dark/98 px-6 py-6 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.15em] text-cream/90 hover:text-white"
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
