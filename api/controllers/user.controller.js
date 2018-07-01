const User = require('../models/user.model');

exports.create = body => new Promise((resolve, reject) => {

    User.create(body, (err, result) => {

        if (err)
            return reject(err);

        return resolve(result);

    });

});

exports.findOne = query => new Promise((resolve, reject) => {
    
    User.findOne(query, (err, result) => {

        if (err)
            return reject(err);

        return resolve(result);

    });
    
});

exports.getById = id => new Promise((resolve, reject) => {

    User.findById(id, (err, result) => {

        if (err)
            return reject(err);

        return resolve(result);

    });

});