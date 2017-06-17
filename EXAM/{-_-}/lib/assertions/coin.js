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
        const total = document.querySelector('#total');
        return total.innerHTML;
    })
    .end()
    .catch((error) => {
        console.log(error);
        return {};
    });
}

const score = (path) => {
    let score = 0;

    return Promise.resolve()
    .then(() => {
        return assert(
            runner(path)
            .type('input[name=quantity]', false)
            .type('input[name=quantity]', 2)
        )
        .then((total) => {
            if (total === '40€')
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .type('input[name=quantity]', false)
            .type('input[name=quantity]', 3)
        )
        .then((total) => {
            if (total === '60€')
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .type('input[name=quantity]', false)
            .type('input[name=quantity]', 1)
            .check('input[name=delivery]')
        )
        .then((total) => {
            if (total === '25€')
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .type('input[name=quantity]', false)
            .type('input[name=quantity]', 2)
            .check('input[name=delivery]')
        )
        .then((total) => {
            if (total === '45€')
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .type('input[name=quantity]', false)
            .type('input[name=quantity]', 1)
            .check('input[name=gift]')
        )
        .then((total) => {
            if (total === '22€')
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .type('input[name=quantity]', false)
            .type('input[name=quantity]', 2)
            .check('input[name=gift]')
        )
        .then((total) => {
            if (total === '44€')
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .type('input[name=quantity]', false)
            .type('input[name=quantity]', 2)
            .check('input[name=delivery]')
            .check('input[name=gift]')
        )
        .then((total) => {
            if (total === '49€')
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .type('input[name=quantity]', false)
            .type('input[name=quantity]', 2)
            .type('input[name=coupon]', false)
            .type('input[name=coupon]', 'été')
        )
        .then((total) => {
            if (total === '30€')
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .type('input[name=quantity]', false)
            .type('input[name=quantity]', 2)
            .type('input[name=coupon]', false)
            .type('input[name=coupon]', 'hiver')
        )
        .then((total) => {
            if (total === '40€')
                score += 1;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .type('input[name=quantity]', false)
            .type('input[name=quantity]', 2)
            .type('input[name=coupon]', false)
            .type('input[name=coupon]', 'été')
            .check('input[name=delivery]')
            .check('input[name=gift]')
        )
        .then((total) => {
            if (total === '39€')
                score += 1;
        });
    })
    .then(() => {
        return score;
    })
}

module.exports = score;
