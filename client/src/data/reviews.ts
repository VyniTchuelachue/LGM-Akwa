export interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
}

// Curated from Le Glacier Moderne's genuine public reviews (Pages Jaunes Cameroun, Google).
export const reviews: Review[] = [
  {
    name: "Ngouambe Nestor",
    role: "Avis en ligne",
    rating: 5,
    text: "A high level place — the welcome service is a real protocol. The pizzeria is good too, with a well secured parking.",
  },
  {
    name: "Adams Hadji",
    role: "Sortie en famille",
    rating: 5,
    text: "Very nice place for a family or group outing. Prices are affordable, personnel welcoming and jovial.",
  },
  {
    name: "Joseph Christian Nouaze",
    role: "Avis en ligne",
    rating: 5,
    text: "Extérieur attrayant, intérieur chaleureux, personnel efficace et souriant — parfait pour un afterwork entre collègues.",
  },
  {
    name: "Lorraine Shu",
    role: "Avis en ligne",
    rating: 4,
    text: "I love the recent renovation — the decoration is soft and minimalist. One of my favorite spots to enjoy dessert.",
  },
  {
    name: "Soh Aaron",
    role: "Avis en ligne",
    rating: 4,
    text: "Bel endroit, bon service — leur hamburger était excellent aujourd'hui.",
  },
  {
    name: "Barichnel",
    role: "Avis en ligne",
    rating: 4,
    text: "Architecture superbe, cadre très agréable pour se poser en journée comme en soirée.",
  },
  {
    name: "Juli",
    role: "Avis en ligne",
    rating: 4,
    text: "Design moderne et glaces vraiment bonnes, toilettes propres — l'attente reste raisonnable même quand c'est plein.",
  },
];

export const overallRating = 3.8;
export const totalReviews = 657;
