// step 1
robot.move();
robot.move();
robot.turn('left')
robot.move();
robot.move();
robot.turn('left')
robot.move();
robot.move();
robot.light();
// step 2
robot.turn('left')
robot.move();
robot.turn('left')
robot.move();
robot.light();
robot.move();
robot.move();
robot.turn('left')
robot.move();
robot.move();
robot.light();
// step 3
robot.move();
var x = robot.learn();
robot.move();
robot.light(x);
// step 4
robot.move();
var y = robot.learn();
robot.turn('left');
robot.move();
robot.turn('left');
robot.move();
var x = robot.learn();
robot.turn('left');
robot.turn('left');
robot.move();
var secret = x + y;
robot.light(secret);
// step 5: 'hi', 'paul' -> 'hi paul'
var secret = x + ' ' + y;
// step 6: 33, 2 -> 16
var secret = parseInt(x / y, 10);
// step 7: 3, 7 -> 7
var secret = Math.max(x, y);
// step 8
var secret;
if (x.length > y.length)
    secret = x;
else
    secret = y;
// step 9
if (x + y > 100) {
    secret = true;
} else {
    secret = false;
}
// step 10
if (x > 10 && y > 10) {
    secret = true;
} else {
    secret = false;
}
// step 11
if (x > 10 || y > 10) {
    secret = true;
} else {
    secret = false;
}
// step 12
var secret = '';
for (var i = 0; i < x; i++) {
    secret += y;
}
// step 13
var secret = '';
for (var i = 0; i < x.length; i++) {
    var char = x.charAt(i);
    if (char !== 'e') {
        secret += char;;
    }
}
