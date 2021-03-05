const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// use sessions to keep track of user login sessions
app.use(
  session({ secret: "not very secret", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

const routes = require("./routes/html-routes.js");

app.use(routes);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
