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
      attributes: ["id", "name", "img_link", "info_link"],
    }).then((data) => {
      const dataObj = {
        destination: data,
      };
      res.render("selection", dataObj);
    });
  });

  router.get("/trip", (req, res) => {
    // db.User.findAll({
    //   raw: true,
    //   where: {
    //     email: req.user.email,
    //   },
    // })
    //   .then((data) => {
    //     console.log(data);
    //     queries = data[0].current_trip.split(",").map(Number);
    //     return queries;
    //   })

    //   .then((queries) => {
    //     db.Destination.findAll({
    //       raw: true,
    //       where: {
    //         id: queries,
    //       },
    //     }).then((data) => {
    //       const dataObj = {
    //         destination: data,
    //       };
    //       res.render("trip", dataObj);
    //     });
    //   });

    db.Destination.findAll({
      raw: true,
    }).then((data) => {
      const dataObj = {
        destination: data,
      };
      res.render("trip", dataObj);
    });
  });

  router.get("/end", (req, res) => {
    return res.render("end");
  });

  router.get("/favorites", (req, res) => {
    if (req.user) {
      db.User.findAll({
        raw: true,
        where: {
          email: req.user.email,
        },
      })
        .then((data) => {
          console.log(data);
          queries = data[0].fav_locs.split(",").map(Number);
          return queries;
        })

        .then((queries) => {
          db.Destination.findAll({
            raw: true,
            where: {
              id: queries,
            },
          }).then((data) => {
            const dataObj = {
              destination: data,
            };
            res.render("favorites", dataObj);
          });
        });
    } else {
      res.redirect("/login");
    }
  });

  router.get("/contact", (req, res) => {
    return res.render("contact");
  });

  router.get("/login", function (req, res) {
    //   // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/favorites");
    }
    res.render("login", {});
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/trip.html"));
  // });
};
