"use strict";

var assert = require('chai').assert;

var module = require('../lib/basket');

describe('Basket', function() {
    it('should count intersect of 2 arrays', function() {
        var count = module.intersect(['apple', 'tomato', 'pear'], ['apple', 'pear', 'banana']);
        assert.equal(count, 2);
    });

    it('should count fruits', function() {
        var count = module.fruitCount(['apple', 'tomato', 'pear']);
        assert.equal(count, 2);
    });

    it('should toggle value in', function() {
        var toggled = module.toggleValue(['apple', 'tomato'], 'pear');
        assert.deepEqual(toggled, ['apple', 'tomato', 'pear']);
    });

    it('should toggle value out', function() {
        var toggled = module.toggleValue(['apple', 'tomato', 'pear'], 'pear');
        assert.deepEqual(toggled, ['apple', 'tomato']);
    });

    it('should discount be -0.3 for 4 fruit', function() {
        var discount = module.computeDiscount(['apple', 'coconut', 'pear', 'banana'], 4, 0);
        assert.equal(discount, -0.3);
    });

    it('should price be 0.5 for 1 fruit', function() {
        var price = module.computePrice(['apple']);
        assert.equal(price, 0.5);
    });

    it('should price be 0.3 for 1 vegetable', function() {
        var price = module.computePrice(['tomato']);
        assert.equal(price, 0.3);
    })

    it('should price be 1.2 for 3 fruits', function() {
        var price = module.computePrice(['apple', 'coconut', 'pear']);
        assert.equal(price, 1.2);
    });

    it('should price be 1.7 for 4 fruits', function() {
        var price = module.computePrice(['apple', 'coconut', 'pear', 'banana']);
        assert.equal(price, 1.7);
    });

    it('should search 1 letter', function() {
        var results = module.search(['apple', 'coconut', 'pear', 'tomato'], 'p');
        assert.deepEqual(results, ['apple', 'pear']);
    });

    it('should search :fruits', function() {
        var results = module.search(['apple', 'coconut', 'pear', 'tomato'], ':fruits');
        assert.deepEqual(results, ['apple', 'coconut', 'pear']);
    });
});
