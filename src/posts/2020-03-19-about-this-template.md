---
title: Comment utiliser ce modèle de site
date: 2020-03-16T23:00:00.000Z
---
En cas d'urgence, les entreprises et associations ont besoin de diffuser rapidement des informations. Le site internet dont elles disposent déjà n'offre pas toujours la flexibilité nécessaire, et n'est parfois pas capable d'absorber un pic de traffic important. Par ailleurs, leur site Internet se trouve parfois ralenti ou inutilisable sur smartphone dans des zones ou le débit est dégradé.

Cet outil permet de mettre en ligne un site Internet très simple, léger, qui est capable de faire face à un fort traffic ou à des conditions d'accès dégradées.

Il permet de publier des brèves, sous la forme d'articles que l'on édite en ligne. L'éditeur implémente un workflow de publication, c'est à dire que chaque article écrit par un utilisateur peut être revu et approuvé avant sa mise en ligne.

## Fonctionnalités

* Génération de sites statiques à l'aide de [Eleventy](https://11ty.dev)
* Haute performance, avec un score de Google Insight de 96 %

![96% performance](/static/images/uploads/score-lighthouse.png "Scores audit LightHouse")

* Accessibilité préservée par un style épuré
* Utilisation de Netlify CMS pour la création des articles à plusieurs (5 utilisateurs) 

![Editition d'un article avec Netlify CMS](/static/images/uploads/edition-articles.png "Editition d'un article avec Netlify CMS")


## Comment démarrer ?

Le plus simple est d'utiliser GitHub et Netlify . Assurez-vous de disposez d'un compte d'accès pour ces deux services, puis cliquez sur ce bouton pour réaliser la procédure automatiquement :  

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Herve07h22/emergency-site) 

Pour personnaliser le site, modifier le fichier `src/data/meta.json`, et cliquez sur le lien "accès édition" en bas de page.

## Crédits

L'idée originale et le code sont de [Max Böck](https://mxb.dev/blog/emergency-website-kit/). [J'ai](https://camilab.co) réalisé le débuggage de l'authentification par Netlify Identity et le passage en français.


