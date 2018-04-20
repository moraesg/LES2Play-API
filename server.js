var express = require('express');
    app = express();
    mongoose = require('mongoose');
    Game = require('./api/models/GameModel');
    bodyParser = require('body-parser');

    // Constants
    const PORT = 8080;
   // const HOST = '172.20.10.4';


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/LES2Play-DB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

    //Setting up routes
    gameRoutes = require('./api/routes/GameRoutes');
    gameRoutes(app);

//404 - url_not_found. //TODO: implementar arquivo para status separados.
app.use(function(req, res){
    res.status(404).send({ url: req.originalUrl + ' not found.'});
});

app.listen(PORT);
console.log(PORT);
//app.listen(PORT, HOST);
//console.log(`Running on http://${HOST}:${PORT}`);
