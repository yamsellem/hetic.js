/* eslint-env es6 */
class Board {
    constructor(squares) {
        this.squares = squares;

        this.starter = new Promise(function(resolve) {
            this.start = resolve;
        }.bind(this));
    }
    isFree(x, y) {
        if (y < 1 || y > 3 || x < 1 || x > 3) return;

        return !this.square(x, y).empty;
    }
    light(robot, answer, done) {
        var clone = Object.assign({}, robot);
        this.delay().then(function() {
            var square = this.square(clone.x, clone.y);
            if (square.goal && (!square.secret || (typeof square.secret === 'function' ? square.secret(answer) : square.secret === answer))) {
                delete square.goal;
                square.light = true;
                this.render(clone);

                if (!this.squares.filter(function(square) { return square.goal; }).length)
                    done();
            }
        }.bind(this));
    }
    learn(robot) {
        if (!this.square(robot.x, robot.y).goal)
            return this.square(robot.x, robot.y).secret;
    }
    square(x, y) {
        return this.squares[x + (y - 1) * 3 - 1];
    }
    delayedRender(robot) {
        var clone = Object.assign({}, robot);
        this.delay().then(function() {
            this.render(clone);
        }.bind(this));
    }
    render(robot) {
        if (!robot) return;

        var ul = document.querySelector('ul.board');
        ul.innerHTML = '';
        this.squares.forEach(function(square) {
            var li = document.createElement('li');
            li.className = 'square';
            for (var property in square)
                li.className += ' ' + property;
            ul.appendChild(li);
        });

        var div = document.createElement('div');
        div.className = `robot ${robot.d}`;
        var lis = ul.querySelectorAll('li')
        lis[robot.x + (robot.y - 1) * 3 - 1].appendChild(div);
    }
    delay() {
        return this.starter.then(function() {
            this.count = this.count ? this.count + 1 : 1;
            return new Promise(function(resolve) {
                setTimeout(resolve, this.count * 30); /* use 300 instead */
            }.bind(this));
        }.bind(this));
    }
}

class Robot {
    constructor(x, y, d, options) {
        this._x = this.x = x;
        this._y = this.y = y;
        this._d = this.d = d;

        this.board = options.board;
        this.done = options.done;

        this.board.render(this);
    }
    move() {
        switch(this.d) {
            case 'top':
                if (this.isSquareFree(this.x-1, this.y))
                    this.x--;
                break;
            case 'right':
                if (this.isSquareFree(this.x, this.y-1))
                    this.y--;
                break;
            case 'bottom':
                if (this.isSquareFree(this.x+1, this.y))
                    this.x++;
                break;
            case 'left':
                if (this.isSquareFree(this.x, this.y+1))
                    this.y++;
                break;
        }

        this.render(this);
    }
    turn(direction) {
        if (!['right', 'left'].includes(direction)) return;

        switch(this.d) {
            case 'top': this.d = direction === 'right' ? 'right' : 'left'; break;
            case 'right': this.d = direction === 'right' ? 'bottom' : 'top'; break;
            case 'bottom': this.d = direction === 'right' ? 'left' : 'right'; break;
            case 'left': this.d = direction === 'right' ? 'top' : 'bottom'; break;
        }

        this.render(this);
    }
    light(answer) {
        this.board.light(this, answer, this.done);
    }
    learn() {
        return this.board.learn(this);
    }
    isSquareFree(x, y) {
        return this.board.isFree(x, y);
    }
    render() {
        this.board.delayedRender(this);
    }
    start() {
        this.board.start();
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
        var stored = localStorage.getItem('stage') || 1;
        if (stage > stored) {
            window.location.hash = stored;
            window.location.reload();
            return;
        }

        this.stage = stage;
        document.querySelector('[data-hook=level] span').innerHTML = this.stage;
        document.querySelector('[data-hook=next]').classList.toggle('active', stored > stage)

        var done = this.success.bind(this);

        switch (this.stage) {
            case 1:
                // method calls
                new Manual('Un peu de lumière',  "Pour allumer l'ampoule (●), modifier la balise &lt;script&gt; en invoquant les méthodes <code>robot.move()</code>, <code>robot.turn('left')</code> et <code>robot.light()</code>. <br><br>Les flèches ⇥ et ↩ en bas de page permettent de lancer le robot, ou de réésayer si cela échoue.")
                var board = new Board([
                    {}, {empty:true}, {goal:true},
                    {}, {empty:true}, {},
                    {}, {}, {}
                ]);
                window.robot = new Robot(1, 1, 'left', { done: done, board: board });
                document.querySelector('[data-hook=previous]').classList.remove('active');
            break;
            case 2:
                // method calls
                new Manual('Plus de lumière',  "Pour allumer les deux ampoules (●), modifier l'ordre d'appel des méthodes <code>robot.move()</code>, <code>robot.turn('left')</code> et <code>robot.light()</code>.")
                var board = new Board([
                    {}, {}, {goal:true},
                    {}, {empty:true}, {},
                    {}, {goal:true}, {}
                ]);
                window.robot = new Robot(1, 2, 'top', { done: done, board: board });
            break;
            case 3:
                // variable
                var x = this.random();
                new Manual('Un secret',  "Pour allumer l'ampoule (●), il est nécessaire de lui communiquer le secret retourné par le coffre (◇) en invoquant la méthode <code>robot.learn()</code> sur ce dernier, en stockant son résultat et en le transmettant à l'ampoule.")
                var board = new Board([
                    {empty: true}, {}, {empty: true},
                    {empty: true}, {step:true,secret:x}, {empty:true},
                    {empty: true}, {goal:true,secret:x}, {empty: true}
                ]);
                window.robot = new Robot(2, 1, 'left', { done: done, board: board });
            break;
            case 4:
                // numbers addition
                var x = this.random();
                var y = this.random();
                new Manual('Deux secrets',  "Les deux secrets retournés (◇) par les coffres sont des nombres à additioner et à transmettre à l'ampoule pour l'allumer.")
                var board = new Board([
                    {}, {step: true, secret: x}, {empty: true},
                    {step: true, secret: y}, {goal: true, secret: x + y}, {empty: true},
                    {empty: true}, {empty: true}, {empty: true}
                ]);
                window.robot = new Robot(1, 1, 'left', { done: done, board: board });
            break;
            case 5:
                // string concatenation
                var x = this.randomize('purple', 'sapphire', 'blue', 'red');
                var y = this.randomize('skate', 'rollers', 'submarine');
                var secret = function(answer) { return answer === x + ' ' + y || answer === y + ' ' + x; };
                new Manual('Deux mots',  "Les deux secrets retournés (◇) par les coffres sont des chaînes de caractères à concaténer (séparée d'un espace) et à transmettre à l'ampoule pour l'allumer.")
                var board = new Board([
                    {}, {step: true, secret: x}, {empty: true},
                    {step: true, secret: y}, {goal: true, secret: secret}, {empty: true},
                    {empty: true}, {empty: true}, {empty: true}
                ]);
                window.robot = new Robot(1, 1, 'left', { done: done, board: board });
            break;
            case 6:
                // division
                var x = this.random(1, 50);
                var y = this.random(51, 99);
                var secret = function(answer) { return answer === parseInt(x / y, 10) || answer === parseInt(y / x, 10); };
                new Manual('Deux nombres',  "Les deux secrets retournés (◇) par les coffres sont des nombres à diviser l'un par l'autre (arrondi à l'entier inférieur) et à transmettre à l'ampoule pour l'allumer.")
                var board = new Board([
                    {}, {step: true, secret: x}, {empty: true},
                    {step: true, secret: y}, {goal: true, secret: secret}, {empty: true},
                    {empty: true}, {empty: true}, {empty: true}
                ]);
                window.robot = new Robot(1, 1, 'left', { done: done, board: board });
            break;
            case 7:
                // conditionnal or Math static
                var x = this.random();
                var y = this.random();
                new Manual('Le plus grand',  "Les deux secrets retournés (◇) par les coffres sont des nombres à comparer dont le plus grand est à transmettre à l'ampoule pour l'allumer.")
                var board = new Board([
                    {}, {step: true, secret: x}, {empty: true},
                    {step: true, secret: y}, {goal: true, secret: Math.max(x, y)}, {empty: true},
                    {empty: true}, {empty: true}, {empty: true}
                ]);
                window.robot = new Robot(1, 1, 'left', { done: done, board: board });
            break;
            case 8:
                // conditonnal
                var x = this.randomize('purple', 'sapphire', 'blue', 'red');
                var y = this.randomize('skate', 'rollers', 'submarine');
                var secret = function(answer) { return answer === x.length > y.length ? x : y; };
                new Manual('Le plus grand (bis)',  "Les deux secrets retournés (◇) par les coffres sont des chaînes de caractères à comparer dont celle avec le plus grand nombre de caractères est à transmettre à l'ampoule pour l'allumer.")
                var board = new Board([
                    {}, {step: true, secret: x}, {empty: true},
                    {step: true, secret: y}, {goal: true, secret: secret}, {empty: true},
                    {empty: true}, {empty: true}, {empty: true}
                ]);
                window.robot = new Robot(1, 1, 'left', { done: done, board: board });
            break;
            case 9:
                // loop
                var x = this.randomize(3, 5, 8, 13);
                var y = this.randomize('skate', 'rollers', 'submarine');
                var secret = function(answer) { var result = ''; for(var i = 0; i < x; i++) result+=y; return answer === result; };
                new Manual('Écho',  "Les deux secrets retournés (◇) par les coffres sont un nombre et une chaîne de caractères qu'il faut répéter autant de fois que le nombre l'indique (ex. 3, skate -> skateskateskate) et transmettre à l'ampoule pour l'allumer.")
                var board = new Board([
                    {}, {step: true, secret: x}, {empty: true},
                    {step: true, secret: y}, {goal: true, secret: secret}, {empty: true},
                    {empty: true}, {empty: true}, {empty: true}
                ]);
                window.robot = new Robot(1, 1, 'left', { done: done, board: board });
            break;
            case 10:
                // loop & conditionnal
                var x = this.randomize('skate', 'rollers', 'submarine');
                var secret = function(answer) { return answer === x.split('').reverse().join('').replace(/[aeiou]+/g, ''); };
                new Manual('Écho (bis)',  "Le secret retourné (◇) par le coffre est une chaîne de caractère qu'il faut mettre à l'envers et dont il faut retirer les voyelles puis transmettre à l'ampoule pour l'allumer.")
                var board = new Board([
                    {}, {step: true, secret: x}, {empty: true},
                    {step: true}, {goal: true, secret: secret}, {empty: true},
                    {empty: true}, {empty: true}, {empty: true}
                ]);
                window.robot = new Robot(1, 1, 'left', { done: done, board: board });
            break;
            case 11:
                // loop & condtionnal
                var x = this.random(5, 9);
                var secret = function(answer) { var result = 0; for(var i = 1; i <= x; i++) if (i % 2 !== 0) result += i; return answer === result; };
                new Manual('Un sur deux',  "Le secret retourné (◇) par le coffre est un nombre auquel il faut additioner tous les nombres de 1 jusqu'à lui sans les pairs (ex. 7 -> 7+5+3+1) puis transmettre à l'ampoule pour l'allumer.")
                var board = new Board([
                    {}, {step: true}, {empty: true},
                    {step: true, secret: x}, {goal: true, secret: secret}, {empty: true},
                    {empty: true}, {empty: true}, {empty: true}
                ]);
                window.robot = new Robot(1, 1, 'left', { done: done, board: board });
            break;
            // case 12:
            //     // array
            //     var x = this.xRandomize(this.random(5, 9), 'skate', 'rollers', 'submarine')
            //     var y = this.randomize(x);
            //     var secret = function(answer) { return answer === x.filter(function(item) { return item === y; }).length; };
            //     new Manual('?',  "?")
            //     var board = new Board([
            //         {}, {step: true, secret: x}, {empty: true},
            //         {step: true}, {goal: true, secret: secret}, {empty: true},
            //         {empty: true}, {empty: true}, {empty: true}
            //     ]);
            //     window.robot = new Robot(1, 1, 'left', { done: done, board: board });
            // break;
            default:
                document.querySelector('[data-hook=level] span').innerHTML = '✓';
                document.querySelector('[data-hook=level]').classList.add('success');
                document.querySelector('[data-hook=next]').classList.remove('active');
                new Manual('Nickel chrome',  "C'est tout bon.");
                window.robot = {};
        }
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min || 99)) + (min || 1);
    }
    randomize() {
        var array = [].slice.call(arguments);
        return array[Math.floor(Math.random() * array.length)];
    }
    xRandomize(times) {
        var result = [];
        var values = [].slice.call(arguments).slice(1);
        for (var i = 0; i < times; i++)
            result = result.concat(this.randomize.apply(this, values))
        return result;
    }
    next() {
        if (!document.querySelector('[data-hook=next]').classList.contains('active')) return;

        window.location.hash = ++this.stage;
        localStorage.setItem('stage', Math.max(this.stage, localStorage.getItem('stage')));
        window.location.reload();
    }
    previous() {
        if (this.stage === 1) return;

        window.location.hash = --this.stage;
        window.location.reload();
    }
    start() {
        window.robot.start();
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
    if (event.which === 13)
        level.start();
    if (event.which === 27)
        level.reset();
    if (event.which === 39)
        level.next();
    if (event.which === 37)
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
