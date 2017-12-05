'use strict';

module.exports = (decode, request, cb) => {

    if (!decode.email)
        return cb(null, false);

    if (!decode.pwd)
        return cb(null, false);

    return cb(null, true);

};