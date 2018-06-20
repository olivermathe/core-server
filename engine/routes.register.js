'use strict';

const glob = require('glob');

exports.register = (server, options, next) => {

	try {

		let globOptions = {
			nosort: true,
			nodir: true,
			strict: true
		};

		let files = [];
		let routes = null;

		options.routes.forEach(route => files = files.concat(glob.sync(route, globOptions)));

		files.forEach(path => {

			routes = require(path);

			routes.forEach(route => server.route(route));

		});

		next();

	} catch (error) {
		throw error;
	}

};

exports.register.attributes = {
	multiple: false,
	pkg: require('../package.json')
};