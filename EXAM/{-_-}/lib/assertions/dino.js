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
        const lis = document.querySelectorAll('li');
        for (let i = 0; i < lis.length; i++)
            if (lis[i].classList.contains('dino'))
                return i + 1;
        return -1;
    })
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
            .click('.right')
            .click('.right')
        )
        .then(value => {
            const valid = (value === 11);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(a) Cliquer deux fois sur .right doit décaler le dino de deux cases vers la droite");
        }),
        assert(
            runner(path)
            .click('.right')
            .click('.right')
            .click('.right')
            .click('.right')
            .click('.right')
        )
        .then(value => {
            const valid = (value === 12);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(a) Cliquer cinq fois sur .right doit décaler le dino de trois cases vers la droite et ne pas dépasser la dernière case à droite");
        }),
        assert(
            runner(path)
            .click('.right')
            .click('.right')
            .click('.right')
            .click('.left')
            .click('.left')
        )
        .then(value => {
            const valid = (value === 10);
            if (valid)
                score += 2;

            logger.point(valid, 2, "(b) Cliquer trois fois sur .right, puis deux fois sur .left doit décaler le dino de trois cases vers la droite, puis de deux vers la gauche");
        }),
        assert(
            runner(path)
            .click('.up')
            .click('.up')
            .click('.up')
        )
        .then(value => {
            const valid = (value === 1);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(c) Cliquer trois fois sur .up doit décaler le dino de trois cases vers le haut et ne pas dépasser la dernière case en haut");
        }),
        assert(
            runner(path)
            .click('.up')
            .click('.up')
            .click('.down')
        )
        .then(value => {
            const valid = (value === 5);
            if (valid)
                score += 2;

            logger.point(valid, 2, "(c) Cliquer deux fois sur .up, puis une fois sur .down doit décaler le dino de trois cases vers le haut, puis de deux cases vers le bas");
        }),
        assert(
            runner(path)
            .click('.right')
            .click('.up')
        )
        .then(value => {
            const valid = (value === 10);
            if (valid)
                score += 1;

            logger.point(valid, 1, "(d) Cliquer une fois sur .right, puis une fois sur .up doit décaler le dino d'une case à droite, puis refuser de monter d'une case (et rester sur la ligne du bas)");
        }),
        assert(
            runner(path)
            .click('.right')
            .click('.right')
            .click('.up')
            .click('.up')
            .click('.right')
        )
        .then(value => {
            const valid = (value === 3);
            if (valid)
                score += 2;

            logger.point(valid, 2, "(d) Cliquer deux fois sur .right, puis deux fois sur .up, puis une fois sur .right doit décaler le dino de deux case à droite, puis deux cases en haut, puis refuser de le décaler à droite d'une case");
        }),
        
    ])
    .then(() => score);
};

module.exports = score;
