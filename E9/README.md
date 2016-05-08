## E9 — Applications
> Vues, états et patterns mv*

:beginner: À partir du code du dossier todomvc, créer une application (avec ou sans jQuery, au choix) dotée des fonctionnalités suivantes (~100 loc)

:beginner: Ajouter la classe `completed` sur le `li` quand l'input checkbox est coché

:beginner: Ajouter un nouveau `li` lors de la saisie d'une tâche dans l'input principal et de l'appui sur `entrée` (keyCode 13)

:beginner: Supprimer un `li` lors du clic sur la croix à sa droite (les nouveaux `li` doivent également pouvoir être supprimés)

:beginner: Double cliquer sur un `label` ajoute la classe `editing` à son `li`. L'input reçoit la valeur actuelle et peut être modifié à l'appui sur `entrée`. Cliquer à l'extérieur de l'input retire la classe `editing` du `li`.

:beginner: Cliquer sur les filtres `all`, `active` et `completed` leur affecte la classe `selected` à tour de rôle (l'url est modifiée `#/`, `#/active` et `#/completed`, s'abonner à l'événement ainsi déclenché — `#` déclenche un événement mais ne rafraîchit pas la page).

:beginner: Rafraichir la page doit afficher le bon filtre en `selected`

:beginner: Cliquer sur les filtres `all`, `active` et `completed` affiche tous les todos, uniquement ceux non cochés et uniquement ceux cochés.

:beginner: Cliquer sur le bouton `clear completed` supprime les todos cochés.

:beginner: Cliquer sur l'input flèche inclinée vers le bas coche ou décoche tous les todos.

:beginner: Un décompte du nombre d'items non cochés est affiché dans `#todo-count`, le mettre à jour à chaque action.

:bulb: Limitations du développement d'applications vanilla / jQuery et solutions proposées par les librairies mv*.

:beginner: Répéter toutes ces étapes avec un framework, react, backbone, vue, etc, de (très) nombreux exemples [sont disponibles todomvc](https://github.com/tastejs/todomvc/tree/master/examples) pour s'inspirer et mieux comprendre. Voici un guide pour backbone et react.

---

### [Backbone](backbonejs.org)

:bulb: La librairie backbone, composée de 4 classes, `model`, `collection`, `view` et `router`, permet de découper une application jQuery en parties isolées du DOM, les vues, se partageant des données, les modèles et collections. Une dépendance à jQuery est nécessaire ainsi qu'une dépendance à `underscore` (ou `lodash`).

:beginner: Lire [le guide `Getting started`](http://backbonejs.org/#Getting-started)

:beginner: À partir du code du dossier todomvc, créer une application backbone (~200 loc) dotée des mêmes fonctionnalités.

:beginner: Créer une vue `Header` et l'ajouter au DOM

```javascript
var Header = Backbone.View.extend({
  tagName: 'header',
  id: 'header',
  template: function() {
    return `
      <h1>todos</h1>
      <input id="new-todo" placeholder="What needs to be done?" autofocus>
    `;
  },
  render: function() {
    $(this.el).html(this.template());
    return this;
  }
});

$('#todoapp').append(new Header().render().el)
```

:bulb: Par convention, les vues backbone disposent d'une méthode `render` qui accède à `this.el` — l'élément du DOM manipulé par cette vue — et change son contenu. Cette méthode est à invoquer à chaque fois que la vue doit être rafraichie. Par convention également, les vues disposent d'une `template` qui contient le HTML à afficher.

:beginner: Déclarer un écouteur d'événement dans la vue `Header` à l'aide de l'attribut `events: {'keyup': 'onChange'}` et une méthode `onChange` qui reçoit un `event` en paramètre.

:bulb: Les événements écoutés dans une vue sont limités à la partie de DOM que la vue représente. Ainsi, la méthode déclenchée par l'écouteur d'événement `keyup` de cette vue ne sera invoqué que pour les inputs de cette vue.

:beginner: Afficher le texte saisi dans l'input dans la console quand la touche entrée est saisie grâce à cet écouteur d'événement (la valeur est dans `event.target.value`).

:bulb: Les données affichées dans les vues peuvent être stockées dans des modèles et des collections (liste de modèles).

```javascript
var todos = new Backbone.Collection();
todos.add({name: inputValue, completed: false});
```

:bulb: Les vues peuvent écouter les modifications sur les collections et se rafraichir. La méthode `initialize` de toutes les classes backbone est invoquée automatiquement à leurs instanciation avec la méthode `new`.

```javascript
var View = Backbone.View.extend({
  initialize: function() {
    this.listenTo(collection, 'add', function() {
      this.render();
    });
  }
});

var view = new View(); // triggers initialize
```

:beginner: Créer une collection, `var todos = new Backbone.Collection();`, et, dans la vue `Header`, ajouter un modèle dans cette collection quand l'input est validé, `collection.add({name: inputValue, completed: false});`.

:beginner: S'abonner dans la vue à cette collection et l'afficher dans la console à chaque ajout de modèle.

:beginner: Isoler une vue `List` et une vue `Footer`, la première avec la `<section class="#main">` pour les todos, la seconde avec le `footer`.

:beginner: Abonner `List` à l'ajout d'éléments dans la collection et la `render` à chaque fois. Sa `template` doit ajouter un `<li>` dans son `<ul>` pour chaque modèle dans la collection. Pour cela, elle peut créer une autre vue pour chaque modèle et `append` son `el` au `<ul>` comme cela a été fait pour les vues principales et `#todoapp` au début.

```javascript
var List = Backbone.View.extend({
  render: function() {
    var model = this.collection.first();
    var item = new Item({model: model});
    $(this.el).find('ul').append(item.render().el);  
    return this;
  }
});
```

:bulb: L'intéret d'imbriquer ainsi des vues est que chacune gère son pré carré. Pour les `<li>` c'est particulièrement utile, puisqu'ainsi il est possible de poser des écouteurs d'événements sur chaque `<li>` et de modifier le modèle affiché par le vue (par exemple le troisième todo).

:beginner: Implémenter la vue `Item` afin qu'elle modifie l'attribut `completed` de son modèle au clic sur la checkbox, `this.model.set('completed', true);`. Gérer le cas de l'édition en ajoutant la classe `editing` sur le `<li>` pour révéler l'input ; et gérer la saisie et la touche entrée.

:bulb: Lorsqu'une vue est supprimée, avec `remove`, son noeud DOM l'est également.

:beginner: Gérer le clic sur le `button` qui supprime le modèle (`this.model.destroy()`) et la vue.

:beginner: Gérer le clic sur `#toggle-all` qui passe tous les modèles à `completed`.

:beginner: Gérer le clic sur `#clear-completed` qui supprime tous les modèles `completed`.

:bulb: La dernière classe backbone, `router`, permet de s'abonner aux changements d'url.

```javascript
var Router = Backbone.Router.extend({
  routes: {
    '*filter': 'setFilter'
  },
  setFilter: function (param) {
    todos.trigger('filter', param);
  }
});
```

:beginner: Envoyer un événement `filter` à la collection de todos et modifier les vues `List` et `Footer` en fonction.

:beginner: Vérifier que la combinaison de différents états fonctionne (ex. n'afficher que les modèles `completed` et décocher un todo doit cacher la vue qui le contient).

---

### React

:bulb: La librairie react permet de s'abstraire en grande partie du DOM lors du développement d'application. Elle ne nécessite pas jQuery.

:beginner: Lire [le guide `Getting started`](https://facebook.github.io/react/#examples)

:beginner: À partir du code du dossier todomvc, créer une application react (~200 loc) dotée des mêmes fonctionnalités.

:bulb: Les composants react disposent également d'une méthode `render` qui doit retourner la représentation HTML de la vue. Cependant, react utilise (en option) JSX, une syntaxe qui étend le language HTML (les éditeurs proposent des plugins pour l'afficher correctement, penser à nommer le fichier .jsx).


```javascript
var Header = React.createClass({
  render: function() {
    return <header id="header">
      <h1>todos</h1>
      <input
        id="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}/>
    </header>;
  }
});

React.render(<Header />, document.querySelector('#todoapp'));

```

:beginner: Créer une vue `Header`, `List` et `Footer` dont la méthode `render` affiche les trois parties principales du DOM (`<header>`, `<section id="#main"` et `<footer>`).

```javascript
React.render(<div><Header />< List /><Footer /></div>, document.querySelector('#todoapp'));
```

:bulb: React ne gère que la partie vue, pour manipuler des données ou gérer des routes, il faut utiliser d'autres outils. Il est, par exemple, possible de modifier les Map natives à javascript pour créer une classe similaire aux collections backbone : une liste qui peut notifier des callbacks à chaque modification.

```javascript
// add listeners to Map common update operations
class Collection extends Map {
  constructor() {
    super();
    this.listeners = [];
  }
  set(key, value) {
    super.set(key, value);
    this.listeners.forEach(cb => cb());
  }
  delete(key) {
    super.delete(key);
    this.listeners.forEach(cb => cb());
  }
  onChange(cb) {
    this.listeners.push(cb);
  }
}

var collection = new Collection();
collection.onChange(function() {
  // called each time something has been added or deleted
});
collection.set(1, 'Clean my room');
collection.set(2, 'Play video games');
collection.delete(2);
```

:bulb: D'un autre côté, il est possible d'ajouter des listeners d'énéments directement dans JSX pour être informé d'une action utilisateur.

```javascript
var Header = React.createClass({
  render: function() {
    return <input
      value={this.state.newTodo}
      onKeyDown={this.handleKeyDown}
      onChange={this.handleChange} />;
  },
  handleKeyDown: function(event) {
    console.log(event.keyCode, this.props.collection);
  },
  handleChange: function(event) {
    this.setState({newTodo: event.target.value});
  },
  getInitialState: function() {
    return {
      newTodo: ''
    }
  }
});

React.render(
    <div><Header collection={collection}/>< List /><Footer /></div>, document.querySelector('#todoapp')
);
```

:bulb: En plus du `onKeyDown` qui permet d'écouter les événements de saisie dans l'input, deux autres valeurs sont à indiquer, `onChange` et `value`. Sans ça, les événements sont bien remontés, mais le texte dans l'input est en lecture seule. `value` permet d'indiquer la variable qui va stocker l'état de cet input, et `onChange` permet de mettre cette valeur à jour à chaque saisie. La méthode `getInitialState` permet d'indiquer la valeur par défaut de l'état complet du composant.

:bulb: Les composants react dispose de deux attributs principaux, `state` et `props`. Le premier correspond à l'état interne du composant, le second correspond aux paramètres fournis par son parent à sa création. Lorsque le `state` d'une composant est modifié (avec `this.setState({})`),  il est automatiquement `render`. Ce n'est pas le cas si ces `props` sont modifiées.

:beginner: Ajouter un item à la collection de todo à la saisie de la touche entrée dans le input de `Header`.

:beginner: Abonner la vue `List` aux modifications sur la collection dans sa méthode `componentDidMount` (invoquée une seule fois au premier affichage du composant), et déclencher la méthode `this.forceUpdate` lorsque cela se produit (ainsi, à chaque modificaiton de la collection, la liste est mise à jour).

:bulb: Passer la collection aux composants se fait avec JSX, `<List collection={collection}/>`. Le composant aura un attribut `this.props.collection` (tous les paramètres ainsi passés attérissent dans les `props`), modifier cette collection ne déclenchera pas de `render` automatique (seul le `state` le déclenche), c'est pourquoi il est nécessaire de faire un `forceUpdate` à la modification de la collection.

:beginner: Modifier la méthode `render` de `List` afin de créer autant de sous composants qu'il y a d'items dans la collection.

```javascript
var List = React.createClass({
  render: function() {
    var items = Array
    .from(this.props.collection.values())
    .map(model => {
      return <Item
        key={model.id}
        model={model} />;
    });

    return <section id="main">
      <input id="toggle-all" type="checkbox"/>
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul id="todo-list">
        {items}
      </ul>
    </section>;
  }
});
...

var Item = React.createClass({...});
```

:bulb: Déclencher un `forceUpdate` sur la classe `List` rafraichit également les `Item` qu'elle encapsule.

:beginner: Ajouter un `onChange={this.props.onToggle}` sur la checkbox de `Item`. Modifier son parent avec :

```javascript
var List = React.createClass({
  render: function() {
    return ... <Item onToggle={this.toggle.bind(this, model)} ...;
  },
  toggle: function(model) {
    model.completed = !model.completed;
    this.props.collection.set(model.id, model);
  }
});
```

:bulb: Ainsi les vues parentes peuvent s'abonner aux événements déclenchés sur leurs vues filles.

:beginner: Dans `Item`, ajouter un écouteur `<label onDoubleClick={this.handleEdit}>{this.props.model.name}</label>` et la méthode `handleEdit` modifiant `this.setState({ editing: true, editText: this.props.model.name });`. Puis dans la méthode `render` modifier la balise `<li>` avec `<li className={classNames({ editing: this.state.editing})}>`. Cela permet d'ajouter ou enlever la classe `editiing` en fonction du `state` du composant.

:beginner: Ajouter des `onKeyDown`, `onBlur`, `onChange` et `value` à l'input texte de `Item` avec les méthodes associées.

:beginner: Ajouter également `onClick={this.props.onDestroy}` à `Item`.

:beginner: Créer un composant `App` ayant pour `state` la propriété `nowShowing` correspondant au filtre `all`, `active` ou `completed`. Lui donner une méthode `componentDidMount` avec le code de routing :

```javascript
var collection = new Collection();

var App = React.createClass({
  getInitialState: function() {
    return {
      nowShowing: 'all'
    }
  },
  render: function() {
    return <div>
      <Header collection={collection}/>
      <List collection={collection} nowShowing={this.state.nowShowing}/>
      <Footer collection={collection} nowShowing={this.state.nowShowing}/>
    </div>;
  },
  componentDidMount: function () {
    var setState = this.setState;
    var router = Router({
      '/': setState.bind(this, {nowShowing: 'all'}),
      '/active': setState.bind(this, {nowShowing: 'active'}),
      '/completed': setState.bind(this, {nowShowing: 'completed'})
    });
    router.init('/');
  }
});

React.render(
  <App />,
  document.querySelector('#todoapp')
);
```

:bulb: Le router utilisé dans l'exemple est [director](https://github.com/flatiron/director).

:beginner: Modifier le composant `Footer` en fonction de cette nouvelle `props` qu'il reçoit, `this.props.nowShowing`.

:beginner: Modifier le composant `List` pour qu'il n'affiche que les items de la collection correspondant au filtre.

:beginner: Gérer le clic sur le bouton `clear-completed`.

:beginner: Gérer le clic sur le bouton `toggle-all`.

:beginner: Gérer le compte d'item restants, `2 items left`.

:bulb: Contrairement à jQuery ou backbone, il n'est pas nécessaire de vérifier que ici la combinaison de différents états fonctionne (ex. n'afficher que les modèles `completed` et décocher un todo doit cacher la vue qui le contient). L'affichage des composants et du DOM dépend uniquement de leurs états `state` et `props`, la synchronisation des deux étant effectuée par react (et `forceUpdate` pour les `props`), il est beaucoup plus rare d'avoir des états incohérents.

---

:closed_book: Lire [le chapitre 9](https://goo.gl/QbZSn8#heading=h.nuw15gkiaala)

---

_Légende_:bulb:idées, :loop:kata, :beginner:randori, :closed_book:résumé, :cookie:aparté, :cactus:quizz
