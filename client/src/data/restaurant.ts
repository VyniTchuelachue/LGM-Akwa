export const restaurant = {
  name: "Le Glacier Moderne",
  shortName: "LGM",
  tagline: "Salon de thé, glacier & pâtisserie, au cœur d'Akwa",
  address: "Immeuble Socar, Bd de la Liberté, Akwa — Douala, Cameroun",
  phone: "+237 696 75 15 75",
  phoneHref: "tel:+237696751575",
  whatsappHref: "https://wa.me/237696751575",
  mapsUrl: "https://maps.app.goo.gl/Yi5fxkzZoUpx4ZBF8",
  mapEmbedUrl: "https://www.google.com/maps?q=4.0534128,9.6979786&z=17&output=embed",
  hours: [{ day: "Tous les jours", time: "07:00 – 23:00" }],
  since: 1996,
  locations: [
    { name: "Akwa", phones: ["696 75 15 75", "682 84 22 22"], featured: true },
    { name: "Bonapriso", phones: ["656 37 37 34", "680 00 07 00"] },
    { name: "Bonamoussadi", phones: ["655 44 44 39", "682 91 10 10"] },
    { name: "Bonaberi", phones: ["692 54 35 54", "650 06 09 76"] },
    { name: "Yassa", phones: ["674 68 38 40", "658 55 00 02"] },
  ],
};

export const dishes = [
  {
    name: "Bol de Glace",
    description: "La meilleure crème glacée de Douala.",
    image: "/images/bol-de-glace.jpg",
    price: "À partir de 1 500 XAF",
  },
  {
    name: "Nos Pizzas",
    description: "Pâte fine et garnitures généreuses, cuites au four — en petit ou grand modèle.",
    image: "/images/pizza-signature.png",
    price: "À partir de 5 000 XAF",
  },
  {
    name: "Shawarma au Poulet",
    description: "Poulet mariné grillé, crudités fraîches et sauce maison, roulés dans une galette croustillante.",
    image: "/images/shawarma-poulet-highlight.jpg",
    price: "2 500 XAF",
  },
  {
    name: "Moka Cake",
    description: "Notre pâtisserie signature, gâteau moka onctueux, à savourer sur place ou à emporter.",
    image: "/images/moka-cake.png",
    price: "1 500 XAF",
  },
  {
    name: "Hamburger",
    description: "Viande, fromage fondant et crudités fraîches, servi avec une portion de frites.",
    image: "/images/hamburger-signature.jpg",
    price: "2 000 XAF",
  },
  {
    name: "Cappuccino",
    description: "Onctueux, servi avec chantilly et cacao — parfait pour une pause gourmande au salon de thé.",
    image: "/images/cappuccino.jpg",
    price: "1 700 XAF",
  },
];

export const gallery = [
  { src: "/images/interieur-1.jpg", alt: "Étage et ambiance du salon Le Glacier Moderne" },
  { src: "/images/interieur-2.jpg", alt: "Salle du restaurant Le Glacier Moderne" },
  { src: "/images/interieur-3.jpg", alt: "Terrasse du Glacier Moderne à Akwa" },
];
