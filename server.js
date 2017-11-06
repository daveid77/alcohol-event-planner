var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = ("method-override");
var exphbs = require("express-handlebars");

var authRoutes = require("./routes/auth-routes");
var passportSetup = require("./config/passport-setup");
var keys = require("./config/keys");

var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
<<<<<<< HEAD
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
=======
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/auth',authRoutes);
>>>>>>> master

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/event-api-routes.js")(app);
require("./routes/alcohol-api-routes.js")(app);
require("./routes/occasionalcohols-api-routes.js")(app);
require("./routes/occasion-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

