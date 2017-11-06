// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

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
  app.get("/user/:id/events/:eventid/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/event-alcohol-selection.html"));
  });

// alcohol page route
  app.get("/user/:id/occasion/:occid", function(req, res) {
    res.render("User_Selected_Alcohol")
  });

};

