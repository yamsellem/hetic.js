// -> install latest nodejs though nodejs.org
// -> once node is installed, in this folder
// npm install

// -> then to launch the server, run this and go to http://localhost:3000
// npm start

// -> then to start the tests run
// npm test

module.exports = {
    entry: {
        "0": "./src/randori.cargo.0.js",
        "1": "./src/randori.cargo.1.js",
        "2": "./src/randori.cargo.2.js"
    },
    output: {
        path: __dirname,
        filename: "bundle.[name].js"
    }
};
