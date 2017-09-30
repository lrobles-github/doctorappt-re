// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.



var mongoose = require('mongoose');

module.exports = {

    set: function(req, res){
        console.log('====> | server | sessions.js (controller) | set');        
        console.log('=====>', req.params.name);
        req.session.name = req.params.name;
        console.log('====> setting session name to', req.session.name);
        res.json('session set');
    },
  
    get: function(req, res) {
        console.log('====> | server | sessions.js (controller) | get');                
        console.log('====> getting session name');
        console.log(req.session.name);
        res.json(req.session.name);
    },

    clear: function(req, res) {
        console.log('====> | server | sessions.js (controller) | clear');                
        console.log('===> clearing session name:');
        console.log(req.session.name);
        req.session.destroy();
        res.json('====> session deleted');
    }
}
