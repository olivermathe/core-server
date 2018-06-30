const { Server } = require('hapi');
const Builder 	 = require('./engine/builder');
const Config 	 = require('./config/environment.config');

const env = process.env.NODE_ENV || 'development';

global.APP_CONF = Config[env].app;
global.DB_CONF = Config[env].db;

(async () => {

    try {

        const server = new Server();
        
        server.connection({port: global.APP_CONF.port});

        await Builder(server);

        await server.start();

        console.info(`# Server running at: ${server.info.uri}`,'/n');

    } catch (error) {
        throw error;
    }

})();