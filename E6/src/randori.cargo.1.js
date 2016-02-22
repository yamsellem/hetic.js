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
    var $img = $('<img>').attr('src', './assets/' + box.name + '.png');

    var bottom = this.bottom + 45 * (this.items % 3);
    var left = this.left + 45 * parseInt(this.items / 3);
    $img.css({'bottom': bottom, 'left': left});

    $('.cargo').append($img);
    this.items++;
};

Cargo.prototype.render = function() {
    $('.cargo').html('');
    this.items = 0;

    for (var i = 0; i < this.boxes.length; i++)
        this.renderItem(this.boxes[i]);
};

Cargo.prototype.deliver = function(place) {
    for (var i = this.boxes.length - 1; i >= 0; i--) {
        var box = this.boxes[i];
        if (box.destination === place)
            this.boxes.splice(i, 1);
    }

    this.render();
};

$(function() {
    var cargo = new Cargo();

    cargo.store({name: 'clothes', destination: 'Nice'});
    cargo.store({name: 'clothes', destination: 'Palermo'});
    cargo.store({name: 'equipment', destination: 'Palermo'});
    cargo.store({name: 'equipment', destination: 'Tripoli'});
    cargo.store({name: 'fruits', destination: 'Tripoli'});
    cargo.store({name: 'fruits', destination: 'Dubrovnik'});
    cargo.store({name: 'vegetables', destination: 'Dubrovnik'});

    var cities = ['Nice', 'Palermo', 'Tripoli', 'Dubrovnik'];
    $('.cargo').on('click', function() {
        cargo.deliver(cities.pop());
    });
});
