'use strict';

const 
    Hapi    = require('hapi'),
    server  = new Hapi.Server(),
    builder = require('./engine/builder'),
    config  = require('./config/environment.config');

let env = process.env.NODE_ENV;

global.APP_CONF = config[env].app;
global.DB_CONF = config[env].db;

server.connection({port: global.APP_CONF.port});

builder(server, error => {

    if (error)
        throw error;

    server.start(err => {
        
        if (err)
            throw err;

        console.log(`# Server running at: ${server.info.uri}`);
        console.log();
    
    });

});
