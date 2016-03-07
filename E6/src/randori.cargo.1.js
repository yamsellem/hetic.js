"use strict";

var $ = require('jquery');

var Cargo = function() {
    this.bottom = 170;
    this.left = 260;
};

Cargo.prototype.store = function(box) {
    var $img = $('<img>');
    $('.cargo').append($img);

    $img.attr('src', './assets/' + box.name + '.png')
    $img.css('bottom', this.bottom +'px');
    $img.css('left', this.left +'px');
    $img.addClass(box.destination);

    this.bottom += 45;
    if (this.bottom === 305) {
        this.bottom = 170;
        this.left += 45;
    }
};

Cargo.prototype.deliver = function(destination) {
    $('img.' + destination).remove();
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
