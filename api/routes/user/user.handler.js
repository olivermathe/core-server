const Boom = require('boom');
const User = require('../../controllers/user.controller');
const Crypto = require('../../helpers/crypto.helper');
const Auth = require('../../helpers/auth.helper');

exports.create = async (payload, reply) => {

    try {

        const user = payload;

        const hash = await Crypto.genHash(payload.pwd);

        user.pwd = hash;

        const result = await User.create(user);

        return reply(null, result);

    } catch (error) {
        console.error(error);
        return reply(Boom.boomify(error));
    }

};

exports.login = async (payload, reply) => {

    try {

        const result = await User.findOne({ email: payload.email });

        if (!result)
            return reply(null, 'NOT_FOUND');

        const isValidPwd = Crypto.validatePwd(payload.pwd, result.pwd);

        if (!isValidPwd)
            return reply(null, 'INVALID');

        const credentials = {
            pwd: result.pwd,
            email: result.email,
        };

        const token = Auth.createToken(credentials);

        return reply(null, result).header('Authorization', token);

    } catch (error) {
        console.error(error);
        return reply(Boom.boomify(error));
    }

};

exports.getById = async (id, reply) => {

    try {

        const result = await User.getById(id);

        return reply(null, result);

    } catch (error) {
        console.error(error);
        return reply(Boom.boomify(error));
    }

};
