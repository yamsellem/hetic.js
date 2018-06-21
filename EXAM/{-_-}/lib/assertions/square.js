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

    let y = 'yellow';
    let t = 'turquoise';
    let u = '';

    // starter
    // [
    //     y, u, u, t, 
    //     t, t, u, y, 
    //     u, u, y, t, 
    //     u, t, u, u
    // ]

    return Promise.resolve()
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(11)')
            .click('li:nth-child(7)')
        )
        .then((lis) => {
            if (equals(lis, [
                    y, u, u, t, 
                    t, t, y, y, 
                    u, u, u, t, 
                    u, t, u, u
                ]))
                score += 2;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(14)')
            .click('li:nth-child(15)')
            .click('li:nth-child(12)')
            .click('li:nth-child(11)')
        )
        .then((lis) => {
            if (equals(lis, [
                    y, u, u, t,
                    t, t, u, y,
                    u, u, t, y,
                    u, u, t, u
                ]))
                score += 2;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(7)')
            .click('li:nth-child(6)')
            .click('li:nth-child(2)')
        )
        .then((lis) => {
            if (equals(lis, [
                    y, t, u, t, 
                    t, u, u, y, 
                    u, u, y, t, 
                    u, t, u, u
                ]))
                score += 2;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(14)')
            .click('li:nth-child(7)')
        )
        .then((lis) => {
            if (equals(lis, [
                    y, u, u, t, 
                    u, u, u, y, 
                    u, u, y, t, 
                    u, u, u, u
                ]))
                score += 2;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(1)')
            .click('li:nth-child(7)')
            .click('li:nth-child(8)')
            .click('li:nth-child(15)')
        )
        .then((lis) => {
            if (equals(lis, [
                    u, u, u, t, 
                    t, t, u, u, 
                    u, u, u, t, 
                    u, t, u, u
                ]))
                score += 2;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('li:nth-child(1)')
            .click('li:nth-child(7)')
            .click('li:nth-child(8)')
            .click('li:nth-child(15)')
            .click('li:nth-child(14)')
            .click('li:nth-child(8)')
        )
        .then((lis) => {
            if (equals(lis, [
                    u, u, u, u, 
                    u, u, u, u, 
                    u, u, u, u, 
                    u, u, u, u
                ]))
                score += 2;
        });
    })
    .then(() => {
        return score > 10 ? 10 : score;
    })
}

module.exports = score;
