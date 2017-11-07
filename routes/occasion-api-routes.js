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

  app.get('/api/user/:id/occasion', function(req, res) {
    db.Occasion.findAll().then(function(dbOccasion) {
      res.send(dbOccasion);
    });
  });

  // app.get('/api/user/new', function(req, res) {
  //   // for handlebars
  // });

    // fauxData = [
    //   {UserId: req.params.id, eventId: 4, alcoholId: 17},
    //   {UserId: req.params.id, eventId: 4, alcoholId: 32},
    //   {UserId: req.params.id, eventId: 4, alcoholId: 43},
    //   {UserId: req.params.id, eventId: 4, alcoholId: 69}
    // ]
  

  app.post('/api/user/:id/event/:eventid/occasion', function(req, res) {
      
      // console.log('req.params.id: ', req.params.id);
      // console.log('req.params.eventid: ', req.params.eventid);
      // console.log('req.body: ', req.body);
      // console.log('req.body[0].name: ', req.body[0].name);
      // console.log('req.body[1].alcoholId: ', req.body[0].alcoholId);
      // console.log('req.body[2].alcoholId: ', req.body[1].alcoholId);
      // console.log('req.body[3].alcoholId: ', req.body[2].alcoholId);
      // console.log('req.body[0].eventId: ', req.body[0].eventId);

    // Write first to Occasions table
    db.Occasion.create({
      UserId: req.params.id,
      name: req.body[0].name,
    }).then(function(dbPost1) {
        // console.log('dbPost1.id: ', dbPost1.id);
        // console.log('req.body: ', req.body);

        // assemble new array of objects with alcoholIds for this new occasionId
        var newEventAlcohols = [];
        for (var i = 0; i < req.body.length; i++) {
          newEventAlcohols.push(
            {
              OccasionId: dbPost1.id,
              AlcoholId: req.body[i].alcoholId
            }
          );
        }
        // newEventAlcohols = JSON.stringify(newEventAlcohols);
          console.log('newEventAlcohols: ', newEventAlcohols);

      // Then write first to OccasionAlcohols model
      db.OccasionAlcohol.bulkCreate(newEventAlcohols)
      .then(function(dbOccasion) {
        // THIS WILL RENDER FINAL VIEW BELOW
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


  app.get('/api/user/:id/occasion/:occid', function(req, res) {
    db.Occasion.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbOccasion) {
      res.send(dbOccasion);
    });
  });
  

};
