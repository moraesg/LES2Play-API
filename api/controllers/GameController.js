'use strict';

var mongoose = require('mongoose');
    Game = mongoose.model('Games');
    
    //GET at /games
    exports.list_all_games = function(req, res) {
        Game.find({}, function(err, game) {
            if (err){
                res.send(err);
            } else {
                res.json(game);
            }
        });
    };

    //POST at /games
    exports.insert_a_game = function(req, res) {
        var new_game = new Game(req.body);
        new_game.save(function(err, game){
            if (err){
                res.send(err);
            }
                res.json(game);
        });
    };

    //GET at /games/:gameId
    exports.read_a_game = function(req, res) {
        Game.findById(req.params.gameId, function(err, game) {
            if (err){
                res.send(err);
            } else {
                res.json(game);
            }
        });
    };

    //PUT at /games/:gameId
    exports.update_a_game = function(req, res) {
        Game.findOneAndUpdate(
            {_id: req.params.gameId}, req.body, {new: true}, function(err, game){
                if (err){
                    res.send(err);
                } else {
                    res.json(game);
                }
        })
    }

    //DELETE at /games/:gameId
    exports.delete_a_game = function(req, res) {
        console.log(req.params.gameId);
        Game.remove({_id: req.params.gameId}, function(err, game){
            if (err){
                res.send(err);
            } else {
                res.json({message: "lero as fuck"});                
            }
        });
    };