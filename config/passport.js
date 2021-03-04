var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

//localstrategy refers to email/username based login. In this case, we want to use usernames
passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "email"
    },
    function(email, password, done) {
      // When a user tries to sign in this code runs
        db.User.findOne({
            where: {
                email: email
            }
        }).then(function(dbUser) {
            // If there's no user with the given name
            if (!dbUser) {
                return done(null, false, {
                    message: "User does not exist."
                });
            }
            // If there is a user with the given name, but the password the user gives us is incorrect
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            // If none of the above, return the user
            return done(null, dbUser);
        });
    }
));
  
//boilerplate to make passport work
passport.serializeUser(function(user, cb) {
    cb(null, user);
});
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});
  
// Exporting our configured passport
module.exports = passport;