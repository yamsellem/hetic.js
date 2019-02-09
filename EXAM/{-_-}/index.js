'use strict';

const commandLineArgs = require('command-line-args');
const options = commandLineArgs([
    {name: 'deep', type: Boolean},
    {name: 'summary', type: Boolean}
]);

const logger = require('./lib/logger');
logger.configure(options);

const serve = require('./lib/serve');
const folder = 'public';
const port = 8888;
serve.start(folder, port);

const students = require('./lib/students').get(folder, options.deep);

let promise = Promise.resolve();

for (let student in students) {
    let files = students[student].files;
    for (let file in files) {
        promise = promise.then(() => {
            logger.trace(`${student} (${file})`);
            const path = !options.deep ? file : `${student}/${file}`;
            return require(`./lib/assertions/${file}`)(`http://localhost:${port}/${path}.html`);
        })
        .then((score) => {
            logger.flush();
            files[file] = score;
            students[student].score += score;
        });
    }
}

logger.time('solve');

promise.then(() => {
    if (!options.summary) {
        logger.total(students);
    } else {
        logger.timeEnd('solve');
        logger.log(students);
    }
})
.catch((error) => {
    logger.error(`${error}\n ${error.stack}`);
})
.then(() => {
    process.exit();
});
