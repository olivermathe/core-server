const Glob = require('glob');
const Pkg = require('../package.json');

exports.register = (server, options, next) => {

    try {

        const globOptions = {
            nosort: true,
            nodir: true,
            strict: true,
        };

        let files = [];
        let routes = null;

        options.routes.forEach(route => files = files.concat(Glob.sync(route, globOptions))); //eslint-disable-line

        files.forEach(path => {

            routes = require(path); //eslint-disable-line

            routes.forEach(route => server.route(route));

        });

        next();

    } catch (error) {
        throw error;
    }

};

exports.register.attributes = {
    multiple: false,
    pkg: Pkg,
};
