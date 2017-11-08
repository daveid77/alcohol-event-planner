// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

// ROUTES NEEDED: 
// from https://docs.google.com/document/d/1VqkDJ1YUvPCzGqSYs7ZnI_6vBsjxu0gfSa8A1iFCaDA/


  app.post('/api/user/:id/event/:eventid/occasion', function(req, res) {

    // Write first to Occasions table
    db.Occasion.create({
      UserId: req.params.id,
      name: req.body[0].name,
    }).then(function(dbPost1) {

        // Assemble new array of objects with alcoholIds for this new occasionId
        var newEventAlcohols = [];
        for (var i = 0; i < req.body.length; i++) {
          newEventAlcohols.push(
            {
              OccasionId: dbPost1.id,
              AlcoholId: req.body[i].alcoholId
            }
          );
        }

      // Then write first to OccasionAlcohols model
      db.OccasionAlcohol.bulkCreate(newEventAlcohols)
      .then(function(dbOccasion) {

        res.json(dbOccasion);

      });
    });

  });

  app.put('/api/user/:id/occasion/edit', function(req, res) {

    db.Occasion.create({
      where: {
        id: req.params.id
      }, 
      what: {
        eventId: req.body.eventId,
        alcoholId: req.body.alcoholId
      }
    }).then(function(dbOccasion) {
      res.send(dbOccasion);
    });

  });


  app.get('/api/user/:id/event/:eventid/occasion/:occid', function(req, res) {

    db.OccasionAlcohol.findAll({
      where: {
        OccasionId: req.params.occid
      }
      // include:[db.Alcohol]
    }).then(function(dbOccasion) {
      // create an array of IDs
      var alcoholsArr = [];
      for(var i = 0; i < dbOccasion.length; i++) {
        alcoholsArr.push(dbOccasion[i].AlcoholId);
      }
      // Do a find All where the ID's match in Alcochol table
      db.Alcohol.findAll({
        where:{
          id: alcoholsArr
        },
      }).then(function(alcoholResult){
        
        var alcoholResult = alcoholResult;

        var arrayOfAlcohol = [];
        var isLiquor = false;
        var isWine = false;
        var isBeer = false;

        for(var i = 0; i < alcoholResult.length; i++) {
          if (alcoholResult[i].beerBool){
            isBeer = true;
          } else if (alcoholResult[i].wineBool) {
            isWine = true;
          } else if (alcoholResult[i].liquirBool){
            isLiquor = true;
          }

          var objOfAlcohol = {
            "id":alcoholResult[i].id,
            "type":alcoholResult[i].type,
            "name":alcoholResult[i].name,
            "tag":alcoholResult[i].tag,
            "image": alcoholResult[i].image,
            "beerBool":alcoholResult[i].beerBool,
            "liquirBool":alcoholResult[i].liquirBool,
            "wineBool":alcoholResult[i].wineBool,
            "eventName": req.params.eventid
          };

          arrayOfAlcohol.push(objOfAlcohol);

        };

        res.render("compiled_list", {
          liquirBool: isLiquor, 
          wineBool: isWine ,
          beerBool: isBeer,
          eventName: arrayOfAlcohol[0].eventName,
          alcohols: arrayOfAlcohol 
        });

      });
      
    });

  });

};
