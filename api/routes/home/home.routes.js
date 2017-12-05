'use strict';

const handler = require('./home.handler');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: handler.home
    },
    {
        method: 'GET',
        path: '/teste',
        handler: handler.teste
    }
];