
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String
   }, {timestamps:true});

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'