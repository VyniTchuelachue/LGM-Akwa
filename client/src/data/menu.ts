export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  description?: string;
  price: number | null;
  priceLabel?: string;
  image?: string;
  featured?: boolean;
}

export interface MenuGroup {
  label?: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  note?: string;
  groups: MenuGroup[];
}

export const menu: MenuCategory[] = [
  {
    id: "petit-dejeuner",
    title: "Petit Déjeuner",
    subtitle: "Servi jusqu'à 12h",
    groups: [
      {
        label: "Boissons Chaudes",
        items: [
          { id: "cafe-express", name: "Café express", price: 900 },
          { id: "grand-cafe", name: "Grand café", price: 1000 },
          { id: "expresso-capsule", name: "Expresso capsule", price: 1100 },
          { id: "the-nature", name: "Thé nature", price: 1300 },
          { id: "infusion-nature", name: "Infusion nature", price: 1300 },
          { id: "lait-chaud", name: "Lait chaud", price: 1400 },
          { id: "chocolat-au-lait", name: "Chocolat au lait", price: 1500 },
          { id: "cafe-au-lait", name: "Café au lait ou Nescafé au lait", price: 1500 },
          { id: "the-citron", name: "Thé citron", price: 1500 },
          { id: "infusion-miel-citron", name: "Infusion miel ou au citron", price: 1500 },
          { id: "chocolat-cappuccino", name: "Chocolat chaud chantilly ou cappuccino", price: 1700, image: "/images/cappuccino.jpg", featured: true },
          { id: "the-infusion-citron-miel", name: "Thé ou infusion citron miel", price: 1800 },
          { id: "supplement-miel-citron", name: "Supplément miel ou citron", price: 300 },
          { id: "supplement-beurre-confiture", name: "Supplément beurre + confiture", price: 500 },
        ],
      },
      {
        label: "Formules Petit Déjeuner",
        items: [
          { id: "petit-dejeuner-complet", name: "Petit déjeuner complet", description: "Croissant ou pain chocolat, toast beurre confiture, boisson chaude, jus de fruits naturel", price: 3800 },
          { id: "petit-dejeuner-continental", name: "Petit déjeuner continental", description: "Complet + omelette 2 œufs", price: 4800 },
          { id: "petit-dejeuner-lgm", name: "Petit déjeuner LGM", description: "Complet + omelette spéciale", price: 5800 },
        ],
      },
      {
        label: "Viennoiseries",
        items: [
          { id: "beignet", name: "Beignet", price: 700 },
          { id: "croissant-pain-chocolat", name: "Croissant / Pain chocolat", price: 800 },
          { id: "pili-chausson", name: "Pili, chausson aux pommes, pain aux raisins", price: 1000 },
          { id: "toasts-beurre-confiture", name: "4 toasts + beurre + confiture", price: 1500 },
        ],
      },
      {
        label: "Boissons Fraîches",
        items: [
          { id: "eau-minerale-pb", name: "Bouteille d'eau minérale PB", price: 800 },
          { id: "boisson-gazeuse", name: "Boisson gazeuse en bouteille", price: 1200 },
          { id: "eau-minerale-gb", name: "Bouteille d'eau minérale GB", price: 1300 },
          { id: "jus-goyave-ginger", name: "Jus de goyave, Ginger", price: 1300 },
          { id: "malta-schweppes", name: "Malta, Schweppes, Orangina, Djino", price: 1300 },
          { id: "menthe-grenadine-eau", name: "Menthe ou grenadine à l'eau", price: 1300 },
          { id: "jus-fruits-frais", name: "Jus de fruits frais", price: 2000 },
          { id: "cocktail-fruits-frais", name: "Cocktail de fruits frais", price: 2500, image: "/images/cocktail-fruits.jpg", featured: true },
        ],
      },
      {
        label: "Omelettes",
        items: [
          { id: "omelette-nature-2", name: "Omelette nature 2 œufs au plat", price: 1500 },
          { id: "omelette-nature-3", name: "Omelette nature 3 œufs au plat", price: 2000 },
          { id: "omelette-fromage", name: "Omelette au fromage", price: 2500 },
          { id: "omelette-speciale", name: "Omelette spéciale au fromage", description: "Jambon, thon, sardine ou légumes", price: 3500 },
        ],
      },
      {
        label: "Cocktails LGM & Pâtisseries",
        items: [
          { id: "milk-shake", name: "Milk-shake", description: "Lait frais + glace au choix", price: 2500 },
          { id: "salade-fruits-gm", name: "Salade de fruits GM", price: 4000, image: "/images/salade-fruits.jpg", featured: true },
          { id: "vitrine-moka", name: "Choix en vitrine, Moka", description: "Gâteaux entiers sur commande, 48h à l'avance", price: 1500, image: "/images/creme-chocolat.jpg", featured: true },
        ],
      },
    ],
  },
  {
    id: "glaces",
    title: "Nos Glaces",
    subtitle: "Fabriquées sur place, chaque matin",
    groups: [
      {
        label: "Petites Dégustations",
        items: [
          { id: "cigare-glace", name: "Cigare glacé", price: 1000 },
          { id: "langue-chat-50", name: "50 grs de langue de chat", price: 1000 },
          { id: "boule-au-choix", name: "1 boule au choix", price: 1500, image: "/images/glace-chocolat.jpg", featured: true },
          { id: "langue-chat-100", name: "100 grs de langue de chat", price: 1500 },
          { id: "boule-chantilly-2boules", name: "1 boule + chantilly ou 2 boules au choix", price: 2500 },
          { id: "ice-cream-burger", name: "Ice cream burger caramélisé", price: 2500 },
          { id: "3boules-choix", name: "3 boules au choix ou 2 boules + chantilly + sauce", price: 3000 },
        ],
      },
      {
        label: "Pour Nos Chers Petits",
        items: [
          { id: "roi-lion", name: "Le Roi Lion", description: "Génoise, glace chocolat, glace vanille, sauce chocolat, chantilly", price: 4000 },
        ],
      },
      {
        label: "Les Liégeois",
        items: [
          { id: "liegeois", name: "Liégeois café, vanille ou chocolat", description: "3 boules de glace + chantilly + sauce", price: 4500 },
        ],
      },
      {
        label: "Les Dames",
        items: [
          { id: "dame-bresilienne", name: "Dame Brésilienne", description: "2 boules caramel, 1 boule vanille, chantilly, sauce caramel", price: 4500 },
          { id: "dame-blanche", name: "Dame Blanche", description: "2 boules vanille, 1 boule chocolat, chantilly, sauce chocolat", price: 4500, image: "/images/creme-glacee-vanille-chocolat.jpg", featured: true },
          { id: "dame-noire", name: "Dame Noire", description: "2 boules chocolat, 1 boule vanille, chantilly, sauce chocolat", price: 4500 },
          { id: "dame-metis", name: "Dame Métis", description: "2 boules café, 1 boule vanille, chantilly, sauce café", price: 4500 },
        ],
      },
      {
        label: "Les Extras",
        items: [
          { id: "peche-melba", name: "Pêche Melba", description: "2 boules pêche, 1 boule vanille, pêche en fruit, chantilly, sauce fraise", price: 5000 },
          { id: "tutti-frutti", name: "Tutti frutti", description: "3 boules au choix, salade de fruits, chantilly, sauce fraise", price: 5000 },
          { id: "stratatchella", name: "Stratatchella", description: "2 boules chocolat au lait + 2 boules vanille-choco, chantilly, sauce chocolat", price: 5000 },
          { id: "africaine", name: "L'Africaine", description: "4 boules : noix de coco, chocolat, café, vanille, chantilly, sauce chocolat, noisettes", price: 5000, image: "/images/l-africaine.jpg", featured: true },
          { id: "americaine", name: "L'Américaine", description: "4 boules : framboise, vanille-chocolat, gianduja, chocolat, chantilly, sauce chocolat, noisettes", price: 5000 },
          { id: "coupe-lgm", name: "La Coupe LGM", description: "Pour 2 personnes — 6 boules au choix, salade de fruits, chantilly, sauce fraise, noisettes", price: 7000, image: "/images/trois-boules-glace.jpg", featured: true },
        ],
      },
      {
        label: "Les Entremets",
        items: [
          { id: "entremet-glace", name: "Entremet glacé", description: "Glace au choix + chantilly + génoise + noisette + sauce au choix", price: 3500 },
        ],
      },
    ],
  },
  {
    id: "crepes-gaufres",
    title: "Crêpes, Gaufres & Burgers",
    subtitle: "Servis à toute heure",
    groups: [
      {
        label: "Chaudes Sucrées",
        items: [
          { id: "crepe-nature", name: "Crêpe nature ou sucre", price: 1500 },
          { id: "crepe-confiture", name: "Crêpe confiture ou sauce chocolat", price: 2000 },
          { id: "gaufre-sucre-glace", name: "Gaufre sucre glace", price: 2000, image: "/images/gaufre-creme.jpg", featured: true },
          { id: "crepe-nutella", name: "Crêpe choco Nutella", price: 3000 },
          { id: "gaufre-nutella", name: "Gaufre au Nutella", price: 3000 },
          { id: "crepe-caramel", name: "Crêpe au caramel beurre salé", price: 3000 },
          { id: "gaufre-caramel", name: "Gaufre au caramel beurre salé", price: 3000 },
        ],
      },
      {
        label: "Chaudes Glacées",
        items: [
          { id: "crepe-gaufre-glacee", name: "Crêpe glacée ou gaufre au choix", description: "2 boules de glace au choix, chantilly + sauce au choix", price: 5000 },
        ],
      },
      {
        label: "Menu Spécial",
        items: [
          { id: "formule-complete", name: "Formule complète", description: "Hamburger, portion de frites, boisson gazeuse, 1 boule de glace ou 1 gâteau", price: 5000, image: "/images/hamburger-creme-glacee.jpg", featured: true },
        ],
      },
      {
        label: "Hamburgers & Croques",
        items: [
          { id: "plat-frites", name: "Un plat de frites", price: 1500, image: "/images/frites.jpg", featured: true },
          { id: "hamburger", name: "Hamburger", description: "Viande, fromage, sauce, au choix chou ou salade", price: 2000 },
          { id: "croissant-jambon-boeuf", name: "Croissant au jambon de bœuf", description: "Fromage + sauce béchamel", price: 1500 },
          { id: "croque-monsieur", name: "Croque Monsieur", description: "Jambon de bœuf, gruyère, sauce béchamel", price: 1500 },
          { id: "croque-madame", name: "Croque Madame", description: "Jambon de bœuf, gruyère, béchamel, 1 œuf", price: 2000 },
          { id: "chicken-burger", name: "Chicken Burger", description: "Poulet, fromage, salade", price: 2500 },
          { id: "lgm-burger", name: "LGM Burger", description: "Viande + fromage + frites + œuf + salade", price: 3000, image: "/images/table-hamburgers.jpg", featured: true },
        ],
      },
    ],
  },
  {
    id: "sandwichs",
    title: "Nos Sandwichs",
    subtitle: "À emporter ou sur place",
    groups: [
      {
        items: [
          { id: "sandwich-chawarma-viande", name: "Sandwich chawarma viande", price: 1500, image: "/images/shawarma-menthe-lait.jpg", featured: true },
          { id: "sandwich-omelette", name: "Sandwich omelette nature", description: "2 œufs avec tomate", price: 1500 },
          { id: "sandwich-kafta", name: "Sandwich Kafta", description: "Viande hachée orientale, frites de pommes, tomate", price: 2500 },
          { id: "sandwich-vegetarien", name: "Sandwich végétarien", description: "Carottes, oignons, poivrons, tomates, laitue + sauce vinaigrette", price: 2500 },
          { id: "chawarma-sandwich-poulet", name: "Chawarma ou sandwich au poulet", price: 2500 },
          { id: "sandwich-jambon-fromage", name: "Sandwich jambon fromage + salade", price: 2500 },
          { id: "sandwich-steak-cheese", name: "Sandwich steak cheese", description: "Filet de bœuf, oignons, poivron, ail, épices, champignon, fromage fondu", price: 3500 },
          { id: "supplement-thon", name: "Supplément thon", price: 1000 },
        ],
      },
    ],
  },
  {
    id: "oriental",
    title: "Oriental & Salades",
    subtitle: "Assiettes, salades, crevettes & spaghettis",
    groups: [
      {
        label: "Menu Oriental",
        items: [
          { id: "assiette-chawarma-viande", name: "Assiette chawarma viande", description: "Viande, oignons, persil, tomate, sauce chawarma, frites + pain arabe", price: 5000 },
          { id: "assiette-chawarma-poulet", name: "Assiette chawarma poulet", description: "Blanc de poulet, persil, tomate, sauce, frites + pain arabe", price: 7000, image: "/images/shawarma-poulet.jpg", featured: true },
        ],
      },
      {
        label: "Nos Salades",
        items: [
          { id: "avocat-vinaigrette", name: "Avocat vinaigrette", price: 3500 },
          { id: "salade-avocat-thon", name: "Salade d'avocat au thon", description: "Oignons, olive noire, tomate, sauce vinaigrette", price: 5000 },
          { id: "salade-crudites", name: "Salade de crudités", description: "Chou, concombre, avocat, oignon, tomate, carotte, poivron", price: 5000 },
          { id: "salade-nicoise", name: "Salade niçoise", description: "Laitue, thon, tomate, pomme de terre, haricot vert, olives", price: 5500 },
          { id: "salade-chef", name: "Salade du chef", description: "Laitue, carotte râpée, maïs, avocat, tomate, œuf dur, coco râpé, thon", price: 5500 },
          { id: "salade-festival", name: "Salade festival", description: "Salade, maïs doux, avocat, ananas, tomate, œuf cuit, poulet", price: 5500 },
          { id: "salade-parisienne", name: "Salade parisienne", description: "Salade, tomate, poivron, œuf dur, carotte râpée, maïs doux, sauce cocktail", price: 5500 },
          { id: "cocktail-avocat-crevettes", name: "Cocktail d'avocat aux crevettes", price: 6500, image: "/images/salade-avocat-crevettes.jpg", featured: true },
        ],
      },
      {
        label: "Crevettes",
        items: [
          { id: "crevettes-ail", name: "Crevettes sautées à l'ail", price: 8000 },
          { id: "crevettes-provencales", name: "Crevettes provençales", description: "Sauce tomate, oignons, herbes de Provence", price: 8500 },
          { id: "crevettes-hollandaise", name: "Crevettes à la sauce hollandaise", description: "Poivron, champignons, crème fraîche", price: 9000 },
        ],
      },
      {
        label: "Spaghettis",
        items: [
          { id: "spaghetti-bolognaise", name: "Spaghetti bolognaise", description: "Viande hachée, carotte, sauce tomate", price: 5000 },
          { id: "spaghetti-fermiere", name: "Spaghetti fermière", description: "Poulet, champignons + crème fraîche", price: 7500 },
          { id: "spaghetti-du-chef", name: "Spaghetti du chef", description: "Poulet, crevettes + champignons + crème fraîche", price: 8000 },
        ],
      },
    ],
  },
  {
    id: "grillades",
    title: "Les Grillades",
    subtitle: "Servies avec garniture au choix",
    note: "Garnitures : riz blanc, frites de pomme, haricot vert, frites de plantain mûr, spaghetti.",
    groups: [
      {
        label: "Poissons",
        items: [
          { id: "brochettes-capitaine", name: "Brochettes de filet de capitaine", price: 5500 },
          { id: "filet-capitaine-provencal", name: "Filet de capitaine provençal", description: "Sauce tomate, poivrons", price: 6000 },
          { id: "filet-capitaine-oceane", name: "Filet de capitaine océane", description: "Champignons + crème fraîche", price: 6000 },
        ],
      },
      {
        label: "Viandes",
        items: [
          { id: "brochettes-boeuf", name: "Brochettes de filet de bœuf", price: 5500 },
          { id: "steak-poivre-vert", name: "Steak grillé au poivre vert", price: 5500 },
          { id: "emince-boeuf", name: "Émincé de bœuf", description: "Champignons + crème fraîche", price: 6000 },
          { id: "steak-diane", name: "Steak Diane", description: "Filet de bœuf, champignons, crème fraîche, moutarde", price: 6000 },
          { id: "mixgrille", name: "Mixgrille", description: "Brochette viande, poisson, poulet", price: 6000 },
        ],
      },
      {
        label: "Poulet",
        items: [
          { id: "brochettes-poulet", name: "Brochettes de poulet", price: 5500 },
          { id: "cuisse-sautee-oignons", name: "Cuisse de poulet sautée aux oignons", price: 5500 },
          { id: "cuisse-basquaise", name: "Cuisse de poulet basquaise", description: "Sauce tomate, oignon, poivron", price: 5500 },
          { id: "cuisse-napolitaine", name: "Cuisse de poulet napolitaine", description: "Crème fraîche, champignon", price: 6000 },
          { id: "blanc-cuisse-pane", name: "Blanc ou cuisse de poulet pané", price: 6500 },
          { id: "demi-poulet-roti", name: "½ poulet rôti", price: 6500 },
          { id: "demi-poulet-dg", name: "½ poulet DG", price: 7000 },
          { id: "poulet-roti-entier", name: "Un poulet rôti", price: 10000 },
          { id: "poulet-dg-entier", name: "Un poulet DG", price: 11500 },
        ],
      },
    ],
  },
  {
    id: "pizzas",
    title: "Nos Pizzas",
    subtitle: "En petit modèle (PM) ou grand modèle (GM)",
    note: "Suppléments œuf, olive, oignon, poivron : 500 · Crevette, jambon, champignon, poulet : 1 000",
    groups: [
      {
        label: "Pizzas Salées",
        items: [
          { id: "sicilienne", name: "Sicilienne", description: "Sauce tomate, basilic, origan, fromage", price: 5000, priceLabel: "5 000 / 6 000" },
          { id: "vegetarienne", name: "Végétarienne", description: "Sauce tomate, poivron, origan, oignon, fromage", price: 5500, priceLabel: "5 500 / 6 500" },
          { id: "marguerita", name: "Marguerita", description: "Sauce tomate, origan, jambon de bœuf, fromage", price: 5500, priceLabel: "5 500 / 6 500" },
          { id: "trois-fromages", name: "Trois fromages", description: "Sauce tomate, gruyère, mozzarella et kiri ou camembert", price: 6000, priceLabel: "6 000 / 7 000" },
          { id: "orientale", name: "Orientale", description: "Sauce tomate, viande hachée, oignons, fromage", price: 6500, priceLabel: "6 500 / 7 500", image: "/images/pizza-orientale.jpg", featured: true },
          { id: "reine", name: "Reine", description: "Sauce tomate, jambon de bœuf, champignons, fromage, origan", price: 6500, priceLabel: "6 500 / 7 500" },
          { id: "african-queen", name: "African Queen", description: "Jambon, champignon, pomme, oignon, sauce tomate, fromage", price: 6500, priceLabel: "6 500 / 7 500" },
          { id: "pizza-du-chef", name: "Pizza du chef", description: "Sauce tomate, fromage, crevettes, origan", price: 6500, priceLabel: "6 500 / 7 500" },
          { id: "pizza-fermiere", name: "Pizza fermière", description: "Sauce tomate, oignon, poulet, champignons, maïs, fromage, basilic", price: 6500, priceLabel: "6 500 / 7 500", image: "/images/pizza-fermiere.jpg", featured: true },
          { id: "pizza-du-pecheur", name: "Pizza du pêcheur", description: "Sauce tomate, thon, crevettes, oignons, fromage", price: 6500, priceLabel: "6 500 / 7 500", image: "/images/pizza-du-pecheur.jpg", featured: true },
          { id: "pizza-exotica", name: "Pizza Exotica", description: "Sauce, fromage, viande hachée, ananas", price: 6500, priceLabel: "6 500 / 7 500" },
        ],
      },
      {
        label: "Pizzas Sucrées",
        items: [
          { id: "pizza-chocolat-nutella", name: "Pizza au chocolat Nutella", price: 3300, priceLabel: "3 300 / 4 300" },
          { id: "pizza-nutella-chantilly", name: "Pizza Nutella avec chantilly", price: 3500, priceLabel: "3 500 / 4 500" },
          { id: "pizza-nutella-banane", name: "Pizza Nutella + banane + chantilly", price: 4000, priceLabel: "4 000 / 5 000" },
          { id: "supplement-noisette", name: "Supplément noisette", price: 500 },
        ],
      },
    ],
  },
];

export const allMenuItems: MenuItem[] = menu.flatMap((cat) =>
  cat.groups.flatMap((g) => g.items)
);

export function formatXAF(price: number) {
  return `${price.toLocaleString("fr-FR")} XAF`;
}
