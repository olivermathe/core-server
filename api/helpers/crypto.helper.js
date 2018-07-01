const Bcrypt = require('bcrypt');

const rounds = 13;

exports.genPwd = pwd => new Promise((resolve, reject) => {

    Bcrypt.genSalt(rounds, (saltErr, salt) => {

        if (saltErr)
            return reject(saltErr);

        Bcrypt.hash(pwd, salt, (hashErr, hash) => {

            if (hashErr)
                return reject(hashErr);

            return resolve(hash);

        });

    });

});

exports.validatePwd = (pwd, hash) => Bcrypt.compareSync(pwd, hash);