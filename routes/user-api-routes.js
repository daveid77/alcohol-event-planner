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

  app.get('/api/user', function(req, res) {
    db.User.findAll().then(function(dbUser) {
      res.send(dbUser);
    });
  });

  app.get('/api/user/new', function(req, res) {
    // for handlebars
  });

  app.post('/api/user', function(req, res) {
    
    console.log(req.body);
    db.User.create({
      "name": req.body.name,
      "googleID": req.body.googleID
    })
    .then(function(dbPost) {
      res.json(dbPost.dataValues.id);
    });
  });

  app.put('/api/user/:id/edit', function(req, res) {
    db.User.create({
      where: {
        id: req.params.id
      }, 
      what: {
        username: req.body.username,
        password: req.body.password
      }
    }).then(function(dbUser) {
      res.send(dbUser);
    });
  });

  app.get('/api/user/:id', function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.send(dbUser);
    });
  });
  
};
