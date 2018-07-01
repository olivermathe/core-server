const Handler = require('./user.Handler');
const Joi = require('joi');

module.exports = [
    {
        method: 'PUT',
        path: '/user/create',
        handler: (request, reply) => Handler.create(request.payload, reply),
        config: {
            description: 'Create new user',
            // auth: 'jwt',
            validate: {
                payload: {
                    name: Joi.string().required(),
                    pwd: Joi.string().required(),
                    email: Joi.string().email().required()
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/user/login',
        handler: (request, reply) => Handler.login(request.payload, reply),
        config: {
            description: 'Login',
            auth: false,
            validate: {
                payload: {
                    pwd: Joi.string().required(),
                    email: Joi.string().email().required()
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/user/{id}',
        handler: (request, reply) => Handler.getById(request.params.id, reply),
        config: {
            description: 'Create new user',
            auth: 'jwt'
        }
    }

];