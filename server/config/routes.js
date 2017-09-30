// require controllers
var users = require('../controllers/users.js');
var appointments = require('../controllers/appointments.js');
var sessions = require('../controllers/sessions.js');


module.exports = function (app) {

    console.log('====> | server | routes.js');
    
    // users
    app.post("/users", users.create);

    
    
    // appointments
    app.get("/appointments/:_id", appointments.find);

    app.post("/appointments", appointments.create); 

    app.get("/appointments", appointments.show);

    app.delete("/appointments/:_id", appointments.delete);



    // session
    app.get("/setSession/:name", sessions.set);
    
    app.get('/getSession', sessions.get);

    app.get('/deleteSession', sessions.clear);


    
    // not found
    // app.all("*", (req,res,next) => {
    //     res.sendFile(path.resolve("../public/dist/index.html"))
    // });


}