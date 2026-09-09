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
    name: "La Coupe LGM",
    description: "6 boules au choix, salade de fruits, chantilly, sauce fraise, noisettes — pour 2 personnes.",
    image: "/images/trois-boules-glace.jpg",
    price: "7 000 XAF",
  },
  {
    name: "L'Africaine",
    description: "4 boules : noix de coco, chocolat, café, vanille, chantilly, sauce chocolat, noisettes.",
    image: "/images/l-africaine.jpg",
    price: "5 000 XAF",
  },
  {
    name: "Pizza Fermière",
    description: "Sauce tomate, oignon, poulet, champignons, maïs, fromage, basilic.",
    image: "/images/pizza-fermiere.jpg",
    price: "6 500 XAF",
  },
  {
    name: "Pizza du Pêcheur",
    description: "Sauce tomate, thon, crevettes, oignons, fromage — en petit ou grand modèle.",
    image: "/images/pizza-du-pecheur.jpg",
    price: "6 500 XAF",
  },
  {
    name: "LGM Burger",
    description: "Viande, fromage, frites, œuf et salade — notre burger signature.",
    image: "/images/table-hamburgers.jpg",
    price: "3 000 XAF",
  },
  {
    name: "Strawberry Moka",
    description: "Notre boisson glacée fraise-café, préparée minute au salon de thé.",
    image: "/images/strawberry-moka.jpg",
    price: "2 500 XAF",
  },
];

export const gallery = [
  { src: "/images/interieur-1.jpg", alt: "Étage et ambiance du salon Le Glacier Moderne" },
  { src: "/images/ndole-viande.jpg", alt: "Plat de la maison, servi avec frites" },
  { src: "/images/interieur-2.jpg", alt: "Salle du restaurant Le Glacier Moderne" },
  { src: "/images/interieur-3.jpg", alt: "Terrasse du Glacier Moderne à Akwa" },
  { src: "/images/creme-glacee-vanille-chocolat.jpg", alt: "Crème glacée vanille chocolat" },
  { src: "/images/salade-avocat-crevettes.jpg", alt: "Salade d'avocat aux crevettes" },
  { src: "/images/shawarma-poulet.jpg", alt: "Shawarma poulet" },
  { src: "/images/gaufre-creme.jpg", alt: "Gaufre à la crème" },
  { src: "/images/pizza-orientale.jpg", alt: "Pizza orientale" },
  { src: "/images/cocktail-fruits.jpg", alt: "Cocktail de fruits frais" },
  { src: "/images/frites.jpg", alt: "Pommes frites" },
  { src: "/images/salade-fruits.jpg", alt: "Salade de fruits" },
];

export const glacierHighlights = [
  { src: "/images/glace-chocolat.jpg", name: "Glace au chocolat" },
  { src: "/images/creme-chocolat.jpg", name: "Pâtisserie du jour" },
  { src: "/images/cappuccino.jpg", name: "Cappuccino" },
];
