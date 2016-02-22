"use strict";

var $ = require('jquery');

var Cargo = function() {};

Cargo.prototype.store = function(box) {};

$(function() {
    var cargo = new Cargo();

    cargo.store({name: 'clothes', destination: 'Nice'});
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
