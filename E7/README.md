## E7 — Appels distants
> Ajax (rest, cookie, cors) & Sockets

:cactus: Comparer deux objets

:bulb: Le(s) client(s), récupèrent et affichent les données ; Le serveur, expose les données, gèrent les accès, accède à la db

:bulb: HTTP, échanges asynchornes, cookies

:loop: Un serveur de météo

```
// fetch 6 upcoming days
GET /weather
[ {..}, { city: "M", date: "12-03-2016", temperature: 4 }, {..}]

// fetch precise day
GET /weather/12-03-2016
{ city: "M", date: "..", temperature: 4, condition: "sunny" }

// update precise day temperature
PUT /weather/12-03-2016 {temperature: 12}
{ city: "M", date: "..", temperature: 12, condition: "sunny" }
```

:beginner: [A] Afficher la météo des 6 jours à venir (route /weather). [B] Afficher la météo complète d'aujourd'hui (route /weather/DD-MM-YYYY). [C] Cliquer sur un jour de la semaine affiche sa météo détaillée. [D] Au clic sur le plus, afficher le formulaire et modifier la température actuelle par celle saisie (route /weather/DD-MM-YYYY, méthode PUT). [E] Si la saisie est incorrecte, afficher l'erreur remontée par le serveur. [F] Que faudrait-il faire pour actualiser également la liste ?

:cookie: Le temps réel, les notifications, le offline, toute ces façons de synchroniser client(s) et serveur

---

:closed_book: Lire [le chapitre 8](https://goo.gl/QbZSn8#heading=h.ecnj92nmm3fh) et [le chapitre D](https://goo.gl/QbZSn8#heading=h.xu55k5ca373a)

---

_Légende_:bulb:idées, :loop:kata, :beginner:randori, :closed_book:résumé, :cookie:aparté, :cactus:quizz
