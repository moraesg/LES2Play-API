'use strict';

module.exports = function(app) {
    var Game = require('../controllers/GameController');

    //game routes "for bunch of data"
    app.route('/games')
    .get(Game.list_all_games)
    .post(Game.insert_a_game);

    //game routes "for sigle data"
    app.route('/games/:gameId')
    .get(Game.read_a_game)
    .put(Game.update_a_game)
    .delete(Game.delete_a_game);

    //game routes "for bunch of data"
    app.route('/game/genres')
    .get(Game.list_all_genres);
};
