// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var ApiRoutes = require("app/routing/apiRoutes.js");
var HtmlRoutes = require("app/routing/htmlRoutes.js");
var Friends = require("app/data/friends/js");


var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());