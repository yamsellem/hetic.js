var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'assets');
var STYLE_DIR = [
    path.resolve(__dirname, 'node_modules/codemirror/lib/'),
    path.resolve(__dirname, 'node_modules/codemirror/addon/hint/'),
    path.resolve(__dirname, 'node_modules/codemirror-one-dark-theme/'),
    path.resolve(__dirname, 'node_modules/bulma/css/'),
    APP_DIR
];

var config = {
    entry: {
        app: APP_DIR + '/app.jsx',
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].build.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                include: STYLE_DIR
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'inline-source-map',
    plugins: [
        new LiveReloadPlugin({appendScriptTag: true})
    ]
};

module.exports = config;
