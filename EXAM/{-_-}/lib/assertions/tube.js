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
        const lis = document.querySelectorAll('li');
        const names = [];
        for (var i = 0; i < lis.length; i++) {
            names.push(lis[i].className);
        }
        return names;
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

    return Promise.resolve()
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(2)')
        )
        .then((lis) => {
            if (equals(lis, ['light','light','','','','','']))
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(2)')
            .click('li:nth-child(4)')
        )
        .then((lis) => {
            if (equals(lis, ['light','light','','','','','']))
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(2)')
            .click('li:nth-child(3)')
            .click('li:nth-child(3)')
            .click('li:nth-child(4)')
            .click('li:nth-child(5)')
            .click('li:nth-child(4)')
            .click('li:nth-child(6)')
        )
        .then((lis) => {
            if (equals(lis, ['light','light','light','light','light','light','']))
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(2)')
            .click('li:nth-child(6)')
        )
        .then((lis) => {
            if (equals(lis, ['light','light','','','','','']))
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(2)')
            .click('li:nth-child(3)')
            .click('li:nth-child(4)')
            .click('li:nth-child(5)')
            .click('li:nth-child(6)')
            .click('li:nth-child(7)')
        )
        .then((lis) => {
            if (equals(lis, ['','','','','','','light']))
                score += 2;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(2)')
            .click('li:nth-child(3)')
            .click('li:nth-child(4)')
            .click('li:nth-child(5)')
            .click('li:nth-child(6)')
            .click('li:nth-child(7)')
            .click('li:nth-child(6)')
            .click('li:nth-child(5)')
        )
        .then((lis) => {
            if (equals(lis, ['','','','','light','light','light']))
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(2)')
            .click('li:nth-child(3)')
            .click('li:nth-child(4)')
            .click('li:nth-child(5)')
            .click('li:nth-child(6)')
            .click('li:nth-child(7)')
            .click('li:nth-child(6)')
            .click('li:nth-child(5)')
            .click('li:nth-child(3)')
        )
        .then((lis) => {
            if (equals(lis, ['','','','','light','light','light']))
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(2)')
            .click('li:nth-child(3)')
            .click('li:nth-child(4)')
            .click('li:nth-child(5)')
            .click('li:nth-child(6)')
            .click('li:nth-child(7)')
            .click('li:nth-child(6)')
            .click('li:nth-child(5)')
            .click('li:nth-child(4)')
            .click('li:nth-child(3)')
            .click('li:nth-child(2)')
            .click('li:nth-child(1)')
            .click('li:nth-child(2)')
        )
        .then((lis) => {
            if (equals(lis, ['light','light','','','','','']))
                score += 2;
        });
    })
    .then(() => {
        return score;
    })
}

module.exports = score;
