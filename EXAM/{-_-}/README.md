# {-_-}

Ce répertoire est le correcteur automatique des exams ; pour l'utiliser, il est nécessaire de :
* installer [nodejs](https://nodejs.org/)
* installer les dépendances : pour cela, dans un terminal, se positionner dans le répertoire de ce README puis saisir `npm install`
* créer un répertoire à son prénom dans le répertoire `/public`
* ajouter dans ce répertoire les fichiers `.html` à valider
* lancer le correcteur avec `npm start -- --file file1 file2` en remplaçant file1 et file2 par le nom des fichiers `.html` à valider

_Note : pour des raisons de performance, les tests sont lancés dans un ordre non déterministe, la question à laquelle ils correspondent est indiquée devant chaque test entre parenthèses_