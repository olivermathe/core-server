'use strict';

module.exports = {
    development: {
        db: {
            host: 'localhost',
            pwd: '',
            user: '',
            port: '30050',
            name: 'database'
        },
        app: {
            port: 3000,
            pvtKey: `${process.cwd()}/config/jwtRS256.key`,
            pubKey: `${process.cwd()}/config/jwtRS256.key.pub`
        }
    },
    homolog: {
        db: {
            host: 'localhost',
            pwd: '',
            user: '',
            port: '30050',
            name: 'database'
        },
        app: {
            port: 8000,
            pvtKey: `${process.cwd()}/config/jwtRS256.key`,
            pubKey: `${process.cwd()}/config/jwtRS256.key.pub`
        }
    },
    production: {
        db: {
            host: 'localhost',
            pwd: '',
            user: '',
            port: '30050',
            name: 'database'
        },
        app: {
            port: 1337,
            pvtKey: `${process.cwd()}/config/jwtRS256.key`,
            pubKey: `${process.cwd()}/config/jwtRS256.key.pub`
        }
    },
}