'use strict';

var mongoose = require('mongoose');
    User = mongoose.model('Users');
    
    //GET at /users
    exports.list_all_users = function(req, res) {
        console.log('alan')
        User.find({}, function(err, user) {
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).json(user);
        }
        });
    };

    //POST at /users
    exports.insert_a_user = function(req, res) {
        var new_user = new User(req.body);
        new_user.save(function(err, user){
            if (err){
                res.status(500).send(err);
            } else {
                res.status(201).json({"id": new_user._id,
                                      "email": new_user.email,
                                      "username": new_user.username,
                                      "type": new_user.type});      
            }
        });
    };

    //GET at /users/:userId
    exports.read_a_user = function(req, res) {
        User.findById(req.params.userId, function(err, user) {
            if (err){
                res.status(500).send(err);
            } else {
                res.status(200).json(user);
            }
        });
    };

    //PUT at /users/:userId
    exports.update_a_user = function(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId}, req.body, {new: true}, function(err, user){
                if (err){
                    res.status(500).send(err);
                } else {
                    res.status(200).json(user);
                }
        })
    }

    //DELETE at /users/:userId
    exports.delete_a_user = function(req, res) {
        User.remove({_id: req.params.userId}, function(err, user){
            if (err){
                res.status(500).send(err);
            } else {
                res.status(200).json({message: "User deleted."});
            }
        });
    };

    //Login
    exports.login = function(req, res) {
        User.findOne({username: req.body.username}, function(err, user){
            if(err){
                res.status(500).send(err);
            } else {
                if(req.body.password == user.password)
                {
                    res.status(200).json(user);
                } else {
                    res.status(401).json({error: "username or password incorrect."})    
                }
            }
        })
    }