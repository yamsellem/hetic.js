"use strict";

var express = require('express'),
    bodyParser = require('body-parser'),
    moment = require('moment'),
    proxy = require('express-http-proxy');

/*
 * Express application
 */
var app = express();
app.use('/public', proxy('localhost:3000')); // serves public files through the same http port
app.use(bodyParser.json()); // middleware to allow req.body to be accessible as json

app.get('/weather', function(req, res) {
    var date = moment();
    var dates = [];

    for (var i = 0; i < 6; i++) {
        dates.push(Weather.of(date));
        date.add(1, 'days');
    }

    res.send(dates);
});

// validation middleware
var validation = function(req, res, next) {
    req.date = moment.utc(req.params.date, 'DD-MM-YYYY');
    if (!req.date.isValid())
        return res.status(412).send({error: 'Invalid date'});

    if (req.body && req.body.temperature && Number.isNaN(parseInt(req.body.temperature)))
        return res.status(412).send({error: 'Invalid temperature'});

    next();
};

app.get('/weather/:date', validation, function(req, res) {
    res.send(Weather.of(req.date, true));
});

app.put('/weather/:date', validation, function(req, res) {
    var number = req.date.format('DD');
    Weather.temperatures[number] = req.body.temperature;

    res.cookie('rememberme', '1');
    res.send(Weather.of(req.date, true));
});

app.listen(4000);
console.log('server listening on 4000');

/*
 * Weather helper object
 */
var Weather = {
    temperatures: {},
    temperature: function(d) {
        if (this.temperatures[d])
            return this.temperatures[d];

        return d % 9 + (d * 3) % 5;
    },
    conditions: ['sun', 'sun', 'sun', 'sunny', 'sunny', 'wind', 'wind', 'rainy', 'thunder'],
    condition: function(d) {
        return this.conditions[d % 9];
    },
    of: function(date, isFull) {
        var number = date.format('DD');
        var weather = {
            city: 'Montreuil',
            date: date.format('DD-MM-YYYY'),
            temperature: this.temperature(number)
        };
        if (isFull)
            weather.condition = this.condition(number);

        return weather;
    }
};
