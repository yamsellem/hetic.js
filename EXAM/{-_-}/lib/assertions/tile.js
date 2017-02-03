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
            .click('li:nth-child(6)')
            .click('li:nth-child(9)')
        )
        .then((lis) => {
            if (equals(lis, ['yellow','tomato','indigo','indigo','yellow','yellow','indigo']))
                score += 3;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(6)')
            .click('li:nth-child(9)')
            .click('li:nth-child(2)')
        )
        .then((lis) => {
            if (equals(lis, ['yellow','indigo','indigo','yellow','yellow','indigo']))
                score++;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(2)')
            .click('li:nth-child(6)')
            .click('li:nth-child(7)')
        )
        .then((lis) => {
            if (equals(lis, ['yellow','indigo','indigo','yellow','yellow','indigo']))
                score++;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(6)')
            .click('li:nth-child(9)')
            .click('li:nth-child(6)')
        )
        .then((lis) => {
            if (equals(lis, ['yellow','tomato','indigo','indigo','yellow','yellow','indigo']))
                score++;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(6)')
            .click('li:nth-child(9)')
            .click('li:nth-child(6)')
            .click('li:nth-child(1)')
        )
        .then((lis) => {
            if (equals(lis, ['tomato','indigo','indigo','yellow','indigo']))
                score++;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(8)')
            .click('li:nth-child(9)')
        )
        .then((lis) => {
            if (equals(lis, ['yellow','tomato','indigo','indigo','yellow','tomato','yellow','indigo','tomato','tomato']))
                score++;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(9)')
            .click('li:nth-child(8)')
            .click('li:nth-child(10)')
            .click('li:nth-child(9)')
        )
        .then((lis) => {
            if (equals(lis, ['yellow','tomato','indigo','indigo','yellow','tomato','yellow','indigo']))
                score++;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(8)')
            .click('li:nth-child(9)')
            .click('li:nth-child(1)')
            .click('li:nth-child(5)')
            .click('li:nth-child(7)')
            .click('li:nth-child(8)')
            .click('li:nth-child(1)')
        )
        .then((lis) => {
            if (equals(lis, ['indigo','indigo','tomato','yellow','indigo']))
                score++;
        });
    })
    .then(() => {
        return score;
    })
}

module.exports = score;
