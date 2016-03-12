// -> install latest nodejs though nodejs.org
// -> once node is installed, in this folder
// npm install

// -> then to launch the server, run this and go to http://localhost:3000
// npm start

// -> then to start the tests run
// npm test

module.exports = {
    entry: {
        "0": "./src/randori.weather.0.js",
        "1": "./src/randori.weather.1.js"
    },
    output: {
        path: __dirname,
        filename: "bundle.[name].js"
    }
};
