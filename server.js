// dependencies, connection for local host/heroku, body-parser, routes

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cool = require('cool-ascii-faces');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require(`./app/routing/html-routes`)(app);
require(`./app/routing/api-routes`)(app);

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});