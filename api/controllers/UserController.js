'use strict';

var mongoose = require('mongoose');
    User = mongoose.model('Users');
    
    //GET at /users
    exports.list_all_users = function(req, res) {
        User.find({}, function(err, user) {
        if (err){
            res.send(err);
        } else {
            res.json(user);
        }
        });
    };

    //POST at /users
    exports.insert_a_user = function(req, res) {
        var new_user = new User(req.body);
        new_user.save(function(err, user){
            if (err){
                res.send(err);
            } else {
                res.json(user);
            }
        });
    };

    //GET at /users/:userId
    exports.read_a_user = function(req, res) {
        User.findById(req.params.userId, function(err, user) {
            if (err){
                res.send(err);
            } else {
                res.json(user);
            }
        });
    };

    //PUT at /users/:userId
    exports.update_a_user = function(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId}, req.body, {new: true}, function(err, user){
                if (err){
                    res.send(err);
                } else {
                    res.json(user);
                }
        })
    }

    //DELETE at /users/:userId
    exports.delete_a_user = function(req, res) {
        User.remove({_id: req.params.userId}, function(err, user){
            if (err){
                res.send(err);
            } else {
                send.json({message: "User successfully deleted"});
            }
        });
    };