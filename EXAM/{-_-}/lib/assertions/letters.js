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
    .evaluate(() => {
        let inputs = document.querySelectorAll('li > input');
        let values = [];
        for (let i = 0; i < inputs.length; i++) {
            values.push(inputs[i].value);
        }
        return values;
    })
    .end()
    .catch((error) => {
        logger.log(error);
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
            .click('#paul')
        )
        .then((values) => {
            const valid = equals(values, ['p', 'a', 'u', 'l', '', '']);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(a) Cliquer sur #paul doit afficher les 4 lettres du mot dans les 4 premiers inputs");
        }), 
        assert(
            runner(path)
            .click('#john')
        )
        .then((values) => {
            const valid = equals(values, ['j', 'o', 'h', 'n', '', '']);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(b) Cliquer sur #john doit afficher les 4 lettres du mot dans les 4 premiers inputs");
        }), 
        assert(
            runner(path)
            .click('#george')
        )
        .then((values) => {
            const valid = equals(values, ['g', 'e', 'o', 'r', 'g', 'e']);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(b) Cliquer sur #george doit afficher les 5 lettres du mot dans les 5 premiers inputs");
        }), 
        assert(
            runner(path)
            .click('#george')
            .click('#john')
        )
        .then((values) => {
            const valid = equals(values, ['j', 'o', 'h', 'n', '', '']);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(b) Cliquer sur #george puis #john doit afficher les 4 lettres du mot dans les 4 premiers inputs puis vide dans les 2 derniers");
        }), 
        assert(
            runner(path)
            .click('#john')
            .click('#move-left')
        )
        .then((values) => {
            const valid = equals(values, ['o', 'h', 'n', '', '', '']);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(c) Cliquer sur #john puis #move-left doit afficher les 3 dernières lettres du mot dans les 3 premiers inputs puis vide dans les 3 derniers");
        }), 
        assert(
            runner(path)
            .click('#john')
            .click('#move-left')
            .click('#move-left')
        )
        .then((values) => {
            const valid = equals(values, ['h', 'n', '', '', '', '']);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(c) Cliquer sur #john puis #move-left deux fois doit afficher les 2 dernières lettres du mot dans les 2 premiers inputs puis vide dans les 4 derniers");
        }), 
        assert(
            runner(path)
            .click('#john')
            .click('#move-right')
            .click('#move-right')
        )
        .then((values) => {
            const valid = equals(values, ['', '', 'j', 'o', 'h', 'n']);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(d) Cliquer sur #john puis #move-right 2 fois doit afficher vide dans les 2 premiers inputs, puis les 4 lettres du mot dans les 4 derniers inputs");
        }), 
        assert(
            runner(path)
            .click('#john')
            .click('#move-right')
            .click('#move-right')
            .click('#move-right')
            .click('#move-right')
        )
        .then((values) => {
            const valid = equals(values, ['', '', '', '', 'j', 'o']);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(d) Cliquer sur #john puis #move-right 4 fois doit afficher vide dans les 4 premiers inputs, puis les 2 premières lettres du mot dans les 2 derniers inputs");
        }), 
        assert(
            runner(path)
            .click('#john')
            .click('#move-left')
            .click('#move-right')
            .click('#move-right')
        )
        .then((values) => {
            const valid = equals(values, ['', 'j', 'o', 'h', 'n', '']);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(e) Cliquer sur #john puis #move-left 1 fois puis #move-left 2 fois doit afficher vide dans le premier input, puis les 4 lettres du mot dans les 4 inputs qui suivent, puis vide dans le dernier input");
        }), 
        assert(
            runner(path)
            .click('#john')
            .click('#move-right')
            .click('#move-right')
            .click('#move-right')
            .click('#move-right')
            .click('#move-left')
            .click('#move-left')
            .click('#move-left')
        )
        .then((values) => {
            const valid = equals(values, ['', 'j', 'o', 'h', 'n', '']);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(e) Cliquer sur #john puis #move-right 4 fois puis #move-left 3 fois doit afficher vide dans le premier input, puis les 4 lettres du mot dans les 4 inputs qui suivent, puis vide dans le dernier input");
        })
    ])
    .then(() => score);
};

module.exports = score;