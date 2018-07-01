const Mongoose = require('mongoose');

const { Schema } = Mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    pwd: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        sparse: true,
        index: true,
    },
});

module.exports = Mongoose.model('User', UserSchema);
