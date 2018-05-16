var express = require('express');
    app = express();
    mongoose = require('mongoose');
    Game = require('./api/models/GameModel');
    User = require('./api/models/UserModel');
    bodyParser = require('body-parser');

    // Constants
    const PORT = 8080;
   // const HOST = '172.20.10.4';


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/LES2Play')
    .then(() => { // if all is ok we will be here
        console.log('server just connected.');
    })
    .catch(err => { // we will not be here...
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

    //Setting up routes
    gameRoutes = require('./api/routes/GameRoutes');
    gameRoutes(app);
    userRoutes = require('./api/routes/UserRoutes');
    userRoutes(app);

//404 - url_not_found. //TODO: implementar arquivo para status separados.
app.use(function(req, res){
    res.status(404).send({ url: req.originalUrl + ' not found.'});
});

app.listen(PORT);
console.log(PORT);
//app.listen(PORT, HOST);
//console.log(`Running on http://${HOST}:${PORT}`);
