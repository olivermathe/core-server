'use strict';

const 
    Hapi    = require('hapi'),
    server  = new Hapi.Server(),
    builder = require('./engine/builder'),
    config  = require('./config/enverioment.config');

let env = process.argv[process.argv.length -1];

if (env === 'dev' || env === 'hml' || env === 'prd')
    global.env = env;
else
    global.env = 'dev';

global.APP_CONF = config[global.env].app;
global.DB_CONF = config[global.env].db;

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
