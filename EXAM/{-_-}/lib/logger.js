const chalk = require('chalk');

module.exports = {
    configure(options) {
        this.options = options;
    },
    log(message) {
        console.log(message);
    },
    error(error) {
        console.error(`${error}\n ${error.stack}`);
    },
    time(name) {
        console.time(name);
    },
    timeEnd(name) {
        console.timeEnd(name);
    },
    point(valid, score, message) {
        if (this.options.summary) return;

        if(valid)
            console.log(`${chalk.bgGreen(' '+score+'/'+score+' ')} ${chalk.green(message)}\n`);
        else
            console.log(`${chalk.bgRed(' '+0+'/'+score+' ')} ${chalk.red(message)}\n`);
    },
    total(students) {
        console.log('total');
        Object.keys(students).forEach((student) => {
            const name = student;
            const result = students[student];

            let details = [];
            Object.keys(result.files).forEach((file) => {
                details.push(`${file}: ${result.files[file]}`);
            });

            console.log(`${chalk.cyan(name)} ${chalk.bgCyan(' ' + result.score + ' ')} (${details.join(',')})`);
        });
    }
}