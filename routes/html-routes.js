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
   }).then(function(dbAlcohols) {
    // console.log(dbAlcohols[0].Alcohol[1]);
    // console.log(dbAlcohols);
    console.log(dbAlcohols[0].type);
    var eventName = dbAlcohols[0].type;
    var objLength = dbAlcohols[0].Alcohol;
    var arrayOfAlcohol = [];
    for(var i = 0; i < objLength.length; i++) {
      
      var objOfAlcohol = {
        "id":objLength[i].id,
        "type":objLength[i].type,
        "name":objLength[i].name,
        "tag":objLength[i].tag,
        "image": objLength[i].image,
        "beerBool":objLength[i].beerBool,
        "liquirBool":objLength[i].liquirBool,
        "wineBool":objLength[i].wineBool,
        "eventName": eventName
      };
      arrayOfAlcohol.push(objOfAlcohol);
    };
    console.log(arrayOfAlcohol);
    res.render("event_alcohol_landing", {
      eventName: arrayOfAlcohol[0].eventName,
      alcohols: arrayOfAlcohol });
   });
  });

// alcohol page route
  app.get("/user/:id/events/:eventid/occasion/:occid", function(req, res) {
    res.render("compiled_list")
  });
};

