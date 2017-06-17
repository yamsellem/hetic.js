**Partiel S2 - HETIC W1 - Promotion 2019**
<br>Vendredi 16 juin 2017 / 10h00-12h00

---

2 points sont alloués pour la lisibilité du code, le respect de l'indentation et le nommage des variables (en anglais).

Une meilleure note sera donnée à un code qui répond bien à une question plutôt qu'à un code qui répond à peu près à plusieurs questions.

## 1. Coin (9 pts)

L'objectif de cet exercice est de réaliser un panier similaire à celui des boutiques en ligne. Pour simplifier les choses, le contenu du panier est fixe — 1 t-shirt — et seule sa quantité et des options d'achat peuvent être modifiées.

a. Pour l'instant, 1 t-shirt est dans le panier et le prix total affiché est égal au prix du t-shirt (20€). Ajouter un écouteur d'événement `keyup` sur l'input `quantity` afin qu'à chaque fois que la quantité change, le contenu du `div#total` affiche le total correct dans son `innerHTML`.

**Ex.** Choisir 3 t-shirt doit afficher un total de 60€

b. Ajouter un écouteur d'événement sur la checkbox `delivery` afin que, si elle est cochée, le total soit augmenté de 5€.

**Ex.** Cocher « livré à domicile » affiche un total de 25€ pour 1 t-shirt (20+5) et affiche un total de 65€ pour 3 t-shirt (20*3+5)

c. Ajouter un écouteur d'événement sur la checkbox `gift` afin que, si elle est cochée, le total soit augmenté de 2€ par t-shirt.

**Ex.** Cocher « emballage cadeau » affiche un total de 22€ pour 1 t-shirt (20+2) et affiche un total de 66€ pour 3 t-shirt (20*3+2*3)

d. Ajouter un écouteur d'événement `keyup` sur l'input `coupon` afin que si il est égal à `été`, une réduction de 10€ soit décomptée du total.

**Ex.** Saisir « été » en coupon de réduction affiche un total de 10€ pour 1 t-shirt (20-10) et affiche un total de 50€ pour 3 t-shirt (20*3-10)

## 2. Tube (9 pts)

L'objectif de cet exercice est de réaliser un indicateur de progression de métro (comme dans la ligne 9 du métro parisien). Certains métros disposent en effet d'un indicateur de progression constitué d'un point par station qui s'illumine au fur et à mesure que la rame dessert ces stations. Arrivée à son terminus, tous les indicateurs lumineux s'éteignent (sauf le terminus) et la rame repart dans l'autre sens.

a. La rame représentée ici dispose de 7 stations et part de son terminus de gauche (il est allumé puisqu'il dispose de la classe `light`). Ajouter un écouteur d'événement `click` sur chaque station (éléments `li`) afin qu'elle acquière la classe `.light` lorsqu'elle est cliquée à condition qu'elle soit la prochaine station à être desservie.

**Ex.** Cliquer sur la troisième station en partant de la gauche n'a aucun effet, puisque la seconde station n'a pas encore été desservie. Cliquer sur la seconde en partant de la gauche doit l'allumer (lui ajouter la classe `.light`), il est alors possible de cliquer sur la troisième station. Quand le troisième station est allumée, il est alors possible de cliquer sur la quatrième, etc.

b. Lorsque toutes les stations sont allumées, tous les points doivent s'éteindre, sauf le terminus de droite. Il doit être alors possible d'allumer les points en partant de la droite, un à un. À l'identique de la question précédente, il ne doit pas être possible de sauter des stations.

**Ex.** Lorsque toutes les stations sont allumées, elles s'éteignent toutes sauf la septième en partant de la gauche. Cliquer sur la troisième station en partant de la gauche n'a aucun effet. Cliquer sur la sixième station en partant de la gauche l'allume, il est alors possible de cliquer sur la cinquième. Lorsque la cinquième station est allumée, il est alors possible de cliquer sur la quatrième, etc.

c. S'assurer qu'il est possible d'allumer les stations de la gauche vers la droite, une par une, puis de la droite vers la gauche, puis, à nouveau de la gauche vers la droite.
