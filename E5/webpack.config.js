// -> install latest nodejs though nodejs.org
// -> once node is installed, in this folder
// npm install

// -> start the dev server, and go to http://localhost:3000
// npm start

// -> start the tests
// npm test

module.exports = {
    entry: {
        "randori.fruits.3": "./src/randori.fruits.3.js",
        "randori.fruits.4": "./src/randori.fruits.4.js"
    },
    output: {
        path: __dirname,
        filename: "[name].bundle.js"
    }
};
