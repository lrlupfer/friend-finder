// API routes

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
    // GET route to show all friends data
    app.get("/api/friends", function(request, response) {
        response.json(friends);
    });
    // POST route for survey results and friends compatibility
    app.post("/api/friends", function(request, response) {
        var newFriend = request.body;
        friends.push(newFriend);
        response.json(newFriend);
    });
}