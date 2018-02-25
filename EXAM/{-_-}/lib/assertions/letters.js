'use strict';

const Nightmare = require('nightmare');

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
            .click('#paul')
        )
        .then((values) => {
            if (equals(values, ['p', 'a', 'u', 'l', '', '']))
                score += 1;
        }), 
        assert(
            runner(path)
            .click('#john')
        )
        .then((values) => {
            if (equals(values, ['j', 'o', 'h', 'n', '', '']))
                score += 1;
        }), 
        assert(
            runner(path)
            .click('#george')
        )
        .then((values) => {
            if (equals(values, ['g', 'e', 'o', 'r', 'g', 'e']))
                score += 1;
        }), 
        assert(
            runner(path)
            .click('#george')
            .click('#john')
        )
        .then((values) => {
            if (equals(values, ['j', 'o', 'h', 'n', '', '']))
                score += 1;
        }), 
        assert(
            runner(path)
            .click('#john')
            .click('#move-left')
        )
        .then((values) => {
            if (equals(values, ['o', 'h', 'n', '', '', '']))
                score += 1;
        }), 
        assert(
            runner(path)
            .click('#john')
            .click('#move-left')
            .click('#move-left')
        )
        .then((values) => {
            if (equals(values, ['h', 'n', '', '', '', '']))
                score += 1;
        }), 
        assert(
            runner(path)
            .click('#john')
            .click('#move-right')
            .click('#move-right')
        )
        .then((values) => {
            if (equals(values, ['', '', 'j', 'o', 'h', 'n']))
                score += 1;
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
            if (equals(values, ['', '', '', '', 'j', 'o']))
                score += 1;
        }), 
        assert(
            runner(path)
            .click('#john')
            .click('#move-left')
            .click('#move-right')
            .click('#move-right')
        )
        .then((values) => {
            if (equals(values, ['', 'j', 'o', 'h', 'n', '']))
                score += 1;
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
            if (equals(values, ['', 'j', 'o', 'h', 'n', '']))
                score += 1;
        })
    ])
    .then(() => score);
};

module.exports = score;