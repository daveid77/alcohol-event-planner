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

var url="";

passport.use(
  new GoogleStrategy({
     //options for the google strategy
     callbackURL : url,
     clientID: keys.google.clientID,
     clientSecret: keys.google.clientSecret 
   }, (accessToken, refreshToken, profile, done) => {
    process.nextTick(function(){
      console.log(profile.id)
      User.find({name: profile.displayName}).then(function(queryUser){
        if(queryUser){
<<<<<<< HEAD
          console.log(queryUser);
          url = '/auth/google/redirect/' + queryUser.User[0].id
          return done(null,queryUser);
=======
            console.log('queryUser: ', queryUser);
          // return done(null,queryUser);
>>>>>>> master
        } else {
          User.create({
            name: profile.displayName,
            // googleID : profile.id
          }).then(function(newUser){
<<<<<<< HEAD
            console.log("New User is here ", newUser);
=======
              console.log('newUser: ', newUser);
>>>>>>> master
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
