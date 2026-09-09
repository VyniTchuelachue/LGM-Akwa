# Le Glacier Moderne — Site Web

Site vitrine du salon de thé, glacier, pâtisserie, restaurant et pizzeria **Le Glacier Moderne** (LGM — Akwa, Douala), construit avec React + TypeScript + Tailwind CSS.

## Structure

```
client/   → App React (Vite + TypeScript + Tailwind)
server/   → API Express optionnelle, non utilisée par le site déployé (voir "Réservation" ci-dessous)
```

## Démarrage

```bash
cd client && npm install
npm run dev   # http://localhost:5173
```

## Déploiement sur Vercel

Le dépôt contient un `vercel.json` à la racine qui indique à Vercel où se trouve
l'app (`client/`) et active le fallback SPA pour React Router :

```json
{
  "buildCommand": "npm install --prefix client && npm run build --prefix client",
  "outputDirectory": "client/dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Il suffit d'importer le dépôt dans Vercel sans toucher aux réglages du projet
(Root Directory reste la racine du repo) — `vercel.json` s'occupe du reste.
Aucune variable d'environnement n'est nécessaire : le site est 100% statique.

## Pages

- **`/`** — Accueil : hero, avis clients, à propos, aperçu du menu, galerie, adresses & contact.
- **`/menu`** — Carte complète façon catalogue (recherche, catégories, sélection de plats) + formulaire de réservation qui inclut la sélection en cours.

## Réservation

Le formulaire de réservation (`client/src/components/menu/MenuReservation.tsx`)
ne dépend d'aucun serveur : à la soumission, il ouvre WhatsApp
(`wa.me/237696751575`) dans un nouvel onglet avec un message pré-rempli
contenant les coordonnées du client, l'adresse LGM souhaitée, la date/heure,
le nombre de convives et, le cas échéant, la sélection de plats avec le total
estimé. Le client n'a plus qu'à appuyer sur envoyer — le restaurant reçoit la
demande directement sur son WhatsApp existant, sans backend ni base de
données à maintenir.

Le dossier `server/` (API Express + stockage JSON) reste dans le dépôt pour
une évolution future (paiement en ligne, persistance en base, tableau de bord
admin…) mais n'est **pas** utilisé par le site actuellement déployé — un
serveur Express `app.listen()` ne peut de toute façon pas tourner sur Vercel
(environnement serverless). Pour le réactiver localement :

```bash
npm run install:all   # installe les dépendances du client et du serveur
npm run dev            # lance le client (5173) et l'API (5000) ensemble
```

## Contenu

- **Avis clients** : sélection d'avis authentiques du Glacier Moderne (Pages Jaunes Cameroun) dans `client/src/data/reviews.ts`.
- **Menu complet** : toute la carte (petit déjeuner, glaces, crêpes & gaufres, burgers, sandwichs, oriental & salades, grillades, pizzas), transcrite du PDF officiel, dans `client/src/data/menu.ts`.
- **Menu mis en avant (accueil)** : `client/src/data/restaurant.ts` + le PDF complet dans `client/public/menu-lgm.pdf`.
- **Cinq adresses à Douala** (Akwa, Bonapriso, Bonamoussadi, Bonaberi, Yassa) : `client/src/data/restaurant.ts`.
- **Photos** : `client/public/images/`.

## Personnalisation rapide

- Couleurs (rouge, crème, blanc) : `client/tailwind.config.js`
- Coordonnées, horaires, lien Google Maps, numéro WhatsApp, adresses : `client/src/data/restaurant.ts`
- Avis mis en avant : `client/src/data/reviews.ts`
- Carte complète (plats, prix, catégories) : `client/src/data/menu.ts`
