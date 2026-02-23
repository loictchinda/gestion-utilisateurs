# 🧑‍💻 Gestion des Utilisateurs — React + Git

> Projet pédagogique React (Vite) illustrant les bonnes pratiques de composants, hooks personnalisés, gestion d'état et workflow Git.

---

## 📋 Table des matières

- [Aperçu du projet](#aperçu-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Hooks personnalisés](#hooks-personnalisés)
- [Workflow Git](#workflow-git)
- [Bonnes pratiques appliquées](#bonnes-pratiques-appliquées)

---

## 📌 Aperçu du projet

Ce projet a été développé dans le cadre d'un exercice scolaire visant à maîtriser :

- Les **bonnes pratiques React** : composants, props, state, hooks
- Les **bonnes pratiques Git** : branches stratégiques, commits conventionnels, push/pull, merge

L'application regroupe plusieurs modules de gestion d'utilisateurs, chacun développé sur une branche Git dédiée puis mergé dans `develop`.

---

## 🛠 Technologies utilisées

| Technologie | Version | Usage |
|-------------|---------|-------|
| React | 18+ | Framework UI |
| Vite | 5+ | Bundler / Dev server |
| JavaScript (ES6+) | — | Langage principal |
| CSS3 | — | Styles personnalisés |
| Git | — | Gestion de versions |
| GitHub | — | Hébergement du dépôt |

---

## 🚀 Installation

```bash
# Cloner le dépôt
git clone https://github.com/loictchinda/gestion-utilisateurs.git

# Accéder au dossier
cd gestion-utilisateurs

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera disponible sur [http://localhost:5173](http://localhost:5173)

---

## 📁 Structure du projet

```
gestion-utilisateurs/
├── public/
├── src/
│   ├── components/
│   │   ├── age/
│   │   │   ├── AgeFilter.jsx
│   │   │   ├── UserAgeManager.jsx
│   │   │   └── UserCounter.jsx
│   │   ├── clock/
│   │   │   ├── Clock.jsx
│   │   │   ├── ClockManager.jsx
│   │   │   └── ToggleClock.jsx
│   │   ├── counter/
│   │   │   ├── CounterManager.jsx
│   │   │   ├── DisplayCounterValue.jsx
│   │   │   ├── IncrementCounter.jsx
│   │   │   └── ToggleBoolean.jsx
│   │   ├── directory/
│   │   │   ├── UserDirectory.jsx
│   │   │   ├── UserDirectoryItem.jsx
│   │   │   └── UserModal.jsx
│   │   ├── form/
│   │   │   ├── DisplayError.jsx
│   │   │   ├── SubmitButton.jsx
│   │   │   ├── UserFormManager.jsx
│   │   │   └── UserInput.jsx
│   │   ├── message/
│   │   │   ├── DisplayMessage.jsx
│   │   │   ├── MessageManager.jsx
│   │   │   ├── ToggleMessageVisibility.jsx
│   │   │   └── UpdateMessage.jsx
│   │   ├── players/
│   │   │   ├── PlayerCard.jsx
│   │   │   ├── PlayerDashboard.jsx
│   │   │   ├── PlayerList.jsx
│   │   │   └── PlayerStatCards.jsx
│   │   ├── products/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductFilters.jsx
│   │   │   └── ProductList.jsx
│   │   ├── scores/
│   │   │   ├── ScoreManager.jsx
│   │   │   ├── ScoreMinFilter.jsx
│   │   │   ├── ScoreStatCards.jsx
│   │   │   └── ScoreUserList.jsx
│   │   └── users/
│   │       ├── OnlineFilter.jsx
│   │       ├── UserList.jsx
│   │       ├── UserManager.jsx
│   │       └── UserStatus.jsx
│   ├── hooks/
│   │   ├── useFilteredProducts.js
│   │   ├── usePlayerStats.js
│   │   ├── useScoreStats.js
│   │   └── useUsers.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## ✨ Fonctionnalités

### 1. 🔢 Compteur avec affichage conditionnel
**Branche :** `feature/counter-toggle`

- Composant `DisplayCounterValue` : affiche un nombre entier uniquement si un booléen est `true`
- Composant `ToggleBoolean` : bascule la visibilité
- Composant `IncrementCounter` : incrémente le compteur
- Composant parent `CounterManager` : centralise l'état

**Concepts :** `useState`, passage de props, callbacks enfant → parent

---

### 2. 💬 Gestionnaire de message
**Branche :** `feature/message-toggle`

- Composant `DisplayMessage` : affiche un message selon un booléen
- Composant `ToggleMessageVisibility` : masque/affiche le message
- Composant `UpdateMessage` : champ de saisie pour modifier le message en temps réel
- Composant parent `MessageManager` : centralise l'état

**Concepts :** `useState`, contrôled inputs, affichage conditionnel

---

### 3. 👥 Liste d'utilisateurs avec filtre en ligne
**Branche :** `feature/user-status-filter`

- Composant `UserList` : affiche la liste des utilisateurs
- Composant `UserStatus` : affiche 🟢 En ligne ou 🔴 Hors ligne
- Composant `OnlineFilter` : case à cocher pour filtrer les utilisateurs en ligne
- Composant parent `UserManager` : gère la liste et l'état du filtre

**Concepts :** filtrage de tableau, affichage conditionnel avec émojis, checkbox contrôlée

---

### 4. 📝 Formulaire avec validation
**Branche :** `feature/user-form-validation`

- Composant `UserInput` : champ de saisie du nom d'utilisateur
- Composant `SubmitButton` : bouton désactivé si moins de 3 caractères
- Composant `DisplayError` : affiche un message d'erreur si la soumission est invalide
- Composant parent `UserFormManager` : gère la validation et le state

**Concepts :** validation de formulaire, `disabled`, messages d'erreur/succès

---

### 5. 🕐 Horloge en temps réel
**Branche :** `feature/clock`

- Composant `Clock` : affiche l'heure au format HH:MM:SS, mise à jour chaque seconde
- Composant `ToggleClock` : masque/affiche l'horloge
- Composant parent `ClockManager` : gère la visibilité

**Concepts :** `useEffect`, `setInterval`, cleanup function pour éviter les fuites mémoire

---

### 6. 🎂 Filtre par âge
**Branche :** `feature/user-age-filter`

- Composant `AgeFilter` : champ pour saisir un âge minimum
- Composant `UserCounter` : affiche le nombre d'utilisateurs au-dessus du seuil
- Composant parent `UserAgeManager` : gère la liste et l'âge minimum

**Concepts :** `useMemo` pour optimiser le filtrage, éviter les recalculs inutiles

---

### 7. 📡 Annuaire avec appel API
**Branche :** `feature/custom-hook-users`

- Hook `useUsers` : fetch depuis `jsonplaceholder`, gestion `loading` / `error` / `refetch`
- Composant `UserDirectory` : liste avec recherche et tri alphabétique
- Composant `UserDirectoryItem` : ligne cliquable
- Composant `UserModal` : affiche les détails d'un utilisateur dans une modale

**Concepts :** custom hook, `fetch`, `async/await`, `useMemo`, modale, gestion d'erreur

---

### 8. 🛒 Catalogue produits
**Branche :** `feature/product-filter`

- Hook `useFilteredProducts` : filtre par stock minimum, tri par prix
- Composant `ProductFilters` : input stock + select tri
- Composant `ProductCard` : affiche nom, prix et badge stock
- Composant `ProductList` : liste filtrée et triée

**Concepts :** custom hook pur (sans effet de bord), `useMemo`, `[...array].sort()`

---

### 9. 📊 Analyse de scores
**Branche :** `feature/score-stats`

- Hook `useScoreStats` : calcule moyenne, max, min, nombre au-dessus du seuil
- Composant `ScoreMinFilter` : input pour le score minimum
- Composant `ScoreStatCards` : 4 cartes de statistiques
- Composant `ScoreUserList` : liste avec barres de progression et code couleur

**Concepts :** agrégation de données avec `useMemo`, visualisation avec barres CSS

---

### 10. 🎮 Tableau de classement des joueurs
**Branche :** `feature/player-dashboard`

- Hook `usePlayerStats` : filtre, trie, attribue rang et catégorie (Faible / Moyen / Élevé)
- Composant `PlayerStatCards` : statistiques globales
- Composant `PlayerCard` : carte joueur avec rang, score et catégorie colorée
- Composant `PlayerList` : classement complet
- Composant `PlayerDashboard` : orchestrateur principal

**Concepts :** transformation de données dans `useMemo`, objet de styles dynamiques, pattern `CATEGORY_STYLES`

---

## 🪝 Hooks personnalisés

| Hook | Paramètres | Retour | Usage |
|------|-----------|--------|-------|
| `useUsers` | `apiUrl` | `{ users, loading, error, refetch }` | Fetch API avec gestion d'état |
| `useFilteredProducts` | `products, minStock, sortOrder` | `filteredProducts[]` | Filtrage et tri mémorisé |
| `useScoreStats` | `users, minScore` | `{ countAboveMin, average, max, min }` | Statistiques mémorisées |
| `usePlayerStats` | `players, minScore` | `{ countAboveMin, average, max, min, ranked }` | Stats + classement + catégories |

---

## 🌿 Workflow Git

### Stratégie de branches

```
main          ← Production stable
  └── develop ← Intégration continue
        ├── feature/counter-toggle
        ├── feature/message-toggle
        ├── feature/user-status-filter
        ├── feature/user-form-validation
        ├── feature/clock
        ├── feature/user-age-filter
        ├── feature/custom-hook-users
        ├── feature/product-filter
        ├── feature/score-stats
        └── feature/player-dashboard
```

### Convention des commits

| Préfixe | Usage | Exemple |
|---------|-------|---------|
| `chore:` | Configuration, setup | `chore: initial project setup with Vite + React` |
| `feat:` | Nouvelle fonctionnalité | `feat: add ClockManager with useEffect cleanup` |
| `fix:` | Correction de bug | `fix: resolve missing import in App.jsx` |
| `refactor:` | Restructuration du code | `refactor: extract filter logic to custom hook` |
| `style:` | Changements CSS uniquement | `style: add responsive grid for stat cards` |
| `docs:` | Documentation | `docs: add README with project overview` |

### Commandes Git utilisées

```bash
# Créer et basculer sur une branche feature
git checkout -b feature/nom-feature

# Ajouter et committer
git add .
git commit -m "feat: description claire et précise"

# Pousser la branche
git push -u origin feature/nom-feature

# Merger dans develop
git checkout develop
git merge feature/nom-feature
git push origin develop
```

---

## ✅ Bonnes pratiques appliquées

### React
- **Composants purs et atomiques** : chaque composant a une seule responsabilité
- **Remontée d'état** (lifting state up) : l'état est toujours géré par le parent commun
- **Props typées et explicites** : noms de props clairs (`onToggle`, `isVisible`, `onUpdate`)
- **Callbacks nommés** : fonctions `handle*` dans le parent, props `on*` dans les enfants
- **useMemo** : utilisé pour tous les calculs coûteux (filtrage, tri, agrégation)
- **useEffect avec cleanup** : `clearInterval` systématique pour éviter les fuites mémoire
- **Hooks personnalisés** : logique réutilisable extraite dans `src/hooks/`
- **Données statiques hors composant** : constantes `USERS`, `PRODUCTS` définies en dehors du composant

### Git
- Une branche par fonctionnalité (`feature/`)
- Commits atomiques et messages conventionnels
- Merge systématique dans `develop` avant de passer à la feature suivante
- Branche `main` stable réservée à la production

---

## 👤 Auteur

Projet réalisé dans le cadre d'un exercice scolaire React + Git.