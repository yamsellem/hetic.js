**Partiel S1 - HETIC W1 - Promotion 2019**
<br>Vendredi 3 février 2017 / 10h00-12h00

---

2 points sont alloués pour la lisibilité du code, le respect de l'indentation et le nommage des variables (en anglais).

Une meilleure note sera donnée à un code qui répond bien à une question plutôt qu'à un code qui répond à peu près à plusieurs questions.

## 1. Mice (9 pts)

a. Ajouter un écouteur d'événement `keyup` sur l'input afin qu'à chaque fois que son contenu change, le contenu du `div#copy` affiche une copie de ce contenu dans son `innerHTML`.

**Ex.** saisir `une souris verte, un chat noir` dans l'input affiche `une souris verte, un chat noir` dans le `innerHTML` de `div#copy`

b. Afficher dans le `div#count` le nombre d'espace contenus dans le texte saisi dans l'input.

**Ex.** saisir `une souris verte, un chat noir` dans l'input affiche 5 dans le `innerHTML` de `div#count` car 5 espaces sont contenus dans le texte saisi

c. Afficher dans le `div#swap` une copie du texte saisi dans l'input dont chaque mot `vert` est remplacé par `bleu` (seul le mot `vert` est à modifier, pas son féminin, ni son pluriel).

**Ex.** saisir `un verre vert et une souris verte` dans l'input affiche `un verre bleu et une souris verte` dans le `div#swap`

**Indice.** la méthode `'un poisson bleu'.split(' ')` permet de découper une chaine de caractères en mots, retournant ainsi `['un', 'poisson', 'bleu']` ; la méthode `['un', 'poisson', 'vert'].join(' ')` fait l'inverse, retournant `'un poisson vert'`

## 2. Tile (9 pts)

a. Ajouter un écouteur d'événement sur chaque `li`, lorsqu'un premier `li` est cliqué, rien ne change à l'écran. Lorsqu'un second `li` est cliqué, si il est de la même classe que le premier, les deux sont supprimés.

Ex. cliquer sur un `li.tomato` puis un `li.tomato` supprime les deux ; cliquer sur un `li.yellow` puis un `li.tomato` ne change rien ; cliquer sur un `li.yellow` puis un `li.tomato` puis un `li.yellow` ne change rien ; cliquer sur un `li.yellow` puis un `li.tomato` puis un `li.tomato` supprime les deux `li.tomato`

b. Lorsque deux `li` de la même classe ont été supprimés, cliquer à nouveau sur un `li` de la même classe le supprime également.

Ex. cliquer sur un `li.tomato` puis un `li.tomato` puis un `li.tomato` puis un `li.tomato` supprime les quatre

c. Lorsque deux `li` sont cliqués d'affilé et qu'ils ne sont pas de la même couleur, un nouveau `li.tomato` est ajouté au `ul`. Ce `li` peut également être cliqué selon les mêmes règles.

Attention toutefois, si un `li` vient d'être ajouté ou supprimé, cliquer sur un `li` avec une classe différente du précédent n'ajoute pas de nouveau `li`.
