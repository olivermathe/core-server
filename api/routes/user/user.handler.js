'use strict';

const 
    user = require('../../controllers/user.controller'),
    crypto = require('../../helpers/crypto.helper'),
    auth = require('../../helpers/auth.helper'),
    boom = require('boom');

exports.create = (payload, reply) => {

    crypto.genPwd(payload.pwd, (pwdErr, hash) => {

        if (pwdErr)
            return reply(boom.boomify(err));

        payload.pwd = hash;

        user.create(payload, (createErr, result) => {

            if (createErr)
                return reply(boom.boomify(createErr));

            return reply(null, result);

        });
        
    });

};

exports.login = (payload, reply) => {

    let query = {email: payload.email};

    user.findOne(query, (findErr, result) => {

        if (findErr)
            return reply(boom.boomify(findErr));

        if (!result)
            return reply(null, 'NOT_FOUND');

        crypto.validatePwd(payload.pwd, result.pwd, (validErr, isValid) => {

            if (validErr)
                return reply(boom.boomify(validErr));

            if (!isValid)
                return reply(null, 'INVALID');

            let credentials = {pwd: result.pwd, email: result.email};

            auth.createToken(credentials, (tokenErr, token) => {

                if (tokenErr)
                    return reply(boom.boomify(tokenErr));

                return reply(null, result).header('Authorization', token);

            })

        });

    });

};

exports.getById = (id, reply) => {

    user.getById(id, (err, result) => {

        if (err)
            return reply(boom.boomify(err));

        return reply(null, result);

    });

};