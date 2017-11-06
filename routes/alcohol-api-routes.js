var db = require('../models');

module.exports = function(app) {

// ROUTES NEEDED: 
// from https://docs.google.com/document/d/1VqkDJ1YUvPCzGqSYs7ZnI_6vBsjxu0gfSa8A1iFCaDA/

  app.get('/api/alcohol', function(req, res) {
    
    console.log("backend route hit");
    console.log(req.params);
    console.log(req.body);
    // db.Alcohol.findAll({


    // }).then(function(dbAlcohol) {
    //   res.send(dbAlcohol);
    // });
  });

  app.get('/api/alcohol/:id', function(req, res) {
    db.Alcohol.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAlcohol) {
      res.send(dbAlcohol);
    });
  });

  app.post('/api/alcohol', function(req, res) {
    db.Alcohol.create(req.body).then(function(dbAlcohol) {
      res.send(dbAlcohol);
      // res.redirect()
    });
  });

  app.delete('/api/alcohol/:id', function(req, res) {
    db.Alcohol.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAlcohol) {
      res.send(dbAlcohol);
    });
  });

};
