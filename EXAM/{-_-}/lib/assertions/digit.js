'use strict';

const Nightmare = require('nightmare');
const logger = require('../logger');

const runner = (path) => {
    const nightmare = Nightmare({ show: false, typeInterval: 1 });

    return nightmare
    .goto(path);
}

const assert = (runner) => {
    return runner
    .evaluate(() => parseInt(document.querySelector('input').value, 10))
    .end()
    .catch((error) => {
        console.log(error);
        return {};
    });
}

const assertLis = (runner) => {
    return runner
    .evaluate(() => {
        let lis = document.querySelectorAll('li');
        let actives = [];
        for (let i = 0; i < lis.length; i++) {
            actives[i] = lis[i].classList.contains('active');
        }
        return actives;
    })
    .end()
    .catch((error) => {
        console.log(error);
        return {};
    });
}

const equals = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
}

const score = (path) => {
    let score = 0;

    return Promise.all([
        assert(
            runner(path)
            .click('#plus')
        )
        .then(value => {
            const valid = value === 1;
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(a) Cliquer sur #plus doit afficher 1 dans #count");
        }), 
        assert(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#plus')
        )
        .then((value) => {
            const valid = value === 3;
            if (valid)
                score += 1;

            logger.point(valid, 1, "(a) Cliquer trois fois sur #plus doit afficher 3 dans #count");
        }), 
        assert(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#multiplied')
            .click('#multiplied')
        )
        .then((value) => {
            const valid = value === 8;
            if (valid)
                score += 1;

            logger.point(valid, 1, "(b) Cliquer deux fois sur #plus puis deux fois sur #multiplied doit afficher 8 dans #count");
        }), 
        assert(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#multiplied')
            .click('#plus')
        )
        .then((value) => {
            const valid = value === 5;
            if (valid)
                score += 1;

            logger.point(valid, 1, "(b) Cliquer deux fois sur #plus, une fois sur #multiplied, puis une fois sur #plus doit afficher 5 dans #count");
        }), 
        assertLis(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#plus')
        )
        .then((actives) => {
            const valid = equals(actives, [false, false, false]);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(c) Cliquer trois fois sur #plus, ne doit ajouter la classe #active à aucun élément");
        }), 
        assertLis(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#plus')
            .click('#plus')
        )
        .then((actives) => {
            const valid = equals(actives, [true, false, false]);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(c) Cliquer quatre fois sur #plus, doit ajouter la classe #active au premier élément");
        }), 
        assertLis(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#plus')
            .click('#multiplied')
            .click('#multiplied')
            .click('#plus')
        )
        .then((actives) => {
            const valid = equals(actives, [true, true, false]);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(d) Cliquer trois fois sur #plus, deux sur #multiplied puis une sur #plus, doit ajouter la classe #active aux deux premiers éléments");
        }), 
        assertLis(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#plus')
            .click('#multiplied')
            .click('#multiplied')
            .click('#plus')
            .click('#plus')
            .click('#plus')
        )
        .then((actives) => {
            const valid = equals(actives, [true, true, true]);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(e) Cliquer trois fois sur #plus, deux sur #multiplied puis trois sur #plus, doit ajouter la classe #active aux trois éléments");
        }), 
        assertLis(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#plus')
            .click('#multiplied')
            .click('#multiplied')
            .click('#multiplied')
        )
        .then((actives) => {
            const valid = equals(actives, [true, true, false]);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(e) Cliquer trois fois sur #plus puis trois sur #multiplied puis trois sur #plus, doit ajouter la classe #active aux deux premiers éléments");
        })
    ])
    .then(() => score);
};

module.exports = score;
