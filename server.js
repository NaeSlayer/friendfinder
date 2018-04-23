// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// $("#submit").on("click", function (event) {
//     event.preventDefault();
//     $(".modal").modal("show");
// if (inputValidator($("#city-input").val()) === true) {
//     getInputs("city.html");
// } else $(".modal").modal("show")
// })


// function inputValidator(html) {
//     return /^[A-Za-z ]+$/.test(html);

// }



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});