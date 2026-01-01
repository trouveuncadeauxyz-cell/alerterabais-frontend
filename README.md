# 🔔 AlerteRabais Frontend

> Interface utilisateur de [AlerteRabais](https://alerterabais.com) — Partie de l'écosystème [Nexus OS](https://github.com/trouveuncadeauxyz-cell/nexus-api)

![Status](https://img.shields.io/badge/status-production-green)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

## 🛠️ Stack
- **Frontend**: HTML5 / CSS3 / JavaScript
- **Backend**: [alerterabais](https://github.com/trouveuncadeauxyz-cell/alerterabais)
- **Données**: mock-products-canada.json (100 produits)
- **Déploiement**: Render (static site)

## 🚀 Quick Start

```bash
# 1. Clone le repo
git clone https://github.com/trouveuncadeauxyz-cell/alerterabais-frontend.git
cd alerterabais-frontend

# 2. Ouvrir dans un navigateur
open index.html

# OU serveur local
python -m http.server 8080
```

Access: `http://localhost:8080`

## 📁 Structure

```
alertarabais-frontend/
├── index.html          # Page principale
├── assets/
│   ├── css/           # Styles
│   ├── js/            # Scripts
│   └── data/          # Données mock
│       └── mock-products-canada.json
├── conditions.html
├── confidentialite.html
└── CNAME
```

## 🐛 Bugs Connus (P0)

- [ ] **Recherche IA**: Retourne seulement 1 résultat au lieu de plusieurs
- [ ] **Responsive mobile**: Mise en page cassée sur petits écrans
- [ ] **Menus Budget/Rabais**: Navigation non fonctionnelle

Voir `docs/CONTEXT.md` pour plus de détails.

## 🌐 Déploiement

- **Plateforme**: Render (static site)
- **URL Production**: [https://alerterabais.com](https://alerterabais.com)
- **Commit stable**: `8873c36` (PRE-NEXUS)

## 🔗 Liens

- [Backend API](https://github.com/trouveuncadeauxyz-cell/alerterabais)
- [Architecture Nexus OS](./.github/ARCHITECTURE.md)
- [Documentation technique](./docs/CONTEXT.md)
- [Intégration API](./docs/API.md)

## 📝 Affiliation

- **Amazon Associate Tag**: `trouveuncadea-20`
- **API Backend**: `https://affiliationengine-api-cjv8.onrender.com`

---

*Nexus OS © 2026*
