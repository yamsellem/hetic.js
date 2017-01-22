'use strict';

const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

module.exports = {
    start: (path, port) => {
        const serve = serveStatic(__dirname + '/../' + path);

        const server = http.createServer((req, res) => {
            serve(req, res, finalhandler(req, res))
        })

        server.listen(port);
    }
}
