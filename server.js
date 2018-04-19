var express = require('express');

    app = express();
    port = process.env.PORT || 3000;
    mongoose = require('mongoose');
    Game = require('./api/models/GameModel');
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/LES2Play-DB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

    gameRoutes = require('./api/routes/GameRoutes');
gameRoutes(app);

//404 - url_not_found. //TODO: implementar arquivo para status separados.
app.use(function(req, res){
    res.status(404).send({ url: req.originalUrl + ' not found.'});
});

app.listen(port);




console.log('LES2Play API server is running at port: ' + port);
