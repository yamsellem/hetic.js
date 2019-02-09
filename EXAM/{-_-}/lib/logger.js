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
    trace(name) {
        this.current = {name: name, logs: []};
    },
    point(valid, score, message) {
        if (this.options.summary) return;

        if(valid)
            this.current.logs.push(`${chalk.bgGreen(' '+score+'/'+score+' ')} ${chalk.green(message)}\n`);
        else
            this.current.logs.push(`${chalk.bgRed(' '+0+'/'+score+' ')} ${chalk.red(message)}\n`);
    },
    flush() {
        console.log(this.current.name);
        this.current.logs.sort((a, b) => {
            a = /\(.*/.exec(chalk.reset(a))[0]; // remove points
            b = /\(.*/.exec(chalk.reset(b))[0]; // remove points
            return a > b ? 1 : a < b ? -1 : 0;
        }).forEach((value) => console.log(value));
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