// This is the file that connects to the database and loads all of the models.
// Here we specify a database to connect to and the path where all of our models are.
// This file is required by server.js.


// Mongoose
var mongoose = require('mongoose');

// require the fs module for loading model files
var fs = require('fs');

// require path for getting the models path
var path = require('path');
mongoose.connect('mongodb://localhost/doctorappt_db', {useMongoClient: true});
mongoose.Promise = global.Promise;

// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});
