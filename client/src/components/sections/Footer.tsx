import { Facebook, Instagram, Phone, MapPin } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const Footer = () => {
  return (
    <footer className="bg-ink py-14">
      <div className="container">
        <div className="flex flex-col items-center gap-8 border-b border-white/15 pb-10 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <div className="font-script text-4xl text-white">{restaurant.name}</div>
            <p className="mt-2 max-w-sm text-sm text-cream/50">
              {restaurant.tagline}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm text-cream/60 md:items-end">
            <a href={restaurant.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Phone size={15} className="text-white" /> {restaurant.phone}
            </a>
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-center hover:text-white md:text-right"
            >
              <MapPin size={15} className="shrink-0 text-white" /> {restaurant.address}
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/LgmDouala/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-red"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/lgmdouala/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-red"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-cream/35">
          © {new Date().getFullYear()} {restaurant.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
