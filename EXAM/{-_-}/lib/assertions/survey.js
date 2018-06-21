'use strict';

const Nightmare = require('nightmare');

const runner = (path) => {
    const nightmare = Nightmare({ show: false, typeInterval: 1 });

    return nightmare
    .goto(path);
}

const assert = (runner) => {
    return runner
    .evaluate( () => {
        let capitalizeFirst = (string) => {
            return !string ? '' : string.charAt(0).toUpperCase() + string.slice(1);
        };

        let question = document.querySelector('.question');
        let button = document.querySelector('.button');
        let labels = document.querySelectorAll('label');
        return {
            question: question ? capitalizeFirst(question.innerHTML) : '',
            button: button ? capitalizeFirst(button.value) : '',
            answers: labels.length ? [].map.call(labels, label => label.textContent) : ['', '', '', ''],
        }
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

const contains = (a, b) => {
    a = a || '';
    b = b || '';
    return a.toLowerCase().indexOf(b.toLowerCase()) !== -1
}

const score = (path) => {
    let score = 0;

    let survey = [{
        question: 'Tu es un ver de terre et ton rêve le plus cher est de faire un tour sur un mammifère. Lequel ?',
        answers: ['un hélicoptère', 'un chiroptère', 'un coléoptère', 'un pélicoptère'],
        solution: 'un chiroptère'
    }, {
        question: 'Si les trésoriers politiques, lassés de se faire pincer pour financement occultes, décidaient de fabriquer de faux billets, et si on était encore au XVIIIe siècle, quel serait leur châtiment ?',
        answers: ['on les brûlerait sur la place publique', 'on les écartèlerait avant de les pendre ', 'on les ferait bouillir dans un chaudron', 'on ne leur ferait rien du tout'],
        solution: 'on les ferait bouillir dans un chaudron'
    }, {
        question: 'L\'une de ces coiffures est d\'origine gastronomique. Laquelle ?',
        answers: ['la choucroute', 'le chou-fleur', 'le chou-chou', 'le chichon'],
        solution: 'la choucroute'
    }];

    return Promise.resolve()
    .then(() => {
        return assert(
            runner(path)
            .click('label:nth-child(1)')
            .click('.button')
        )
        .then((value) => {
            if (value.question === survey[1].question)
                score++;

            if (equals(value.answers, survey[1].answers))
                score++;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('label:nth-child(1)')
            .click('.button')
            .click('label:nth-child(2)')
            .click('.button')
        )
        .then((value) => {
            if (value.question === survey[2].question && equals(value.answers, survey[2].answers))
                score++;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('label:nth-child(1)')
            .click('.button')
            .click('label:nth-child(2)')
            .click('.button')
            .click('label:nth-child(1)')
            .click('.button')
        )
        .then((value) => {
            if (contains(value.question, '1/3'))
                score++;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('label:nth-child(2)')
            .click('.button')
            .click('label:nth-child(3)')
            .click('.button')
            .click('label:nth-child(1)')
            .click('.button')
        )
        .then((value) => {
            if (contains(value.question, '3/3'))
                score++;

            if (contains(value.button, 'Recommencer'))
                score++;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('label:nth-child(2)')
            .click('.button')
            .click('label:nth-child(3)')
            .click('.button')
            .click('label:nth-child(1)')
            .click('.button')
            .click('.button')
        )
        .then((value) => {
            if (value.question === survey[0].question && equals(value.answers, survey[0].answers))
                score++;

            if (contains(value.button, 'Suivant'))
                score++;
        });
    })
    .then(() => {
        return assert(
            runner(path)
            .click('label:nth-child(2)')
            .click('.button')
            .click('label:nth-child(3)')
            .click('.button')
            .click('label:nth-child(1)')
            .click('.button')
            .click('.button')
            .click('label:nth-child(1)')
            .click('.button')
            .click('label:nth-child(2)')
            .click('.button')
            .click('label:nth-child(1)')
            .click('.button')
        )
        .then((value) => {
            if (contains(value.question, '1/3'))
                score++;
        });
    })
    .then(() => {
        return score;
    });
}

module.exports = score;
