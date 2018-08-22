
//
const express = require("express");
const bodyparser = require("body-parser");

//
var friends = require("./app/data/friends");

//
var app = express();
var PORT = 8080;

//
app.use(express.static("public"));

//
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app, friends.appData);

//
app.listen(process.env.PORT || PORT, function() {
    console.log("Listening on port 8080...");
});
