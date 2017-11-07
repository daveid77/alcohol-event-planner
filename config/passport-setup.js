var GoogleStrategy = require('passport-google-oauth20');
var keys = require("./keys");
var db = require("../models/index.js");
var User = db.User;
// var newUser;



function passport(passport){

  passport.serializeUser(function(user,done){
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done){
    User.findById(id).then(function(user){
      done(null, user)
    })
  })

passport.use(
  new GoogleStrategy({
     //options for the google strategy
     callbackURL : '/auth/google/redirect',
     clientID: keys.google.clientID,
     clientSecret: keys.google.clientSecret 
   }, (accessToken, refreshToken, profile, done) => {
    process.nextTick(function(){
      User.find({name: profile.id}).then(function(queryUser){
        if(queryUser){
          return done(null,queryUser);
        } else {
          User.create({
            name: profile.displayName,
            googleID : profile.id.toString()
          }).then(function(newUser){
            return done(null,newUser);
          })
        }

      })
    })


     
   })
  )
// 
}
module.exports = passport
