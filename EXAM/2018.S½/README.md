**Partiel S½ - HETIC W1 - Promotion 2018**
<br>Lundi 21 mars 2016 / 1h20

---

2 points sont alloués pour la lisibilité du code, le respect de l'indentation, le nommage des variables et le respect des standards. L'usage de la librairie jQuery est autorisé (mais pas obligatoire), merci d'ajouter sa version minifiée en haut de chaque fichier lorsqu'elle est utilisée (pas d'url).

## 1. Scrabble (9 pts)

La valeur d'un mot au scrabble est égale à l'addition de la valeur de chaque lettre qui le compose. Par exemple, scrabble vaut 1(s) + 3(c) + 1(r) + 1(a) + 3(b) + 3(b) + 1(l) + 1(e) = 14

Les lettres ont la valeur suivante :
* 2 points, D, G
* 3 points, B, C, M, P
* 4 points, F, H, V, W, Y
* 5 points, K
* 1 point, les autres lettres

a. Créer une (ou plusieurs) variable(s) pour stocker la valeur respective des lettres

b. Créer une fonction `score` prenant un mot en entrée et retournant sa valeur en sortie. Par exemple, `score('scrabble')` retourne 14

c. Afficher un input dans la page et, lors de la saisie d'un mot par l'utilisateur, afficher à côté sa valeur calculée par la fonction

d. Un utilisateur peut valider un mot, après avoir saisi des caractères dans l'input, en appuyant sur entrée. Lorsqu'il fait cela, un tableau en dessous de l'input affiche le mot ainsi validé et sa valeur de scrabble. Valider un mot efface également le contenu de l'input et l'utilisateur peut répéter l'opération

![scrabble](https://cloud.githubusercontent.com/assets/606754/13724252/7e538cd8-e880-11e5-8475-825ed1e597f3.png)

Légende : exemple du résultat obtenu après saisie de plusieurs mots

## 2. Monopoly (9 pts)

a. Afficher un tableau dans la page de deux lignes de cinq cases chacune, la seconde ligne contient les mots `Belleville`, `Lecourbe`, `Vaugirard`, `Courcelles` et `République`

b. Au clic sur une des cases de la première ligne, celle-ci devient verte, au second clic, elle devient rouge

c. Si 3 cases ou plus sont rouge, toutes les cases de la première ligne deviennent rouge

d. Lorsque toutes les cases sont rouges, cliquer sur une des deux cases qui ont été passées automatiquement au rouge (quand les trois autres ont été cliquées), vide toutes les cases de toutes les couleurs

![monopoly](https://cloud.githubusercontent.com/assets/606754/13724458/a621e128-e886-11e5-965d-bf5d5cc6688f.png)

Légende : exemple du résultat obtenu après 1 clic sur 3 cases et 2 clics sur 1 case
