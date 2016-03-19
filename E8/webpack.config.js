// -> install latest nodejs though nodejs.org
// -> once node is installed, in this folder
// npm install

// -> then to launch the server, run this and go to http://localhost:3000
// npm start

// -> then to start the tests run
// npm test

module.exports = {
    entry: {
        "kata": "./src/kata.es6.js",
        "randori": "./src/randori.es6.js",
        "starter": "./src/randori.starter.js"
    },
    output: {
        path: __dirname,
        filename: "bundle.[name].js"
    },
    module: {
        loaders: [{
            test: __dirname,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};
