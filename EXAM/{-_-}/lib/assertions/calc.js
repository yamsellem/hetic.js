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
    .evaluate(() => document.querySelector('input').value)
    .end()
    .catch((error) => {
        logger.log(error);
        return {};
    });
}

const score = (path) => {
    let score = 0;

    return Promise.all([
        assert(
            runner(path)
            .click('input[value="9"]')
        )
        .then(value => {
            const valid = (value === '9');
            if (valid)
                score += 1;

            logger.point(valid, 1, "(a) Cliquer sur 9 doit afficher 9 dans l'input .display");
        }),
        assert(
            runner(path)
            .click('input[value="1"]')
            .click('input[value="5"]')
            .click('input[value="4"]')
        )
        .then(value => {
            const valid = (value === '154');
            if (valid)
                score += 2;

            logger.point(valid, 2, "(a) Cliquer sur 1, puis, 5, puis 4, doit afficher 154 dans l'input .display");
        }),
        assert(
            runner(path)
            .click('input[value="1"]')
            .click('input[value="5"]')
            .click('input[value="4"]')
            .click('input[value="+"]')
            .click('input[value="4"]')
            .click('input[value="6"]')
        )
        .then(value => {
            const valid = (value === '154+46');
            if (valid)
                score += 2;

            logger.point(valid, 2, "(b) Cliquer sur 1, puis 5, puis 4, puis +, puis 4, puis 6 doit afficher 154+46 dans l'input .display");
        }),
        assert(
            runner(path)
            .click('input[value="2"]')
            .click('input[value="1"]')
            .click('input[value="-"]')
            .click('input[value="5"]')
        )
        .then(value => {
            const valid = (value === '21-5');
            if (valid)
                score += 1;

            logger.point(valid, 1, "(b) Cliquer sur 2, puis, 1, puis -, puis 5 doit afficher 21-5 dans l'input .display");
        }),
        assert(
            runner(path)
            .click('input[value="1"]')
            .click('input[value="5"]')
            .click('input[value="4"]')
            .click('input[value="+"]')
            .click('input[value="4"]')
            .click('input[value="6"]')
            .click('input[value="="]')
        )
        .then(value => {
            const valid = (value === '200');
            if (valid)
                score += 2;

            logger.point(valid, 2, "(c) Cliquer sur 1, puis 5, puis 4, puis +, puis 4, puis 6, puis = doit afficher 200 dans l'input .display");
        }),
        assert(
            runner(path)
            .click('input[value="2"]')
            .click('input[value="1"]')
            .click('input[value="-"]')
            .click('input[value="5"]')
            .click('input[value="="]')
            .click('input[value="+"]')
            .click('input[value="8"]')
        )
        .then(value => {
            const valid = (value === '16+8');
            if (valid)
                score += 1;

            logger.point(valid, 1, "(d) Cliquer sur 2, puis, 1, puis -, puis 5, puis =, puis +, puis 8 doit afficher 16+8 dans l'input .display");
        }),
        assert(
            runner(path)
            .click('input[value="2"]')
            .click('input[value="1"]')
            .click('input[value="-"]')
            .click('input[value="5"]')
            .click('input[value="="]')
            .click('input[value="+"]')
            .click('input[value="8"]')
            .click('input[value="="]')
        )
        .then(value => {
            const valid = (value === '24');
            if (valid)
                score += 1;

            logger.point(valid, 1, "(d) Cliquer sur 2, puis, 1, puis -, puis 5, puis =, puis +, puis 8, puis = doit afficher 24 dans l'input .display");
        }),
        assert(
            runner(path)
            .click('input[value="2"]')
            .click('input[value="1"]')
            .click('input[value="+"]')
            .click('input[value="5"]')
            .click('input[value="="]')
            .click('input[value="-"]')
            .click('input[value="8"]')
            .click('input[value="="]')
            .click('input[value="+"]')
            .click('input[value="2"]')
            .click('input[value="="]')
        )
        .then(value => {
            const valid = (value === '20');
            if (valid)
                score += 2;

            logger.point(valid, 2, "(c) Cliquer sur 2, puis, 1, puis +, puis 5, puis =, puis -, puis 8, puis =, puis 2, puis = doit afficher 20 dans l'input .display");
        })
    ])
    .then(() => score);
};

module.exports = score;
