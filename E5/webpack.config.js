// -> to use webpack, run these 2 lines in a terminal
// sudo npm install -g webpack
// sudo npm install -g webpack-dev-server

// -> then to launch the server, run this and go to http://localhost:3000
// npm start

// -> then to start the tests run
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
