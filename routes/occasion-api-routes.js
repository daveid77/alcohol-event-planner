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
          
  app.post('/api/user/:id/occasion', function(req, res) {
    
      console.log('req.body: ', req.body);
      console.log('req.params.id: ', req.params.id);

    fauxData = [
      {UserId: req.params.id, eventId: 4, alcoholId: 17},
      {UserId: req.params.id, eventId: 4, alcoholId: 32},
      {UserId: req.params.id, eventId: 4, alcoholId: 43},
      {UserId: req.params.id, eventId: 4, alcoholId: 69}
    ]

    db.Occasion.bulkCreate(fauxData)
    .then(function(dbOccasion) {
      res.json(dbOccasion);
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
