// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.



var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');
var sessions = require('../controllers/sessions.js');


module.exports = {

  create: function (req, res) {
    console.log('====> | server | appointments.js (controller) | create', req.body);
    console.log("===> req.session.name", req.session.name);
    var appointment = new Appointment({
      date: req.body.date,
      time: req.body.time,
      patient: req.session.name,
      complaint: req.body.complaint
    });

      appointment.save(function (err, data) {
          if (err) {
            console.log("Appointment was not created...");
            res.json(err);
          } else {
            res.json(data);
          }
    })
  },

  
  show: function(req, res) {
    console.log('====> | server | appointments.js (controller) | show');    
    Appointment.find({ date: { $gt: Date.now() } }, function(err, appointments) {
      res.json(appointments);   
    }).sort( { date: 1 });
  },


  find: function(req, res) {
    console.log('====> | server | appointments.js (controller) | find()');        
    Appointment.findById(req.params._id, function(err, appointment) {
      res.json(appointment);  
    })
  },


  delete: function(req, res) {
    console.log('====> | server | appointments.js (controller) | delete()', req.params._id);
    Appointment.findByIdAndRemove(req.params._id, function(err, response) {
      res.json(response);
  })

  }

}
