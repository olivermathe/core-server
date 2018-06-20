'use strict';

const 
	mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	pwd: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		sparse: true,
		index: true
	}
});

module.exports = mongoose.model('User', UserSchema);