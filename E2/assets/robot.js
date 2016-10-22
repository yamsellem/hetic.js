/* eslint-env es6 */
class Board {
    constructor(squares) {
        this.squares = squares;
    }
    isFree(x, y) {
        if (y < 1 || y > 3 || x < 1 || x > 3) return;

        return !this.square(x, y).empty;
    }
    light(robot, answer, done) {
        var clone = Object.assign({}, robot);
        var square = this.square(clone.x, clone.y);
        if (square.goal) {
            delete square.goal;
            square.light = true;
            this.render(clone);
        }
    }
    square(x, y) {
        return this.squares[x + (y - 1) * 3 - 1];
    }
    render(robot) {
        var ul = document.querySelector('ul.board');
        ul.innerHTML = '';
        this.squares.forEach(function(square) {
            var li = document.createElement('li');
            li.className = 'square';
            for (var property in square)
                li.className += ' ' + property;
            ul.appendChild(li);
        });

        if (!robot) return;
        var div = document.createElement('div');
        div.className = `robot ${robot.direction}`;
        var lis = ul.querySelectorAll('li')
        lis[robot.x + (robot.y - 1) * 3 - 1].appendChild(div);
    }
}

/* let's go, batteries included */
document.body.innerHTML = '<ul class="board"></ul>';

var board = new Board([
    {}, {}, {},
    {}, {empty:true}, {},
    {}, {}, {}
]);

board.render();
