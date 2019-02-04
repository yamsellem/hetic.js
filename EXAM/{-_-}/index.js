'use strict';

const commandLineArgs = require('command-line-args');
const options = commandLineArgs([
    {name: 'file', type: String, multiple: true},
    {name: 'summary', type: Boolean, defaultValue: false}
]);

const logger = require('./lib/logger');
logger.configure(options);

const serve = require('./lib/serve');
const folder = 'public';
const port = 8888;
serve.start(folder, port);

const stepNames = options.file.map(name => name.replace('.html', ''));
const students = require('./lib/students')(stepNames, folder);

let promise = Promise.resolve();

for (let student in students) {
    let files = students[student].files;
    for (let file in files) {
        promise = promise.then(() => {
            logger.log(`${student} (${file})`);
            return require(`./lib/assertions/${file}`)(`http://localhost:${port}/${student}/${file}.html`);
        })
        .then((score) => {
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
