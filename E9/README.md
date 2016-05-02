## E9 — Applications
> États, vues et patterns mv*

:beginner: À partir du code du dossier todomvc, créer une application (avec ou sans jQuery, au choix) dotée des fonctionnalités suivantes (~120 loc)

:beginner: Ajouter la classe `completed` sur le `li` quand l'input checkbox est coché

:beginner: Ajouter un nouveau `li` lors de la saisie d'une tâche dans l'input principal et de l'appui sur `entrée` (keyCode 13)

:beginner: Supprimer un `li` lors du clic sur la croix à sa droite (les nouveaux `li` doivent également pouvoir être supprimés)

:beginner: Double cliquer sur un `label` ajoute la classe `editing` à son `li`. L'input reçoit la valeur actuelle et peut être modifié à l'appui sur `entrée`. Cliquer à l'extérieur de l'input retire la classe `editing` du `li`.

:beginner: Cliquer sur les filtres `all`, `active` et `completed` leur affecte la classe `selected` à tour de rôle (l'url est modifiée `#/`, `#/active` et `#/completed`, s'abonner à l'événement ainsi déclenché — `#` déclenche un événement mais ne rafraîchit pas la page).

:beginner: Rafraichir la page doit afficher le bon filtre en `selected`

:beginner: Cliquer sur les filtres `all`, `active` et `completed` affichent tous les todos, uniquement ceux non cochés et uniuement ceux cochés.

:beginner: Cliquer sur le bouton `clear completed` supprime les todos cochés.

:beginner: Cliquer sur l'input flèche inclinée vers le bas coche ou décoche tous les todos

:beginner: Un décompte du nombre d'items non cochés est affiché dans `#todo-count` ai mis à jour à chaque action

:bulb: Limitations du développement d'applications vanilla / jQuery et solutions proposées par les frameworks mv*

:beginner: Répéter toutes ces étapes avec un framework, react, backbone, vue, etc, de (très) nombreux exemples [sont disponibles todomvc](https://github.com/tastejs/todomvc/tree/master/examples) pour s'inspirer et mieux comprendre

---

:closed_book: Lire [le chapitre 9](https://goo.gl/QbZSn8#heading=h.nuw15gkiaala)

---

_Légende_:bulb:idées, :loop:kata, :beginner:randori, :closed_book:résumé, :cookie:aparté, :cactus:quizz
