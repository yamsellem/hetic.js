"use strict";

var $ = require('jquery');

var Cargo = function() {
    this.bottom = 170;
    this.left = 260;
    this.items = 0;
    this.boxes = [];
};

Cargo.prototype.store = function(box) {
    if (this.boxes >= 28)
        return;

    this.renderItem(box);
    this.boxes.push(box);
};

Cargo.prototype.renderItem = function(box) {
    var $img = $('<img>').attr('src', box.image);

    var bottom = this.bottom + 45 * (this.items % 3);
    var left = this.left + 45 * parseInt(this.items / 3);
    $img.css({'bottom': bottom, 'left': left});

    $('.cargo').append($img);

    if (box instanceof Fruit)
        this.items += 3 - (this.items % 3);
    else
        this.items++;
};

Cargo.prototype.render = function() {
    $('.cargo').html('');
    this.items = 0;

    for (var i = 0; i < this.boxes.length; i++)
        this.renderItem(this.boxes[i]);
};

Cargo.prototype.deliver = function(place) {
    var weight = 0;
    var delivered = [];
    for (var i = this.boxes.length - 1; i >= 0; i--) {
        var box = this.boxes[i];
        if (box.destination === place) {
            var removed = this.boxes.splice(i, 1);
            delivered.push(removed.pop());
        }
    }

    this.render();
    return delivered;
};

var Box = function(name, destination, contents) {
    this.name = name;
    this.image = './assets/' + name + '.png';
    this.destination = destination;
    this.contents = contents;
};

Box.prototype.weight = function() {
    return 0.05;
};

var Equipment = function(destination, contents) {
    Box.call(this, 'equipment', destination, contents);
};

var Fruit = function(destination, contents) {
    Box.call(this, 'fruits', destination, contents);
};

Equipment.prototype.weight = function() { return 50; };
Fruit.prototype = Object.create(Box.prototype);

// static method

var Auction = function() {};

Auction.sell = function(place, boxes) {
    this.places = this.places || [];
    var price = 0;

    for (var box of boxes) {
        for (var i = 0; i < box.contents; i++) {
            var market = this.places[place];
            if (!market) {
                market = this.places[place] = {};
                market[box.name] = true;
                price += 10;
            } else if (market[box.name]) {
                price += 8;
            } else {
                market[box.name] = true;
                price += 12;
            }
        }
    }
    return price;
};

$(function() {
    var cargo = new Cargo();

    cargo.store(new Box('clothes', 'Nice', 10));
    cargo.store(new Box('clothes', 'Palermo', 5));
    cargo.store(new Equipment('Palermo', 2));
    cargo.store(new Equipment('Tripoli', 2));
    cargo.store(new Fruit('Tripoli', 50));
    cargo.store(new Fruit('Dubrovnik', 40));
    cargo.store(new Box('vegetables', 'Dubrovnik', 30));

    var cities = ['Nice', 'Palermo', 'Tripoli', 'Dubrovnik'];
    $('.cargo').on('click', function() {
        var city = cities.pop();
        if (!city) return;

        var delivered = cargo.deliver(city);
        var weight = delivered.reduce(function(memo, box) {
            return memo + box.weight();
        }, 0);
        var price = Auction.sell(city, delivered);

        $('.weight').html(city + ', ' + delivered.length + ' boxes, ' + weight + 'Kg, $' + price);
    });
});
