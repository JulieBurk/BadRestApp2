// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Reservation (DATA)
// =============================================================
var reservation = [{
  id: 4,
  name: "gerry",
  phonenumber: 5555555555,
  email: "email@email.com",
  uniqueid: 5
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Bad Resteraunt")
  res.sendFile(path.join(__dirname, "index.html"));
});

// Search for specific reservation (or all reservation) - provides JSON
app.get("/reservation", function(req, res) {
  var chosen = req.params.reservation;

app.get("/tables", function(req, res) {
  res.sendFiles(path.join(_dirname, "view-tables.html"));

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < reservation.length; i++) {
      if (chosen === reservation[i].routeName) {
        return res.json(reservation[i]);
      }
    }
    return res.json(false);
  }
  return res.json(reservation);
});

// Create New reservation - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newreservation = req.body;

  console.log(newreservation);

  // We then add the json the user sent to the character array
  reservation.push(newreservation);

  // We then display the JSON to the users
  res.json(newreservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});