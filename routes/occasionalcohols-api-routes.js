var db = require('../models');

module.exports = function(app) {

// ROUTES NEEDED: 
// from https://docs.google.com/document/d/1VqkDJ1YUvPCzGqSYs7ZnI_6vBsjxu0gfSa8A1iFCaDA/

  app.get('/api/user/:id/events/:eventid/alcohol”', function(req, res) {
    db.Event.findAll().then(function(dbOccasion) {
      res.send(dbOccasion);
    });
  });

  app.get('/api/user/:id/events/:eventid', function(req, res) {
    db.Event.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbOccasion) {
      res.send(dbOccasion);
    });
  });

  app.post('/api/user/:id/events/:eventid', function(req, res) {
    db.Event.create(req.body).then(function(dbOccasion) {
      res.send(dbOccasion);
    });
  });

  app.delete('/api/user/:id/events/:eventid', function(req, res) {
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbOccasion) {
      res.send(dbOccasion);
    });
  });

};
