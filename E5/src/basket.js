"use strict";

var M = require('./M');

var basket = {
    fruits: ['apple', 'banana', 'coconut', 'grape', 'lemon', 'pear', 'watermelon'],
    vegetables: ['broccoli', 'carrot', 'cucumber', 'eggplant', 'lettuce', 'onion', 'pepper', 'radish', 'tomato']
};

basket.search = function(array, search) {
    if (search === ':fruits')
        return array.filter(function(item) {
            return this.fruits.indexOf(item) !== -1;
        }.bind(this));

    return array.filter(function(item) {
        return item.indexOf(search) !== -1;
    });
};

basket.intersect = function(first, second) {
    return first.filter(function(item) {
        return second.indexOf(item) !== -1;
    }).length;
};


basket.fruitCount = function(array) {
    return this.intersect(array, this.fruits);
};

basket.vegetableCount = function(array) {
    return this.intersect(array, this.vegetables);
};

basket.toggleValue = function(array, name) {
    if (array.indexOf(name) !== -1)
        array.splice(array.indexOf(name), 1);
    else
        array.push(name);
    return array;
};

basket.computeDiscount = function(selected, fruits, vegetables) {
    var discount = 0;

    if (fruits >= 3)
        discount = M.add(discount, -0.3);
    if (vegetables >= 3)
        discount = M.add(discount, -0.2);
    if (fruits >= 2 && vegetables >= 2)
        discount = M.add(discount, -0.6);

    return discount;
};

basket.computePrice = function(selected) {
    var fruits = this.fruitCount(selected);
    var vegetables = this.vegetableCount(selected);
    var other = Math.max(0, selected.length - fruits - vegetables);

    var price = 0;
    price = M.add(price, M.multiply(0.5, fruits));
    price = M.add(price, M.multiply(0.3, vegetables));
    price = M.add(price, M.multiply(1, other));

    var discount = this.computeDiscount(selected, fruits, vegetables);
    price = M.add(price, discount);

    return price;
};

module.exports = basket;
