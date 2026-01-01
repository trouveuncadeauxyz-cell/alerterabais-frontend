# 📝 Changelog - AlerteRabais Frontend

Tous les changements notables de ce projet sont documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère à [Semantic Versioning](https://semver.org/lang/fr/).

---

## [Unreleased]

### À corriger
- [ ] Recherche IA (1 résultat seulement)
- [ ] Responsive mobile
- [ ] Menus Budget/Rabais

---

## [1.1.0] - 2026-01-01

### ✨ Ajouté - Standardisation Nexus OS
- 📁 **Structure standardisée** du projet
  - `.github/ARCHITECTURE.md` (diagramme global Nexus OS)
  - `docs/CONTEXT.md` (documentation technique + bugs P0)
  - `docs/API.md` (intégration API backend)
  - `README.md` (version enrichie avec emojis et stack)
  - `.env.example` (template de configuration)
  - `CHANGELOG.md` (ce fichier)

- 🏷️ **Release GitHub**
  - Tag `PRE-NEXUS-8873c36` (état avant standardisation)

### 📚 Documentation
- Guide complet d'utilisation
- Identification des bugs prioritaires P0
- Pistes de correction pour chaque bug
- Architecture intégrée Nexus OS

---

## [1.0.0] - 2025-XX-XX

### ✨ Ajouté - Version initiale
- 🌐 **Interface web**
  - Page principale avec grille produits
  - Section recherche IA
  - Navigation header/footer
  - Pages légales (conditions, confidentialité)

- 📄 **Données**
  - 100 produits mock Canada (`assets/data/mock-products-canada.json`)
  - Support Best Buy, Amazon, Walmart

- 🔗 **Intégrations**
  - API Backend AlerteRabais
  - Amazon Associate Tag: `trouveuncadea-20`
  - Affiliation automatique

- 🏛️ **Déploiement**
  - Render (static site)
  - URL: https://alerterabais.com
  - CNAME configuré

### 🔧 Stack technique
- HTML5, CSS3, JavaScript vanilla
- JSON pour les données
- Fetch API pour les requêtes

### 🐛 Bugs connus
- Recherche IA: 1 seul résultat
- Responsive mobile cassé
- Menus Budget/Rabais non fonctionnels

### 📦 Commit stable
- **Hash**: `8873c36`
- **Tag**: PRE-NEXUS-8873c36

---

## 📋 Types de changements

- `✨ Ajouté` : Nouvelles fonctionnalités
- `🔧 Modifié` : Changements de fonctionnalités existantes
- `❌ Supprimé` : Fonctionnalités retirées
- `🐛 Corrigé` : Corrections de bugs
- `🔒 Sécurité` : Correctifs de sécurité
- `📄 Documentation` : Mises à jour de la doc
- `⚡ Performance` : Améliorations de performance

---

## 🔗 Liens

- [Repository GitHub](https://github.com/trouveuncadeauxyz-cell/alerterabais-frontend)
- [Backend API](https://github.com/trouveuncadeauxyz-cell/alerterabais)
- [Architecture Nexus OS](./.github/ARCHITECTURE.md)
- [Context technique](./docs/CONTEXT.md)
- [Intégration API](./docs/API.md)

---

*Nexus OS © 2026*
