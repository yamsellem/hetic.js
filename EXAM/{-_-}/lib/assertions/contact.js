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
        let lis = document.querySelectorAll('li');
        let value = { lis: [], page: '' };

        for (let i = 0; i < lis.length; i++)
            value.lis.push(lis[i].innerHTML);
        
        value.page = document.querySelector('span').innerHTML;
        return value;
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
            .type('input', 'hu')
        )
        .then(value => {
            const valid = equals(value.lis, ['Arthur', 'Hugo']);
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(a) Saisir 'hu' dans l'input ne doit laisser visible que les lis 'Arthur' et 'Hugo'");
        }),
        assert(
            runner(path)
            .type('input', 'hu')
        )
        .then(value => {
            const valid = value.page === '1 à 2';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(b) Saisir 'hu' dans l'input doit afficher '1 à 2' dans le span en pied de page");
        }),
        assert(
            runner(path)
            .type('input', 'h')
        )
        .then(value => {
            const valid = value.page === '1 à 5';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(b) Saisir 'h' dans l'input doit afficher '1 à 5' dans le span en pied de page");
        }),
        assert(
            runner(path)
            .select('select', 'five')
        )
        .then(value => {
            const valid = equals(value.lis, ['Agathe','Alice','Ambre','Arthur','Camille']);
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(c) Sélectionner '5 par 5' dans le select ne doit laisser visible que les 5 premiers lis");
        }),
        assert(
            runner(path)
            .select('select', 'five')
        )
        .then(value => {
            const valid = value.page === '1 à 5';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(c) Sélectionner '5 par 5' dans le select doit afficher '1 à 5' dans le span en pied de page");
        }),
        assert(
            runner(path)
            .select('select', 'five')
            .select('select', 'all')
        )
        .then(value => {
            const valid = equals(value.lis, ['Agathe','Alice','Ambre','Arthur','Camille','Chloé','Gabin','Gabriel','Hugo','Jade','Julia','Léa','Léo','Louis','Louise','Maël','Mila','Paul','Théo','Valentin']);
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(c) Sélectionner '5 par 5' puis 'Tous' dans le select doit laisser visibles tous les lis");
        }),
        assert(
            runner(path)
            .select('select', 'five')
            .select('select', 'all')
        )
        .then(value => {
            const valid = value.page === '1 à 20';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(c) Sélectionner '5 par 5' puis 'Tous' dans le select doit afficher '1 à 20' dans le span en pied de page");
        }),
        assert(
            runner(path)
            .select('select', 'five')
            .click('.next')
            .click('.next')
            .click('.next')
        )
        .then(value => {
            const valid = equals(value.lis, ['Maël','Mila','Paul','Théo','Valentin']);
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(d) Sélectionner '5 par 5' dans le select puis cliquer 3 fois sur '.next' ne doit laisser visible que les lis 'Maël', 'Mila', 'Paul', 'Théo' et 'Valentin'");
        }),
        assert(
            runner(path)
            .select('select', 'five')
            .click('.next')
            .click('.next')
            .click('.next')
        )
        .then(value => {
            const valid = value.page === '16 à 20';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(d) Sélectionner '5 par 5' dans le select puis cliquer 3 fois sur '.next' doit afficher '16 à 20' dans le span en pied de page");
        }),
        assert(
            runner(path)
            .select('select', 'five')
            .click('.next')
            .click('.next')
            .click('.next')
            .click('.previous')
        )
        .then(value => {
            const valid = value.page === '11 à 15';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(d) Sélectionner '5 par 5' dans le select puis cliquer 3 fois sur '.next' puis une fois sur '.previous' doit afficher '11 à 15' dans le span en pied de page");
        }),
        assert(
            runner(path)
            .type('input', 'a')
            .select('select', 'five')
            .click('.next')
            .click('.next')
        )
        .then(value => {
            const valid = equals(value.lis, ['Maël','Mila','Paul','Valentin']);
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(e) Saisir 'a' dans l'input puis sélectionner '5 par 5' dans le select puis cliquer 3 fois sur '.next' ne doit laisser visible que les lis 'Maël', 'Mila', 'Paul' et 'Valentin'");
        }),
        assert(
            runner(path)
            .type('input', 'a')
            .select('select', 'five')
            .click('.next')
            .click('.next')
        )
        .then(value => {
            const valid = value.page === '11 à 14';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(e) Saisir 'a' dans l'input puis sélectionner '5 par 5' dans le select puis cliquer 3 fois sur '.next' doit afficher '11 à 14' dans le span en pied de page");
        }),
    ])
    .then(() => score);
};

module.exports = score;
