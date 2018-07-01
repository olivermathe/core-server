const Fs = require('fs');
const Mongoose = require('mongoose');
const Jwt = require('hapi-auth-jwt2');
const RoutesRegister = require('./routes.register');

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

    const routesPath = '/api/routes/**/*.routes.js';

    const config = {
        register: RoutesRegister.register,
        options: {
            routes: [`${process.cwd()}${routesPath}`],
        },
    };

    await server.register(config);

};

const connectDatabase = () => new Promise((resolve, reject) => {

    console.info('# Connecting database.');

    const conf = global.DB_CONF;
    const auth = conf.user && conf.pwd ? `${conf.user}:${conf.pwd}@` : '';
    const uri = `mongodb://${auth}${conf.host}:${conf.port}/${conf.name}`;

    const options = {
        useMongoClient: true,
    };

    Mongoose.connect(uri, options);

    const db = Mongoose.connection;

    db.on('connected', () => {
        console.info(`# Connected at ${conf.host}:${conf.port}/${conf.name}.`);
        return resolve(db);
    });

    db.on('error', err => {
        console.error('# Connection fail.');
        return reject(err);
    });

});

const authStrategy = async server => {

    try {

        console.info('# Starting jwt strategy.');

        const secret = global.APP_CONF.pubKey;

        const validateFunc = (decode, request, cb) => cb(null, decode.email && decode.pwd);

        const options = {
            key: Fs.readFileSync(secret).toString(),
            validateFunc,
            verifyOptions: {
                algorithms: ['RS256'],
            },
        };

        await server.register(Jwt);

        server.auth.strategy('jwt', 'jwt', options);

    } catch (error) {
        throw error;
    }

};
