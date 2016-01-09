$.fn.four = function() {
    var $table = this;
    var grid = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];

    var render = function() {
        $table.html('');
        for (var row of grid) {
            var $tr = $('<tr>');
            for (var column of row) {
                var $td = $('<td>');
                if (column)
                    $td.addClass(column);
                $tr.append($td);
            }
            $table.append($tr);
        }

        var winner = wins(grid);
        if (winner) {
            $table.off('click', 'td');
            $table.parent().append($('<h5>').html(winner + ' wins!'));
        }
    };

    var color = 'red';
    var handleClick = function() {
        $('table').on('click', 'td', function(e) {
            var $index = $(this).parent().children().index(this);
            for (var i = 5; i >= 0; i--) {
                if (!grid[i][$index]) {
                    color = (color === 'yellow' ? 'red' : 'yellow');
                    grid[i][$index] = color;
                    break;
                } else continue;
            }
            render(grid);
        });
    };

    var wins = function() {
        return verticalWinner(grid) + horizontalWinner(grid);
    };

    var verticalWinner = function() {
        var player, count;
        for (var column = 0; column < 7; column++) {
            count = 0;
            for (var row = 5; row >= 0; row--) {
                var color = grid[row][column];
                if (!color) continue;

                if (player === color)
                    count++;
                else
                    count = 1;

                if (count >= 4) return player;
                player = color;
            }
        }
        return '';
    };

    var horizontalWinner = function() {
        var player, count;
        for (var row = 5; row >= 0; row--) {
            count = 0;
            for (var column = 0; column < 7; column++) {
                var color = grid[row][column];
                if (!color) continue;

                if (player === color)
                    count++;
                else
                    count = 1;

                if (count >= 4) return player;
                player = color;
            }
        }
        return '';
    };

    render();
    handleClick();

};
