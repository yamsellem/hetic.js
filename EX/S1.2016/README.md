Partiel S1 - HETIC W1 - Promotion 2018 (_Jeudi 18 février 2016 / 10h00-12h00_)

---

2 points sont alloués pour la lisibilité du code, le respect de l'indentation, le nommage des variables et le respect des standards. L'usage de la librairie jQuery est autorisé (mais pas obligatoire), merci d'ajouter sa version minifiée en haut de chaque fichier lorsqu'elle est utilisée (pas d'url).

## 1. School (6 pts)

a. Créer une variable `"I used to get mad at my school (No I can't complain)"` et écrire un programme qui remplace :
* les a par des 4
* les e par des 3
* les o par des 0 (zéro)

b. Créer un tableau et, pour chaque mot de ce texte, stocker une entrée correspondant au nombre de lettres de ce mot. Si un chiffre est présent dans un mot, il ne compte pas comme une lettre mais pour sa propre valeur. Ex. `"my"` vaut 2, `"us3d"` vaut 6 (3 lettres + 3), `"sch00l"` vaut 4 (4 lettres + 0 + 0)

c. Afficher cette liste de mots dans une page html sur 2 lignes. La première ligne avec les mots, la seconde, en dessous, avec la valeur associée à chacun d'entre eux

d. Au clic sur une valeur, tous les mots de cette même valeur obtiennent un background jaune

![school](https://cloud.githubusercontent.com/assets/606754/12701684/5a8dd32e-c811-11e5-8b17-8bf48acf826c.png)

Légende : exemple du résultat obtenu après un clic sur un 6

## 2. Mastermind (6 pts)

Dans le jeu du mastermind, un premier joueur choisit un code de 4 couleurs et un second joueur fait des essais pour trouver celui-ci. À chaque essai, le premier joueur lui indique quelles couleurs sont bien placées, mal placées ou absentes.

a. Créer une variable pour stocker un code de 4 couleurs (utiliser des lettres pour représenter les couleurs, ex. `'B'`, `'Y'`, `'G'`, `'R'` pour blue, yellow, green et red)

b. Créer une autre variable pour stocker un essai de 4 couleurs, différent du code

c. Créer une fonction feedback comparant cet essai au code et retournant, pour chaque caractère :
* 2, si il est identique à celui à la même position dans le code
* 1, si il est différent de celui à la même position dans le code, mais présent ailleurs dans le code
* 0, si il est absent du code

Ex. comparer l'essai `['R', 'G', 'Y', 'R']` et le code `['B', 'B', 'Y', 'G']` doit retourner `[0, 1, 2, 0]` — qui signifie : aucun `'R'` dans le code, `'G'` mal placé et `'Y'` bien placé.

d. Si des couleurs sont dupliquées dans l'essai, et que le code n'en contient qu'un exemplaire, le feedback retourné ne doit l'indiquer qu'une seule fois. Ex. comparer l'essai `['R', 'G', 'Y', 'R']` et le code `['G', 'G', 'Y', 'R']` doit retourner `[0, 2, 2, 2]`

## 3. Doubles (6 pts)

a. Créer un tableau contenant 8 paires de mots (les mots `'rain'`, `'sun'`, `'storm'`, `'desert'`, `'mountain'`, `'ocean'`, `'forest'`, `'cosmos'` répétés 2 fois)

b. Afficher ces 16 mots dans une page html en 4 lignes et 4 colonnes

c. Cliquer sur un mot lui donne un background jaune

d. Lorsque deux mots sont sélectionnés (background jaune), ils sont comparés et sont supprimés s'il sont identiques

e. Cliquer sur un troisième mot retire le background des deux mots précédents (s'ils n'ont pas été supprimés) et donne un background jaune à ce nouveau mot ; l'opération est possible jusqu'à ce que tous les mots aient été supprimés

![doubles](https://cloud.githubusercontent.com/assets/606754/12701707/d0cb8a68-c811-11e5-9f6b-a4a36927efd8.png)

Légende : exemple d'un début de partie
