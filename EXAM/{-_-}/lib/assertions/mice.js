'use strict';

const Nightmare = require('nightmare');

const assert = (path, value) => {
    const nightmare = Nightmare({ show: false, typeInterval: 1 });

    return nightmare
    .goto(path)
    .type('input', value)
    .evaluate( () => {
        let copy = document.querySelector('#copy');
        let count = document.querySelector('#count');
        let swap = document.querySelector('#swap');
        return {
            copy: copy ? copy.innerHTML : '',
            count: count ? count.innerHTML : '',
            swap: swap ? swap.innerHTML : ''
        }
    })
    .end()
    .catch((error) => {
        console.log(error);
        return {};
    });
}

const score = (path) => {
    let score = {
        copy: 0,
        count: 0,
        swap: 0
    };

    return Promise.resolve()
    .then(() => {
        return assert(path, 'un verre vert et une souris verte')
        .then((value) => {
            if (value.copy === 'un verre vert et une souris verte')
                score.copy++;

            if (value.count == 6)
                score.count++;

            if (value.swap === 'un verre bleu et une souris verte')
                score.swap++;
        });
    })
    .then(() => {
        return assert(path, 'bleu bleu le ciel de Provence Blanc, vert vert l\'éléphant')
        .then((value) => {
            if (value.copy === 'bleu bleu le ciel de Provence Blanc, vert vert l\'éléphant')
                score.copy++;

            if (value.count == 9)
                score.count++;

            if (value.swap === 'bleu bleu le ciel de Provence Blanc, bleu bleu l\'éléphant')
                score.swap++;

            return score;
        });
    })
    .then(() => {
        return assert(path, 'une bleuette vertigineuse du moment vert')
        .then((value) => {
            if (value.copy === 'une bleuette vertigineuse du moment vert')
                score.copy++;

            if (value.count == 5)
                score.count++;

            if (value.swap === 'une bleuette vertigineuse du moment bleu')
                score.swap++;
        });
    })
    .then(() => {
        return score.copy + score.count + score.swap;
    });
}

module.exports = score;
