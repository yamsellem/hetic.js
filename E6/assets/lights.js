/* eslint-env es6 */
class Board {
    constructor(squares, options) {
        this.squares = squares;
        this.done = options.done;
        this.match = options.match;
        this.reorder = options.reorder;

        this.render();
    }
    start() {
        if (!this.reorder)
            this.renderClasses();

        if (this.match())
            this.done();
        else
            console.log('Try again');

        if (!this.reorder)
            this.renderClasses();
    }
    square(x, y) {
        return this.squares[x + (y - 1) * 3 - 1];
    }
    render() {
        var ul = document.querySelector('ul.board');
        ul.innerHTML = '';
        this.squares.forEach(function(square) {
            var li = document.createElement('li');
            for (var property in square)
                li.className += property + ' ';
            li.className = li.className.slice(0, -1);
            ul.appendChild(li);
        });
    }
    renderClasses() {
        var lis = document.querySelectorAll('ul.board li');
        for (var i = 0; i < lis.length; i++) {
            var li = lis[i];
            var square = this.squares[i];
            li.className = '';
            for (var property in square)
                li.className += property + ' ';
            li.className = li.className.slice(0, -1);
        }
    }
    equals(a, b) {
        return Object.keys(a).reduce(function(memo, key) { return memo && a[key] === b[key]; }, true)
            && Object.keys(b).reduce(function(memo, key) { return memo && a[key] === b[key]; }, true);
    }
}

class Manual {
    constructor(title, instructions) {
        document.querySelector('.manual h1').innerHTML = title;
        document.querySelector('.manual p').innerHTML = instructions;
    }
}

class Level {
    constructor() {
        document.body.innerHTML = `
        <ul class="board"></ul>
        <div class="pane">
            <ul class="level">
                <li><a href="#" class="active" data-hook="previous">←</a></li>
                <li class="current" data-hook="level"><span>1</span></li>
                <li><a href="#" data-hook="next">→</a></li>
            </ul>
            <div class="scroll">
                <div class="manual">
                    <h1></h1>
                    <p></p>
                </div>
            </div>
            <ul class="controls">
                <li><a href="#" data-hook="reset">↩</a></li>
                <li><a href="#" data-hook="start">⇥</a></li>
            </ul>
        </div>`;

        var stage = +window.location.hash.substring(1) || 1;
        var stored = localStorage.getItem('stage-2') || 1;
        if (stage > stored) {
            window.location.hash = stored;
            window.location.reload();
            return;
        }

        this.stage = stage;
        document.querySelector('[data-hook=level] span').innerHTML = this.stage;
        document.querySelector('[data-hook=next]').classList.toggle('active', stored > stage)

        var done = this.success.bind(this);
        var cartman = [
            {}, {cadmiumyellow: true}, {bondiblue: true}, {},
            {candyapplered: true}, {champagne: true}, {champagne: true}, {candyapplered: true},
            {candyapplered: true}, {candyapplered: true}, {candyapplered: true}, {candyapplered: true},
            {braken: true}, {candyapplered: true}, {candyapplered: true}, {braken: true}
        ];
        var kenny = [
            {safetyorange: true}, {safetyorange: true}, {safetyorange: true}, {safetyorange: true},
            {safetyorange: true}, {braken: true}, {champagne: true}, {safetyorange: true},
            {safetyorange: true}, {safetyorange: true}, {safetyorange: true}, {safetyorange: true},
            {braken: true}, {braken: true}, {braken: true}, {braken: true},
        ];
        var kyle = [
            {kellygreen: true}, {islamicgreen: true}, {islamicgreen: true}, {kellygreen: true},
            {kellygreen: true}, {champagne: true}, {champagne: true}, {kellygreen: true},
            {safetyorange: true}, {safetyorange: true}, {safetyorange: true}, {safetyorange: true},
            {}, {darkgreen: true}, {darkgreen: true}, {}
        ]

        switch (this.stage) {
            case 1:
                // add a class to one el
                var match = function() {
                    var li = document.querySelector('.board li');
                    return li.classList.contains('cadmiumyellow');
                }
                new Manual('Sélection d\'un élément',  "Ajouter la classe <code>cadmiumyellow</code> au premier <code>li</code> contenu dans <code>ul.board</code>.<br><br>La méthode <code>document.querySelector</code> peut être utilisée avec un sélecteur css pour récupérer un élément. Cet élément dispose d'un attribut <code>classList</code> qui permet de modifier ses classes css.");
                this.board = new Board(cartman, { done: done, match: match, reorder: true });
                document.querySelector('[data-hook=previous]').classList.remove('active');
            break;
            case 2:
                // add a class to several els
                var match = function() {
                    var braken = document.querySelectorAll('.board li.braken');
                    var candyapplered = document.querySelectorAll('.board li.candyapplered');
                    return braken.length === 0 && candyapplered.length === 10;
                }
                new Manual('Sélection de plusieurs éléments',  "Supprimer la classe <code>braken</code> des éléments qui la possède, et remplacer la par <code>candyapplered</code>.<br><br>La méthode <code>document.querySelectorAll</code> peut être utilisée pour récupérer une liste d'éléments.");
                this.board = new Board(cartman, { done: done, match: match, reorder: true });
            break;
            case 3:
                // add an event listener
                var match = function() {
                    var li = document.querySelector('.board li.cadmiumyellow');
                    var basic = li.className === 'cadmiumyellow';
                    li.click();
                    return basic && li.className === 'bondiblue';
                }
                new Manual('Écouteur d\'événements',  "Ajouter un écouteur d'événement sur le premier élément doté de la classe <code>cadmiumyellow</code>, et, au clic, remplacer cette classe par <code>bondiblue</code>.<br><br>La méthode <code>addEventListener</code> peut être utilisée sur un élément pour l'abonner aux événements utilisateur comme <code>click</code>.");
                this.board = new Board(cartman, { done: done, match: match });
            break;
            case 4:
                // add an event listener and select again
                var match = function() {
                    var li = document.querySelector('.board li.candyapplered');
                    li.click();
                    return 16 === document.querySelectorAll('.board li.candyapplered').length;
                }
                new Manual('Écouteur d\'événements',  "Ajouter un écouteur d'événement sur le premier élément doté de la classe <code>candyapplered</code>, et, au clic, remplacer la classe de tous les <code>li</code> de <code>ul.board</code> par <code>candyapplered</code>.");
                this.board = new Board(cartman, { done: done, match: match });
            break;
            case 5:
                // add two event listeners
                var match = function() {
                    var lis = document.querySelectorAll('.board li.champagne');
                    var braken = document.querySelectorAll('.board li.braken');
                    var basic = lis.length === 2 && braken.length === 2;

                    for (var i = 0; i < lis.length; i++)
                        lis[i].click();

                    var braken = document.querySelectorAll('.board li.braken');
                    return basic && braken.length === 4;
                }
                new Manual('Écouteur d\'événements',  "Ajouter un écouteur d'événement sur tous les éléments dotés de la classe <code>champagne</code>, et, au clic, remplacer cette classe par <code>braken</code>.");
                this.board = new Board(cartman, { done: done, match: match });
            break;
            case 6:
                // state
                var match = function() {
                    var lib = document.querySelector('.board li.braken');
                    var lic = document.querySelector('.board li.champagne');

                    var basic = true
                    lib.click();
                    basic = basic && lib.className === 'champagne' && lic.className === 'braken';
                    lic.click();
                    basic = basic && lib.className === 'braken' && lic.className === 'champagne';
                    lic.click();
                    basic = basic && lib.className === 'champagne' && lic.className === 'braken';
                    if (basic) {
                        for (var i = 0; i < 20; i ++)
                            setTimeout(function() { lic.click(); }, 100 * i);
                    }
                    return basic;
                }
                new Manual('Échange de classes',  "Ajouter un écouteur d'événement sur le premier élément doté de la classe <code>braken</code> et le premier doté de la classe <code>champagne</code>, et, au clic sur l'un des deux, intervertir leurs classes.");
                this.board = new Board(kenny, { done: done, match: match });
            break;
            case 7:
                // state
                var match = function() {
                    var li = document.querySelector('.board li.champagne');

                    var basic = true
                    li.click();
                    basic = basic && li.className === 'champagne';
                    li.click();
                    basic = basic && li.className === 'champagne';
                    li.click();
                    basic = basic && li.className === 'braken';
                    li.click();
                    basic = basic && li.className === 'braken';
                    return basic;
                }
                new Manual('Mémorisation d\'état',  "Ajouter un écouteur d'événement sur le premier élément doté de la classe <code>champagne</code>, et, après 3 clics répétés sur celui-ci, remplacer sa classe par <code>braken</code>.");
                this.board = new Board(kenny, { done: done, match: match });
            break;
            case 8:
                // state
                var match = function() {
                    var lis = document.querySelectorAll('.board li.braken');

                    var basic = true;
                    basic = basic && lis[0].className === 'braken';
                    lis[0].click();
                    lis[0].click();
                    lis[0].click();
                    return lis[0].className === 'champagne';
                }
                new Manual('Mémorisation d\'état',  "Ajouter un écouteur d'événement sur tous les éléments dotés de la classe <code>braken</code>, et, après 3 clics répétés sur n'importe lequel d'entre eux, remplacer sa classe par <code>champagne</code>.");
                this.board = new Board(kenny, { done: done, match: match });
            break;
            case 9:
                // add el
                var match = function() {
                    var basic = true;
                    var lis = document.querySelectorAll('.board li');
                    basic = basic && 16 === lis.length;
                    kyle.forEach(function(value, i) {
                        if (i === 12 || i === 15)
                            basic = basic && lis[i].className === '';
                        if (i === 13 || i === 14)
                            basic = basic && lis[i].classList.contains('darkgreen')
                    });
                    return basic;
                }
                new Manual('Ajout d\'éléments à la fin',  "Ajouter 4 <code>li</code> à la suite des <code>li</code> contenus par <code>ul.board</code> avec les deux du milieu dotés de la classe <code>darkgreen</code>.");
                this.board = new Board(kyle.slice(0, 12), { done: done, match: match, reorder: true });
            break;
            case 10:
                // add el
                var match = function() {
                    var basic = true;
                    var lis = document.querySelectorAll('.board li');
                    basic = basic && 16 === lis.length;
                    kyle.forEach(function(value, i) {
                        if (i >= 8 && i <= 11)
                            basic = basic && lis[i].classList.contains('safetyorange')
                    });
                    return basic;
                }
                new Manual('Ajout d\'éléments au milieu',  "Ajouter 4 <code>li</code> après le huitième <code>li</code> de <code>ul.board</code> tous dotés de la classe <code>safetyorange</code>.");
                this.board = new Board(kyle.slice(0, 8).concat(kyle.slice(12, 16)), { done: done, match: match, reorder: true });
            break;
            case 11:
                // shuffle
                var match = function() {
                    var basic = true;
                    var lis = document.querySelectorAll('.board li');
                    lis[0].click();
                    lis[1].click();
                    lis[1].click();
                    lis[2].click();
                    kyle.forEach(function(value, i) {
                        if (i === 0 || i === 1)
                            basic = basic && lis[i].classList.contains('islamicgreen');
                        if (i === 2 || i === 3)
                            basic = basic && lis[i].classList.contains('kellygreen');
                    });
                    return basic;
                }
                new Manual('Invertion de deux éléments',  "Mémoriser lorsqu'un <code>li</code> de <code>ul.board</code> est cliqué, et, lorsqu'un second l'est à son tour, intervertir les classes de ces élements.");
                this.board = new Board(kyle, { done: done, match: match });
            break;
            case 12:
                // dataset
                var match = function() {
                    var lis = document.querySelectorAll('.board li');
                    lis[2].click();
                    lis[4].click();
                    lis[6].click();
                    lis[4].click();

                    return lis[2].dataset.value === "0" &&
                        lis[4].dataset.value === "1" &&
                        lis[6].dataset.value === "2";
                }
                new Manual('Attribut data-*',  "À chaque clic sur un <code>li</code> de <code>ul.board</code>, ajouter un attribut <code>data-value</code> sur cet élément avec le nombre d'éléments sélectionnés jusque là.<br><br>Un élément ne peut être sélectionné deux fois.");
                this.board = new Board(kyle, { done: done, match: match, reorder: true });
            break;

            default:
                document.querySelector('[data-hook=level] span').innerHTML = '✓';
                document.querySelector('[data-hook=level]').classList.add('success');
                document.querySelector('[data-hook=next]').classList.remove('active');
                new Manual('', '<iframe width="220" height="220" src="https://www.youtube.com/embed/iSBBsUld8zM" frameborder="0" allowfullscreen></iframe>');
                this.board = {};
        }
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min || 99)) + (min || 1);
    }
    randomize() {
        var array = [].slice.call(arguments);
        return array[Math.floor(Math.random() * array.length)];
    }
    next() {
        if (!document.querySelector('[data-hook=next]').classList.contains('active')) return;

        window.location.hash = ++this.stage;
        localStorage.setItem('stage-2', Math.max(this.stage, localStorage.getItem('stage-2')));
        window.location.reload();
    }
    previous() {
        if (this.stage === 1) return;

        window.location.hash = --this.stage;
        window.location.reload();
    }
    start() {
        this.board.start();
    }
    success() {
        document.querySelector('[data-hook=next]').classList.add('active');
        document.querySelector('[data-hook=level]').classList.add('success');
    }
    reset() {
        window.location.reload();
    }
}

/* let's go, batteries included */
var level = new Level();

document.body.addEventListener('keyup', function(e) {
    if (e.which === 13)
        level.start();
    if (e.which === 27)
        level.reset();
    if (e.which === 39)
        level.next();
    if (e.which === 37)
        level.previous();
});

document.querySelector('[data-hook=start]').addEventListener('click', function(e) {
    e.preventDefault();
    level.start();
});
document.querySelector('[data-hook=reset]').addEventListener('click', function(e) {
    e.preventDefault();
    level.reset();
});
document.querySelector('[data-hook=next]').addEventListener('click', function(e) {
    e.preventDefault();
    level.next();
});
document.querySelector('[data-hook=previous]').addEventListener('click', function(e) {
    e.preventDefault();
    level.previous();
});
