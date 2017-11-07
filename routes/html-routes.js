// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {


// home screen render login page
  app.get('/', function(req, res) {
    res.render("landingpage")
  });
// event page route
  // app.get("/user/:id/events", function(req, res) {
  //   res.render("events", events);
  // });

  // occasion page route
  app.get("/user/:id/events/:eventid/occasion", function(req, res) {
   console.log(req.params.eventid);
   db.Event.findAll({
    where: {
      id: req.params.eventid
    },
    include:[db.Alcohol]
   }).then(function(dbEvents) {
    console.log(dbEvents[0].Alcohol[1]);
    var objLength = dbEvents[0].Alcohol
    for(var i = 0; i < objLength.length; i++){
      console.log(objLength[i].id);
      console.log(objLength[i].type);
      console.log(objLength[i].name);
      console.log(objLength[i].tag);
    }
   })
    res.render("event_alcohol_landing");
  });

// alcohol page route
  app.get("/user/:id/events/:eventid/occasion/:occid", function(req, res) {
    res.render("compiled_list")
  });

};

