# 📡 Intégration API - AlerteRabais Frontend

## Backend API

**URL**: `https://affiliationengine-api-cjv8.onrender.com`

### Endpoints utilisés

#### `GET /deals`
Récupérer la liste des deals actifs.

**Exemple**:
```javascript
fetch('https://affiliationengine-api-cjv8.onrender.com/deals')
  .then(res => res.json())
  .then(deals => displayDeals(deals));
```

#### `GET /search?q={query}`
Recherche de produits par mots-clés.

**Exemple**:
```javascript
const query = 'laptop';
fetch(`https://affiliationengine-api-cjv8.onrender.com/search?q=${query}`)
  .then(res => res.json())
  .then(results => displayResults(results));
```

---

## Amazon Affiliation

### Configuration
```javascript
const AMAZON_TAG = 'trouveuncadea-20';

// Format lien affiliate
function getAffiliateLink(productUrl) {
  return `${productUrl}?tag=${AMAZON_TAG}`;
}
```

---

## Données Mock

**Fichier**: `assets/data/mock-products-canada.json`

**Structure**:
```json
[
  {
    "id": 1,
    "name": "Laptop Dell XPS 13",
    "price": 1299.99,
    "retailer": "Best Buy Canada",
    "url": "https://bestbuy.ca/...",
    "image": "https://..."
  }
]
```

**Utilisation**:
```javascript
fetch('assets/data/mock-products-canada.json')
  .then(res => res.json())
  .then(products => {
    // 100 produits disponibles
    displayProducts(products);
  });
```

---

## Nexus OS

Voir [ARCHITECTURE.md](../.github/ARCHITECTURE.md) pour l'intégration complète avec l'écosystème Nexus OS.

---

*Nexus OS © 2026*
