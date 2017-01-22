'use strict';

const fs = require('fs');

module.exports = (stepNames, folder) => {
    const path = `${folder}/`;
    const students = {};

    const studentNames = fs.readdirSync(path);
    for (var i = 0; i < studentNames.length; i++) {
        let stats = fs.lstatSync(path + studentNames[i])
        if (stats.isFile())
            continue;

        students[studentNames[i]] = {score: 0, files: {}};

        let exercices = fs.readdirSync(path + studentNames[i]);
        for (var j = 0; j < exercices.length; j++) {
            let stats = fs.lstatSync(path + studentNames[i] + '/' + exercices[j]);
            let name = exercices[j].replace('.html', '');
            if (stats.isDirectory() || stepNames.indexOf(name) === -1)
                continue;

            students[studentNames[i]].files[name] = 0;
        }
    }
    return students;
}
