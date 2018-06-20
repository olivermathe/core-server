const bcrypt = require('bcrypt');

const rounds = 13;

exports.genPwd = (pwd, cb) => {

	bcrypt.genSalt(rounds, (saltErr, salt) => {

		if (saltErr)
			return cb(saltErr);

		bcrypt.hash(pwd, salt, (hashErr, hash) => {

			if (hashErr)
				return cb(hashErr);

			return cb(null, hash);

		});

	});

};

exports.validatePwd = (pwd, hash, cb) => {
	
	bcrypt.compare(pwd, hash, (err, res) => {

		if (err)
			return cb(err);

		return cb(null, res);

	});

};