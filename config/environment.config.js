'use strict';

module.exports = {
    dev: {
        db: {
            host: 'localhost',
            pwd: '',
            user: '',
            port: '30050',
            name: 'jiras'
        },
        app: {
            port: 3000,
            pvtKey: `${process.cwd()}/config/jwtRS256.key`,
            pubKey: `${process.cwd()}/config/jwtRS256.key.pub`
        }
    },
    hml: {
        db: {
            host: 'localhost',
            pwd: '',
            user: '',
            port: '30050',
            name: 'jiras'
        },
        app: {
            port: 8000,
            pvtKey: `${process.cwd()}/config/jwtRS256.key`,
            pubKey: `${process.cwd()}/config/jwtRS256.key.pub`
        }
    },
    prd: {
        db: {
            host: 'localhost',
            pwd: '',
            user: '',
            port: '30050',
            name: 'jiras'
        },
        app: {
            port: 1337,
            pvtKey: `${process.cwd()}/config/jwtRS256.key`,
            pubKey: `${process.cwd()}/config/jwtRS256.key.pub`
        }
    },
}