const express = require("express");
const router = express.Router();
const db = require("../models/");

const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", (req, res) => {
  db.Destination.findAll().then((data) => {
    const dataObj = { destinations: data };
    return res.render("index", dataObj);
  });
});


// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
// app.get("/members", isAuthenticated, function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/trip.html"));
// });
module.exports = router;
