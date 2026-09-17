# ShopVue — Catalogue de produits Angular

Site vitrine statique développé avec Angular, dans le cadre du cours de Technologie Web 3 (Licence 1 Informatique). Le site présente un catalogue de produits fictifs répartis par catégories.

## Thème choisi

Une boutique fictive en ligne présentant des produits du quotidien (électronique, accessoires, maison), avec catalogue filtrable par catégorie et fiche détaillée par produit.

## Binôme

| Nom | Rôle |
|---|---|
| Mouhamadou Lamine BOP | Page d'accueil (catalogue), page de détail produit, modèle et service de gestion des produits |
| Khadidiatou BOP | Barre de navigation, pied de page, page "À propos", page "Contact" |

## Fonctionnalités

- Page d'accueil : liste des produits générée dynamiquement, avec filtre par catégorie
- Page de détail : fiche produit complète, accessible via l'URL (ex. `/produits/3`)
- Page "À propos" : présentation du projet et du binôme
- Page "Contact" : formulaire utilisant le binding bidirectionnel Angular (`ngModel`)
- Navigation et pied de page communs à toutes les pages via le routeur Angular

## Technologies utilisées

- Angular (dernière version stable)
- Composants standalone, data binding, directives structurelles (`*ngFor`, `*ngIf`)
- Routage Angular (`RouterLink`, `RouterOutlet`)
- Données statiques (aucune base de données ni API)
- CSS personnalisé

## Lancer le projet en local

```bash
git clone https://github.com/mouhamadoulaminebop0-commits/catalogue-produits-angular.git
cd catalogue-produits-angular
npm install
ng serve
```

Puis ouvrir [http://localhost:4200](http://localhost:4200) dans le navigateur.

## Déploiement

🔗 [Voir le site déployé](https://shopvue-catalogue.web.app)