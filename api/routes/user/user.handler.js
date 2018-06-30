const User = require('../../controllers/user.controller');
const Crypto = require('../../helpers/crypto.helper');
const Auth = require('../../helpers/auth.helper');
const Boom = require('boom');

exports.create = (payload, reply) => {

	Crypto.genPwd(payload.pwd, (pwdErr, hash) => {

		if (pwdErr)
			return reply(boom.boomify(pwdErr));

		payload.pwd = hash;

		User.create(payload, (createErr, result) => {

			if (createErr)
				return reply(boom.boomify(createErr));

			return reply(null, result);

		});
		
	});

};

exports.login = (payload, reply) => {

	let query = {email: payload.email};

	User.findOne(query, (findErr, result) => {

		if (findErr)
			return reply(boom.boomify(findErr));

		if (!result)
			return reply(null, 'NOT_FOUND');

		Crypto.validatePwd(payload.pwd, result.pwd, (validErr, isValid) => {

			if (validErr)
				return reply(boom.boomify(validErr));

			if (!isValid)
				return reply(null, 'INVALID');

			let credentials = {pwd: result.pwd, email: result.email};

			Auth.createToken(credentials, (tokenErr, token) => {

				if (tokenErr)
					return reply(boom.boomify(tokenErr));

				return reply(null, result).header('Authorization', token);

			});

		});

	});

};

exports.getById = (id, reply) => {

	User.getById(id, (err, result) => {

		if (err)
			return reply(boom.boomify(err));

		return reply(null, result);

	});

};