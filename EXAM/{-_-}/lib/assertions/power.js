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
        let actives = [];
        for (let i = 0; i < lis.length; i++) {
            actives[i] = '';

            if (lis[i].classList.contains('on'))
                actives[i] = 'on';
            else if (lis[i].classList.contains('low'))
                actives[i] = 'low';
            else if (lis[i].classList.contains('medium'))
                actives[i] = 'medium';
        }
        return actives;
    })
    .end()
    .catch((error) => {
        console.log(error);
        return {};
    });
}

const score = (path) => {
    let score = 0;

    return Promise.all([
        assert(
            runner(path)
            .click('label:nth-child(1)')
        )
        .then(value => {
            const valid = value[0] === 'on';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(a) Cocher l'input[name=kitchen] doit ajouter la classe 'on' à l'élément .kitchen");
        }),
        assert(
            runner(path)
            .click('label:nth-child(1)')
            .click('label:nth-child(1)')
        )
        .then(value => {
            const valid = value[0] === '';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(a) Décocher l'input[name=kitchen] doit retirer la classe 'on' de l'élément .kitchen");
        }),
        assert(
            runner(path)
            .click('label:nth-child(2)')
        )
        .then(value => {
            const valid = value[1] === 'on';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(b) Cocher l'input[name=bathroom] doit ajouter la classe 'on' à l'élément .bathroom");
        }),
        assert(
            runner(path)
            .select('select', 'Faible')
        )
        .then(value => {
            const valid = value[3] === 'low';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(c) Sélectionner 'Faible' dans le select [name=bedroom] doit ajouter la classe 'low' à l'élément .bedroom");
        }),
        assert(
            runner(path)
            .select('select', 'Moyen')
        )
        .then(value => {
            const valid = value[3] === 'medium';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(c) Sélectionner 'Moyen' dans le select [name=bedroom] doit ajouter la classe 'medium' à l'élément .bedroom");
        }),
        assert(
            runner(path)
            .click('label:nth-child(4)')
        )
        .then(value => {
            const valid = value[2] === 'on';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(d) Cocher l'input[name=livingroom-1] doit ajouter la classe 'on' à l'élément .livingroom");
        }),
        assert(
            runner(path)
            .click('label:nth-child(4)')
            .click('label:nth-child(5)')
        )
        .then(value => {
            const valid = value[2] === '';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(d) Cocher l'input[name=livingroom-1] et l'input[name=livingroom-2] doit retirer la classe 'on' de l'élément .livingroom");
        }),
        assert(
            runner(path)
            .click('label:nth-child(4)')
            .click('label:nth-child(5)')
            .click('label:nth-child(4)')
        )
        .then(value => {
            const valid = value[2] === 'on';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(d) Cocher l'input[name=livingroom-2] doit ajouter la classe 'on' à l'élément .livingroom");
        }),
        assert(
            runner(path)
            .click('label:nth-child(1)')
            .select('select', 'Moyen')
            .click('label:nth-child(4)')
            .click('hr + label')
        )
        .then(value => {
            const valid = value[0] === '' && value[3] === '' && value[2] === '';
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(e) Décocher l'input[name=power] doit retirer la classe 'on', 'low' ou 'medium' à tous les éléments");
        }),
        assert(
            runner(path)
            .click('label:nth-child(1)')
            .select('select', 'Moyen')
            .click('label:nth-child(4)')
            .click('hr + label')
            .click('hr + label')
        )
        .then(value => {
            const valid = (value[0] === 'on' && value[3] === 'medium' && value[2] === 'on');
            if (valid)
                score += 1;
            
            logger.point(valid, 1, "(e) Cocher l'input[name=power] doit ajouter la classe 'on', 'low' ou 'medium' à tous les éléments selon les autres checkbox & select");
        })
    ])
    .then(() => score);
};

module.exports = score;
