const express = require("express");
const session = require("express-session");
const exphbs = require('express-handlebars');
// Requiring passport as we've configured it
const passport = require("./config/passport");

const app = express();
const PORT = process.env.PORT || 8080;

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// use sessions to keep track of user login sessions
app.use(
  session({ secret: "not very secret", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
// app.use([require("./routes/html-routes.js"), require("./routes/user-routes.js")]);
require("./routes/html-routes.js")(app);
require("./routes/user-routes.js")(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
