'use strict';

module.exports = function(app) {
    var User = require('../controllers/UserController');

    //user routes "for bunch of data"
    app.route('/users')
    .get(User.list_all_users)
    .post(User.insert_a_user);

    //user routes "for sigle data"
    app.route('/users/:userId')
    .get(User.read_a_user)
    .put(User.update_a_user)
    .delete(User.delete_a_user);
};
