var Hapi = require('hapi');
var db = require('./db');

// create the server
var server = new Hapi.Server();
server.connection({ routes: { cors: true }, port: 3000 });

server.route({
    method: 'GET',
    path: '/api',
    handler: function (request, reply) {
        reply({ 'api': 'hello world!' });
    }
});

server.start(function () {
    console.log('Running on 3000');
});

