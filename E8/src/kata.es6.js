"use strict";

// fat arrow
var double = () => {
    return 2;
};

var isOdd = (value) => value % 2 === 0;
console.log(isOdd(7));

// classes
class Pie {
    construstor(fruits, pieces) {
        this.fruits = fruits;
        this.pieces = pieces;
    }
    displayLater() {
        var fn = () => {
            console.log(15);
        }

        setTimeout(fn, 10);
    }
};

class Cake extends Pie {
    constructor(fruits, pieces, iceCream) {
        super(fruits, 20);
        this.iceCream = iceCream;
    }
}

var applePie = new Pie('apple', 8);
var chocolateCake = new Cake('nuts', 'vanilla');

applePie.displayLater();

// let is the new var
for (let i = 0; i < 10; i++)
    setTimeout(() => { console.log(i); }, 10);

// template string
var name = 'Paul', time = 'today';
var text =
`<p>
Hello ${name},
how are you ${time}?
</p>`
console.log(text)
