const 
	handler = require('./user.handler'),
	joi = require('joi');

module.exports = [
	{
		method: 'PUT',
		path: '/user/create',
		handler: (request, reply) => handler.create(request.payload, reply),
		config: {
			description: 'Create new user',
			auth: 'jwt',
			validate: {
				payload: {
					name: joi.string().required(),
					pwd: joi.string().required(),
					email: joi.string().email().required()
				}
			}
		}
	},
	{
		method: 'POST',
		path: '/user/login',
		handler: (request, reply) => handler.login(request.payload, reply),
		config: {
			description: 'Login',
			auth: false,
			validate: {
				payload: {
					pwd: joi.string().required(),
					email: joi.string().email().required()
				}
			}
		}
	},
	{
		method: 'GET',
		path: '/user/{id}',
		handler: (request, reply) => handler.getById(request.params.id, reply),
		config: {
			description: 'Create new user',
			auth: 'jwt'
		}
	}

];