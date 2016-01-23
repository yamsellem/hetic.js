"use strict";

var $ = require('jquery');
var basket = require('./basket');

$(function() {
    var selected = [];

    $('img').on('click', function(e) {
        var isSelected = $(e.currentTarget).hasClass('selected');

        if (!isSelected && (selected.length >= 8 || basket.fruitCount(selected) >= 4 || basket.vegetableCount(selected) >= 4))
            return;

        $(e.currentTarget).toggleClass('selected');
        var name = $(e.currentTarget).data('name');
        basket.toggleValue(selected, name);

        var items = '';
        for (var i = 0; i < selected.length; i++)
            items += '<li>' + selected[i] + '</li>';
        $('.items').html(items);

        $('p').html(basket.computePrice(selected) + '$');
    });

    var all = $('img').toArray().reduce(function(memo, item) {
        memo.push($(item).data('name'));
        return memo;
    }, []);

    $('input').on('keyup', function() {
        var search = this.value;
        var results = basket.search(all, search)

        $('img').each(function() {
            if (results.indexOf($(this).data('name')) !== -1)
                $(this).fadeIn();
            else
                $(this).fadeOut();
        })
    });
});
