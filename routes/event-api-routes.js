var db = require('../models');

module.exports = function(app) {

// ROUTES NEEDED: 
// from https://docs.google.com/document/d/1VqkDJ1YUvPCzGqSYs7ZnI_6vBsjxu0gfSa8A1iFCaDA/

  app.get('/user/:id/events', function(req, res) {
    
    db.Event.findAll({}).then(function(dbEvent) {
      
      var events = [];

      for(var i = 0; i < dbEvent.length; i++){
        var obj = {
          "id": dbEvent[i].dataValues.id,
          "type":dbEvent[i].dataValues.type
        }
        events.push(obj);
      };

       db.Occasion.findAll().then(function(dbOccasion) {
        res.render("events", {eventObj: events, occasion:dbOccasion});
        });

    });
  });

  app.get('/api/event/:id', function(req, res) {
    db.Event.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.post('/api/event', function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
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
