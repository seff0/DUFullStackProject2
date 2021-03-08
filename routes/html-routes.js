const express = require("express");
const db = require("../models/");

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (router) => {
  router.get("/", (req, res) => {
    return res.render("index");
  });

  router.get("/book", (req, res) => {
    db.Destination.findAll({
      raw: true,
      attributes: ["id", "name", "img_link"],
    }).then((data) => {
      const dataObj = {
        destination: data,
      };
      res.render("selection", dataObj);
    });
  });

  router.get("/trip", (req, res) => {
    //this will show their trip, for now will redirect to where we want to test
    return res.render("trip"); //just for testing, send them to the favorites page
  });

  router.get("/end", (req, res) => {
    return res.render("end");
  });

  router.get("/favorites", (req, res) => {
    // need to query db for user's favorite destinations
    return res.render("favorites");
  });

  router.get("/contact", (req, res) => {
    return res.render("contact");
  });

  // app.get("/login", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/practiceindex.html"));
  // });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/trip.html"));
  // });
};
