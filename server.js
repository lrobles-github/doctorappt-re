// Express setup
const express = require('express');
const app = express();



// Mongoose setup
const mongoose = require('mongoose');
require('./server/config/mongoose.js');



// Session setup
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  cookie: { maxAge: 60000 },
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  saveUninitialized: true,
  resave: true,
  secret: 'secret'
}));



//  Body-parser setup
var bodyParser = require('body-parser');
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));



// Static folder setup
const path = require('path');
app.use(express.static(path.join(__dirname, '../doctorappt-re/public/dist')));



// Routes configuration file
var routes_setter = require('./server/config/routes.js');
routes_setter(app);


// Server to Listen on Port 8000
app.listen(8000, function() {
    console.log("Server started. Listening on port 8000...");
})