const Jwt = require('jsonwebtoken');
const Fs = require('fs');

exports.createToken = (credentials, cb) => {

    const secret = global.APP_CONF.pvtKey;

    const privateKey = Fs.readFileSync(secret).toString();

    Jwt.sign(credentials, privateKey, {algorithm: 'RS256'}, (err, token) => {

        if (err)
            return cb(err);

        return cb(null, token);

    });

};