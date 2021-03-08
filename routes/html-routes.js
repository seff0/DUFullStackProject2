const express = require("express");
const db = require("../models/");

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (router) => {
  router.get("/", (req, res) => {
    db.Destination.findAll().then((data) => {
      const dataObj = { destinations: data };
      return res.render("index", dataObj);
    });
  });

  router.get("/book", (req, res) => {
    res.render("selection", {});
  });

  router.get("/trip", (req, res) => { //this will show their trip, for now will redirect to where we want to test
    res.redirect("/favorites") //just for testing, send them to the favorites page
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
}

