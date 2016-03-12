"use strict";

var $ = require('jquery');
var moment = require('moment');

var today = moment();
var frFormat = 'DD-MM-YYYY';

var renderDays = function(items) {
    var $ul = $('.right ul');
    for (var item of items) {
        var date = moment(item.date, frFormat);
        if (date.isSame(today, 'day'))
            item.day = 'Today';
        else
            item.day = date.format('dddd');

        var $li = $('<li>');
        $li.html('<span>' + item.day + '</span><span>' + item.temperature + '°</span>');
        $ul.append($li);

        displayOnClick($li, date);
    }
};

var renderDay = function(item) {
    var date = moment(item.date, frFormat);

    var $left = $('.left');
    $left.find('.day').html(date.format('dddd'));
    $left.find('.date').html(date.format('DD'));
    $left.find('.city').html(item.city);

    var $span = $left.find('.temperature span');
    $($span[0]).removeClass().addClass(item.condition).addClass('weather');
    $($span[1]).html(item.temperature + '°');

    location.hash = date.format(frFormat);
};

var displayOnClick = function($li, date) {
    $li.on('click', function() {
        $.ajax('/weather/' + date.format(frFormat)).then(renderDay);
    });
};

var displayed = function() {
    var date = moment(location.hash, frFormat);
    var displayed = date.isValid() ? date : today;
    return displayed.format(frFormat);
};

var initialize = function() {
    $.ajax('/weather').then(renderDays);
    $.ajax('/weather/' + displayed()).then(renderDay);

    var $form = $('form');
    $('.plus').on('click', function() {
        $form.removeClass('hidden');
    });

    var $banner = $('.banner');

    // update detailed temperature
    $form.on('submit', function(e) {
        e.preventDefault(); // do not refresh the page

        var serialized = $form.serializeArray()[0];
        var data = {};
        data[serialized.name] = serialized.value;

        $.ajax('/weather/' + displayed(), {
            method: 'put',
            processData: false,
            contentType: 'application/json',
            data: JSON.stringify(data)
        }).then(function(data) {
            renderDay(data);
            $form.addClass('hidden');
            $banner.addClass('hidden');
        }, function(data) {
            $banner.html(JSON.parse(data.responseText).error).removeClass('hidden');
        });
    });

    $banner.on('click', function() {
        $banner.addClass('hidden');
    })
};

// await for page to be ready
$(initialize);
