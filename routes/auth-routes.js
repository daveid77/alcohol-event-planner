var db = require('../models');

var router = require('express').Router();
var passport = require('passport');

// auth with google
router.get("/google", passport.authenticate('google',{
  scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect/:id', passport.authenticate('google',{
  successRedirect : '/events',
  failureRedirect : '/google'
}));
  
// });
module.exports = router;