const User = require('../models/user.model');

exports.create = (body, cb) => {

    try {

        User.create(body, (err, result) => {

            if (err)
                return cb(err);

            return cb(null, result);

        });

    } catch (error) {
        return cb(error);    
    }

};

exports.findOne = (query, cb) => {

    try {
        
        User.findOne(query, (err, result) => {

            if (err)
                return cb(err);

            return cb(null, result);

        });

    } catch (error) {
        return cb(error);
    }
    
};

exports.getById = (id, cb) => {
    
    try {

        User.findById(id, (err, result) => {

            if (err)
                return cb(err);

            return cb(null, result);

        });

    } catch (error) {
        return cb(error);    
    }

};