const Handler = require('./home.handler');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => Handler.home(request, reply),
    },
    {
        method: 'GET',
        path: '/teste',
        handler: (request, reply) => Handler.teste(request, reply),
    },
];
