'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating game's base struct
var UserSchema = new Schema({
    name: {
        type: String,
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    type: {
        type: String
    }
});

module.exports = mongoose.model('Users', UserSchema);