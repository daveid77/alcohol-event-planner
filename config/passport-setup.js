var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var keys = require("./keys");
var User = require("../models/user.js")
var newUser;



// function passport(passport){

  // passport.serializeUser(function(user,done){
  //   done(null, user.id)
  // })

  // passport.deserializeUser(function(id, done){
  //   User.findById(id).then(function(user){
  //     done(null, user)
  //   })
  // })

passport.use(
  new GoogleStrategy({
     //options for the google strategy
     callbackURL : '/auth/google/redirect',
     clientID: keys.google.clientID,
     clientSecret: keys.google.clientSecret 
   }, (accessToken, refreshToken, profile, done) => {


     // passport callback function
     // console.log("passport callback has been fired!")
     console.log(profile.name.givenName);
     console.log(profile.id);
   //  newUser = {
   //    name: profile.name.givenName,
   //    googleID : profile.id
   //  }
   //  console.log(newUser);
   //  console.log("New User: ", newUser)
   })
  )
// 
// }
