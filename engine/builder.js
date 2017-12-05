'use strict';

const 
    routesReg = require('./routes.register'),
    mongoose  = require('mongoose'),
    jwt2      = require('hapi-auth-jwt2'),
    fs        = require('fs'),
    authFn    = require('./authValidateFn');

module.exports = (server, cb) => {

    authStrategy(server, authErr => {

        if (authErr)
            return cb(authErr);

        connectDatabase(dbErr => {

            if (dbErr)
                return cb(dbErr);

            loadRoutes(server, routeErr => {
                    
                if (routeErr)
                    return cb(routeErr);

                return cb();

            });

        });

    });

};

const loadRoutes = (server, cb) => {

    console.log("# Loading routes.")

    const routesPath = '/api/routes/**/*.routes.js'

    let config = {
        register: routesReg.register,
        options: {
            routes: [`${process.cwd()}${routesPath}`]
        }
    };

    server.register(config, err => {

        if (err)
            return cb(err);

        return cb();

    });

};

const connectDatabase = cb => {

    console.log("# Connecting database.");

    let conf = global.DB_CONF
    let auth = conf.user && conf.pwd ? `${conf.user}:${conf.pwd}@` : '';
    let uri = `mongodb://${auth}${conf.host}:${conf.port}/${conf.name}`;

    let options = {
        useMongoClient: true
    };

    mongoose.connect(uri, options);

    let db = mongoose.connection;
    
    db.on('connected', () => {  
        console.log(`# Connected at ${conf.host}:${conf.port}/${conf.name}.`);
        cb()
    }); 
    
    db.on('error', err => {  
        console.log('# Connection fail.');
        cb(err);
    });

};

const authStrategy = (server, cb) => {

    console.log("# Starting jwt strategy.")

    let secret = global.APP_CONF.pubKey;

    const options = {
        key: fs.readFileSync(secret).toString(),
        validateFunc: authFn,
        verifyOptions: {
            algorithms: ['RS256']
        }
    };

    server.register(jwt2, err => {
        
        if(err)
            return cb(err);
    
        server.auth.strategy('jwt', 'jwt', true, options);
    
        return cb(null);

    });

};

