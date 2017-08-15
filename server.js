var express = require('express'),
  app = express(),
  port = process.env.port || 3000;
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/etabinfodb')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/userRoutes');
routes(app);


app.listen(port);

console.log('etabinfo-backend restfull server started on: ' + port);