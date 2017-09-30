// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

  create: function(req, res) {
    console.log('====> | server | users.js (controller) | create', req.body.name);
    var user = new User({name:req.body.name});
    req.session.name = req.body.name;
    
    user.save(function(err, data) {
      if(err){
        console.log("something went wrong");
        res.json(err);
      } else {
        res.json(data);
      }
    })
  }
}
