import { Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const FloatingCallButton = () => {
  return (
    <a
      href={restaurant.phoneHref}
      aria-label={`Appeler ${restaurant.name}`}
      className="fixed bottom-28 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-red-gradient text-white shadow-red transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-red/60" />
      <Phone size={22} className="relative -scale-x-100 fill-white" />
    </a>
  );
};

export default FloatingCallButton;
