const Fs = require('fs');
const Mongoose = require('mongoose');

module.exports = async server => {
    
    try {
        
        await authStrategy(server);

        await connectDatabase();

        await loadRoutes(server);

    } catch (error) {
        throw error;
    }

};	

const loadRoutes = async server => {

    console.info('# Loading routes.');

    let routesPath = '/api/routes/**/*.routes.js';

    let config = {
        register: require('./routes.register').register,
        options: {
            routes: [`${process.cwd()}${routesPath}`]
        }
    };

    return server.register(config);

};

const connectDatabase = async () => new Promise((resolve, reject) => {

    console.info('# Connecting database.');

    let conf = global.DB_CONF;
    let auth = conf.user && conf.pwd ? `${conf.user}:${conf.pwd}@` : '';
    let uri = `mongodb://${auth}${conf.host}:${conf.port}/${conf.name}`;

    let options = {
        useMongoClient: true
    };

    Mongoose.connect(uri, options);
    
    let db = Mongoose.connection;

    db.on('connected', () => {
        console.info(`# Connected at ${conf.host}:${conf.port}/${conf.name}.`);
        return resolve(db);
    });
    
    db.on('error', err => {
        console.error('# Connection fail.');
        return reject(err);
    });

});

const authStrategy = async server => new Promise((resolve, reject) => {
        
    console.info('# Starting jwt strategy.');

    let secret = global.APP_CONF.pubKey;
    
    let validateFunc = (decode, request, cb) => cb(null, !decode.email || !decode.pwd ? false : true);

    let options = {
        key: Fs.readFileSync(secret).toString(),
        validateFunc,
        verifyOptions: {
            algorithms: ['RS256']
        }
    };

    server.register(require('hapi-auth-jwt2'))
        .then(() => {
            server.auth.strategy('jwt', 'jwt', options);
            return resolve();
        })
        .catch(err => reject(err));

});

