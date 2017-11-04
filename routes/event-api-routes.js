var db = require('../models');

module.exports = function(app) {

// ROUTES NEEDED: 
// from https://docs.google.com/document/d/1VqkDJ1YUvPCzGqSYs7ZnI_6vBsjxu0gfSa8A1iFCaDA/

  app.get('/api/event', function(req, res) {
    db.Event.findAll().then(function(dbEvent) {
      res.send(dbEvent);
    });
  });

  app.get('/api/event/:id', function(req, res) {
    db.Event.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvent) {
      res.send(dbEvent);
    });
  });

  app.post('/api/event', function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.send(dbEvent);
    });
  });

  app.delete('/api/event/:id', function(req, res) {
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvent) {
      res.send(dbEvent);
    });
  });

};
