'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    get(folder, deep) {
        return !deep ? this.root(folder) : this.deep(folder);
    },
    getSteps() {
        const steps = [];
        this.forEach('lib/assertions', '.js', () => false, (name) => steps.push(name));
        return steps;
    },
    forEach(basepath, extension, excludeFn, fn) {
        let files = fs.readdirSync(basepath);
        for (let j = 0; j < files.length; j++) {
            let stats = fs.lstatSync(basepath + '/' + files[j]);
            const filepath = path.parse(files[j]);
            if (stats.isDirectory() || filepath.ext !== extension || excludeFn(filepath.name))
                continue;

            fn(filepath.name);
        }
    },
    deep(folder) {
        const steps = this.getSteps();
        const basepath = `${folder}/`;
        const students = {};
    
        const studentNames = fs.readdirSync(basepath);
        for (let i = 0; i < studentNames.length; i++) {
            let stats = fs.lstatSync(basepath + studentNames[i])
            if (stats.isFile())
                continue;
    
            students[studentNames[i]] = {score: 0, files: {}};
    
            this.forEach(basepath + studentNames[i], '.html', (name) => steps.indexOf(name) === -1, (name) => {
                students[studentNames[i]].files[name] = 0;
            });
        }
        return students;
    },
    root(folder) {
        const steps = this.getSteps();

        const basepath = `${folder}/`;
        const students = {'>': {score: 0, files: {}}};
        this.forEach(basepath, '.html', (name) => steps.indexOf(name) === -1, (name) => {
            students['>'].files[name] = 0;
        });

        return students;
    }
}
