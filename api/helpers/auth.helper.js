const Jwt = require('jsonwebtoken');
const Fs = require('fs');

exports.createToken = credentials => {

    try {

        const secret = global.APP_CONF.pvtKey;

        const privateKey = Fs.readFileSync(secret).toString();

        const token = Jwt.sign(credentials, privateKey, { algorithm: 'RS256' });

        return token;

    } catch (error) {
        throw error;
    }

};
