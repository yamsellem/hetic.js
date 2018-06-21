'use strict';

const port = 8888;
const folder = 'public';
const stepNames = ['survey','square'];

const serve = require('./lib/serve');
serve.start(folder, port);

const students = require('./lib/students')(stepNames, folder);

let times = 0;

let promise = Promise.resolve();

for (let student in students) {
    let files = students[student].files;
    console.log(`${student} --- ${Object.keys(files)}`);

    for (let file in files) {
        promise = promise.then(() => {
            return require(`./lib/assertions/${file}`)(`http://localhost:${port}/${student}/${file}.html`);
        })
        .then((score) => {
            files[file] = score;
            students[student].score += score;
        });
    }
}

console.time('solve');

promise.then(() => {
    console.timeEnd('solve');
    console.log('\n');
    console.log(students);
})
.catch((error) => {
    console.error(`${error}\n ${error.stack}`);
})
.then(() => {
    process.exit();
});
