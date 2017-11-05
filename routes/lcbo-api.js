var db = require("../models");

module.exports = function(app) {

  app.post("/api/lcbo",function(req,res){

    console.log(req.body);

  });
}
