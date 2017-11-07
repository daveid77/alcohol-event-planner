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

  // occasion page route]
  // app.get("/user/:id/event/:eventid/occasion", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/event-alcohol-selection.html"));
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
    var isLiquor = false;
    var isWine = false;
    var isBeer = false;
    for(var i = 0; i < objLength.length; i++) {
      if (objLength[i].beerBool){
        isBeer = true;
      } else if (objLength[i].wineBool) {
        isWine = true;
      }else if (objLength[i].liquirBool){
        isLiquor = true;
      }
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
    res.render("event_alcohol_landing", {
      liquirBool: isLiquor, 
      wineBool: isWine ,
      beerBool: isBeer,
      eventName: arrayOfAlcohol[0].eventName,
      alcohols: arrayOfAlcohol });
   });
  });

// alcohol page route
  app.get("/user/:id/events/:eventid/occasion/:occid", function(req, res) {
    res.render("compiled_list")
  });
};

