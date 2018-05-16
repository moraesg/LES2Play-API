'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating game's base struct
var GameSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the game\'s name'
    },
    synopse: {
        type: String
    },
    tags: {
        type: String
    },
    price: {
        type: Number
    },
    releasedate: {
        type: Date
    },
    developer: {
        type: String
    },
    editor: {
        type: String
    },
    genre: {
        type: String
    },
    rating: {
        type: Number
    },
    imgsrc: {
        type: String
    }
});

module.exports = mongoose.model('Games', GameSchema);