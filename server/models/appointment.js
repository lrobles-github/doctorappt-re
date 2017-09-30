// This is the file that specifies the schema to be loaded by mongoose.
// This file is required by mongoose.js.
// We do not need to require this file in the controller, instead, the model itself is loaded from mongoose.
// There can be many models in the server/models folder.


var mongoose = require('mongoose');

var Schema = mongoose.Schema; // to make associations

// Appointment schema
var AppointmentSchema = new mongoose.Schema({
    date: Date,
    time: String,
    patient: String,
    complaint: String
   }, {timestamps:true});
   
   mongoose.model('Appointment', AppointmentSchema); // Set Schema
   var Appointment = mongoose.model('Appointment'); // Retrieve Schema
