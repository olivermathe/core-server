const Handler = require('./home.handler');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: Handler.home
    },
    {
        method: 'GET',
        path: '/teste',
        handler: Handler.teste
    }
];