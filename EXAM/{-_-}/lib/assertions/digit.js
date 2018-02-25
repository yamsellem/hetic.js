'use strict';

const Nightmare = require('nightmare');

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
            if (value === 1)
                score += 1;
        }), 
        assert(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#plus')
        )
        .then((value) => {
            if (value === 3)
                score += 1;
        }), 
        assert(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#multiplied')
            .click('#multiplied')
        )
        .then((value) => {
            if (value === 8)
                score += 1;
        }), 
        assert(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#multiplied')
            .click('#plus')
        )
        .then((value) => {
            if (value === 5)
                score += 1;
        }), 
        assertLis(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#plus')
        )
        .then((actives) => {
            if (equals(actives, [false, false, false]))
                score += 1;
        }), 
        assertLis(
            runner(path)
            .click('#plus')
            .click('#plus')
            .click('#plus')
            .click('#plus')
        )
        .then((actives) => {
            if (equals(actives, [true, false, false]))
                score += 1;
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
            if (equals(actives, [true, true, false]))
                score += 1;
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
            if (equals(actives, [true, true, true]))
                score += 1;
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
            if (equals(actives, [true, true, false]))
                score += 1;
        })
    ])
    .then(() => score);
};

module.exports = score;
