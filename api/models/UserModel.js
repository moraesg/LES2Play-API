'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating user's base struct
var UserSchema = new Schema({
    email: {
        type: String,
        required: 'Enter the user\'s email'
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    type: {
        type: Number
    }
});

module.exports = mongoose.model('Users', UserSchema);