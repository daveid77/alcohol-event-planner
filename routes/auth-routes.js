var db = require('../models');

var router = require('express').Router();
var passport = require('passport');

//auth logout
router.get("/logout", (req,res)=>{
  //handle with passport
  res.send("logging out")
})

router.get("/login", (req,res)=>{
  //handle with passport
  res.send("logging in with google")
})

// auth with google
router.get("/google", passport.authenticate('google',{
  scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req,res)=>{
  res.send("you've reached the callback URI");
});
module.exports = router;