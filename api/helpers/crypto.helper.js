const Bcrypt = require('bcrypt');

const rounds = 13;

exports.genHash = pwd => {

    try {

        const salt = Bcrypt.genSaltSync(rounds);

        const hash = Bcrypt.hashSync(pwd, salt);

        return hash;

    } catch (error) {
        throw error;
    }

};

exports.validatePwd = (pwd, hash) => Bcrypt.compareSync(pwd, hash);
