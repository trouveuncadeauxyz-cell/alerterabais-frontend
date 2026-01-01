# 🔔 AlerteRabais Frontend — Contexte

## 🎯 Objectif

Interface utilisateur web pour afficher les deals et rabais canadiens, intégrée à l'écosystème **Nexus OS**.

---

## 📊 État Actuel

### Status
- **Fonctionnalité**: 95% fonctionnel
- **Commit stable**: `8873c36` (PRE-NEXUS)
- **Tag sécurité**: PRE-NEXUS-8873c36 ✅
- **URL Production**: https://alerterabais.com

### Affiliation
- **Amazon Associate Tag**: `trouveuncadea-20`
- **API Backend**: `https://affiliationengine-api-cjv8.onrender.com`

---

## 📁 Fichiers Clés

### Page Principale
- **index.html** - Page d'accueil et liste des deals
  - Header avec navigation
  - Section recherche IA
  - Grille de produits
  - Footer

### Données
- **assets/data/mock-products-canada.json** - 100 produits test
  - Best Buy Canada
  - Amazon Canada
  - Walmart Canada
  - Format: nom, prix, URL, image

### Scripts
- **assets/js/search.js** - Recherche IA (⚠️ BUG P0)
- **assets/js/products.js** - Affichage produits
- **assets/js/filters.js** - Filtres budget/rabais (⚠️ BUG P0)

### Styles
- **assets/css/main.css** - Styles principaux
- **assets/css/responsive.css** - Responsive (⚠️ BUG P0)

---

## 🐛 Bugs Priorité P0

### 1. Recherche IA (Critique)
**Fichier**: `assets/js/search.js`

**Symptôme**: La recherche retourne seulement 1 résultat au lieu de plusieurs

**Cause probable**:
- Mauvaise logique de filtrage
- Limiteur mal configuré (`limit: 1`?)
- Problème d'itération sur les résultats

**Piste de fix**:
```javascript
// Ligne ~42-45
function searchProducts(query) {
  return products.filter(p => 
    p.name.includes(query)
  ).slice(0, 10);  // Au lieu de .slice(0, 1)
}
```

---

### 2. Responsive Mobile (Visuel)
**Fichier**: `assets/css/responsive.css`

**Symptôme**: Mise en page cassée sur petits écrans (<768px)

**Problèmes**:
- Grille produits ne passe pas en colonne unique
- Header déborde
- Boutons trop petits

**Piste de fix**:
```css
@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr; /* Au lieu de repeat(3, 1fr) */
  }
}
```

---

### 3. Menus Budget/Rabais (Fonctionnel)
**Fichier**: `index.html` (lignes ~67-82)

**Symptôme**: Les menus déroulants Budget et Rabais ne filtrent pas les produits

**Cause**: Événements `onchange` non connectés à `assets/js/filters.js`

**Piste de fix**:
```html
<select id="budget-filter" onchange="applyFilters()">
  <!-- Au lieu de onclick ou aucun handler -->
```

---

## 🔗 Intégrations

### Backend
- **Repo**: [alerterabais](https://github.com/trouveuncadeauxyz-cell/alerterabais)
- **API**: FastAPI + Scraping
- **Endpoints**:
  - `GET /deals` - Liste deals
  - `GET /search?q=` - Recherche

### Nexus OS
- **Orchestrateur**: [nexus-api](https://github.com/trouveuncadeauxyz-cell/nexus-api)
- **Dashboard**: [control-center](https://github.com/trouveuncadeauxyz-cell/control-center)

Voir `.github/ARCHITECTURE.md` pour le diagramme complet.

---

## 🛠️ Stack Technique

- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Déploiement**: Render (static site)
- **Données**: JSON statique (100 produits mock)
- **Affiliation**: Amazon Associate Program

---

## 📚 Documentation

- [README.md](../README.md) - Guide principal
- [.github/ARCHITECTURE.md](../.github/ARCHITECTURE.md) - Architecture Nexus OS
- [docs/API.md](./API.md) - Intégration API
- [CHANGELOG.md](../CHANGELOG.md) - Historique

---

*Nexus OS © 2026*
