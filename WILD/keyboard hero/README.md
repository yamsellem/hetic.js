# Keyboard Hero

Keyboard Hero est un jeu ou des combinaisons de touches s'enchaînent. Elles apparaissent en haut de l'écran et se déplacent progressivement vers le bas. Lorsqu'elles atteignent la « ligne de jeu » (_la dernière ligne du bas_), le joueur doit répliquer la combinaison au clavier et appuyer sur la barre d'espace simultanément.

Un compteur de points augmente à chaque réussite, et, en fin de partie, le nombre de combinaisons réussies est affiché, par rapport au nombre total d'entre elles.

Plusieurs joueurs peuvent rejoindre une partire et mettre leurs dextérité à l'épreuve.

## Fonctionnalités de base

_L'ordre de réalisation de ces fonctionnalités n'a pas d'importance_

- Afficher 4 colonnes, chacune découpée en plusieurs lignes, et, au pied de ces lignes, la ligne de jeu, avec les lettres Z, Q, S et D
- Allumer les lettres de la ligne de jeu (_la ligne du bas_) lorsqu'une ou plusieurs lettres du clavier sont appuyées
- Afficher une combinaison de lettres (_ou une plusieurs_) sur la première ligne (_celle du haut_), et la faire descendre d'une ligne, puis d'une autre, jusqu'à ce qu'elle arrive à la ligne de jeu. À chaque passage d'une combinaison à la ligne suivante, faire apparaitre une nouvelle combinaison sur la première ligne. Le passage des combinaisons d'une ligne à l'autre doit se faire au même rythme
- Quand la barre d'espace est enfoncée, allumer les lettres de la ligne de jeu en vert (_ou autre_) quand la combinaison jouée au clavier correspond à la combinaison affichée, en rouge (_ou autre_) sinon
- À la fin de la partie, lorsque toutes les combinaisons sont passées par la ligne de jeu, afficher le nombre de combinaisons réussies (_letres et barre d'espace enfoncées au bon moment_) sur le nombre total (_ex. 70/120, 58% de réussite_). Et proposer de rejouer une partie

## Fonctionnalités avancées

_L'ordre de réalisation de ces fonctionnalités n'a pas d'importance. Chaque sous partie (score, multijoueur, etc) peut-être réalisée partiellement_

### Score

- Afficher un compteur de score et y ajouter 50 points par combinaison réussie
- Afficher un multiplicateur x1, x2, x3, x4 qui augmente toutes les 10 combinaisons réussies d'affilé. Ce multiplicateur modifie le score obtenu par bonne combinaisons (_50, 100, 150 ou 200 points_). Il retombe à x1 à la première mauvaise combinaison

### Multijoueur

- Permettre à un joueur de créer une partie en attente qu'un autre joueur peut rejoindre sur un autre ordinateur. Lorsque les deux joueurs sont prêts, le premier démarre la partie. Ensuite, chaque combinaison est affichée en même temps aux deux joueurs qui jouent en parallèle
- Le score de chaque joueur (_s'il a été réalisé_) est affiché à tous, et classé du plus ou moins élevé
- Plus de deux joueurs peuvent rejoindre la partie avant qu'elle ne commence

### Lettres longues

- Dans les combinaisons affichées, ajouter des lettres longues, c'est à dire des lettres à maintenir plusieurs combinaisons d'affilé (_sans nécessiter d'appui sur la barre d'espace à chaque fois, tant qu'aucune nouvelle combinaison n'arrive à la ligne de jeu_)
- Le score (_s'il a été réalisé_) est augmenté de 75 points si une lettre longue est maintenue le bon nombre de combinaisons (_et non 50 points pour chaque combinaison dont elle fait partie_)

### Niveau de difficulté

- Proposer de choisir la difficulté avant de commencer la partie. Facile : 3 lettres (_Z, Q, D_). Normal : 4 lettres (_Z, Q, S, D_). Difficile : 5 lettres (_Z, E, Q, S, D_)

### Affichage amélioré

- Réaliser l'affichage du jeu en canvas, et proposer une profondeur telle que la ligne de jeu soit proche en bas et les combinaisons à venir s'éloigent au fur et à mesure. Plus une combinaison arrive dans longtemps, plus elle est affiché loin (_un peu comme le texte d'introduction des Star Wars_)