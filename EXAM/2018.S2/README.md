**Partiel 2 - HETIC W1 - Promotion 2018**
<br>Jeudi 16 juin 2016 / 10h00-12h00

---

2 points sont alloués pour la lisibilité du code, le respect de l'indentation, le nommage des variables et le respect des standards. L'usage de la librairie jQuery est autorisé (mais pas obligatoire), merci d'ajouter sa version minifiée en haut de chaque fichier lorsqu'elle est utilisée (pas d'url).

L'usage des fonctionnalités avancées du langage (ES6 et autres librairies) est autorisé — mais peu recommandé (les exercices sont simples sans y avoir recours) —, à condition de joindre avec les fichiers la ligne de commande à utiliser pour utiliser le code (et les dépendances npm si besoin). Ne fournir que le code original, le code transformé par ces outils ne doit pas être commniqué (il sera généré à nouveau lors de la correction).

## 1. Pavement (10 pts)

a. Afficher une grille de 9 cases, 3 lignes sur 3 colonnes. Cliquer sur une case lui ajoute une couleur si elle ne l'a pas, et lui retire si elle l'a. Plusieurs cases peuvent être colorées simultanément.

b. Sous cette grille, afficher une case à cocher avec le label « X ». Lorsque plusieurs cases sont colorées, si elles forment un X (celles d'en haut à gauche, d'en haut à droite, du milieu, d'en bas à gauche et d'en bas à droite) alors la case à cocher avec le label « X » est cochée automatiquement.

c. Cette case à cocher est décochée si ces 5 cases ne sont pas collorées. Si ces 5 case sont colorées avec d'autres cases en plus, le X est coché tout de même. Cocher (ou décocher) la case manuellement n'est pas possible.

d. Faire de même avec la lettre « L », qui peut être cochée de deux façons (1. celles d'en haut à gauche, du mileu à gauche, d'en bas à gauche et d'en bas au centre ; 2. celles d'en haut au centre, du mileu au centre, d'en bas au centre et d'en bas à droite).

e. Faire de même avec la lettre « H » (celles d'en haut à gauche, d'en haut à droite, du mileu à gauche, du mileu au centre, du milieu à droite, d'en bas à gauche et d'en bas à droite).

![pavement](https://cloud.githubusercontent.com/assets/606754/15996782/ff9a6a2a-312b-11e6-89c0-68fed87d9d91.png)

Légende : exemple de trois états de la grille

## 2. Cranberries (8 pts)

a. Dans la patisserie du quartier, une part de gâteau au chocolat est proposée à 2€ et une part de tarte aux pommes à 1.5€. Afficher ces deux informations dans la page avec un bouton « + » à côté de chaque part. Cliquer sur ce bouton compte le nombre de part désirée de chaque patisserie et l'affiche dans la page.

b. Sous la liste du nombre de part désirée, afficher le prix total (2 part de gâteau au chocolat à 2€ pièce et 1 part de tarte aux pommes à 1.5€, donnent un total de 5.5€).

c. Ajouter un bouton « - » à côté du nombre de parts souhaitées de chaque qui décrémente individuellement ce nombre et recalcule le prix total. Le nombre de part ne peux être négatif.

![cranberries](https://cloud.githubusercontent.com/assets/606754/15996798/29dd009a-312c-11e6-8415-6fa10d38c37f.png)

Légende : exemple d'un panier
