const 
    jwt = require('jsonwebtoken'),
    fs = require('fs');

exports.createToken = (credentials, cb) => {

    const secret = global.APP_CONF.pvtKey;

    const privateKey = fs.readFileSync(secret).toString()

    jwt.sign(credentials, privateKey, {algorithm: 'RS256'}, (err, token) => {

        if (err)
            return cb(err);

        return cb(null, token);

    });

};