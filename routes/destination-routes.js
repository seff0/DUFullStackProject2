const db = require("../models");

module.exports = (app) => {
  // all get/post routes will go here

  // route to select all destinations
  app.get("/api/destinations", (req, res) => {
    db.Destination.findAll({}).then((dbDestination) => res.json(dbDestination));
  });

  // route to select destinations with matching ID. need to make sure we can grab multiple IDs to construct the trip
  app.get("/api/destinations:id", (req, res) => {
    db.Destination.findAll({
      where: {
        id: req.params.id,
      },
    }).then((dbDestination) => res.json(dbDestination));
  });
};
