const db = require("../models");
// Requiring our passport as we've configured it
const passport = require("../config/passport");

module.exports = (app) => {
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });
    
    //sign up a new user
    app.post("/api/signup", function(req, res) {
        db.User.create({
            name: req.body.name,
            password: req.body.password
        })
        .then(function() {
            console.log("Logging in");
            res.redirect(307, "/user/login");
        })
        .catch(function(err) {
            
            res.status(401).json(err);
        });
    });
    
    
    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });
    
    //get the user's current trip
    app.get("/api/current_trip", function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's current trip
            // trip should be an array of ids (each id corresponding to a location) separated by commas w/o spaces
            // eg "1,3,5,6"
            res.json({
                current_trip: req.user.current_trip
            });
        }
    });
    
    //get the user's favorite locations
    app.get("/api/fav_locs", function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's favorite locations
            // fav_locs should be an array of ids (each id corresponding to a location) separated by commas w/o spaces
            // eg "1,3,5,6"
            res.json({
                fav_locs: req.user.fav_locs
            });
        }
    });
};
