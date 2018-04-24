var friends = require("../data/friends.js");


// Your`apiRoutes.js` file should contain two routes:
// var apiRoutes = function (app) {
module.exports = function (app) {
    //    * A GET route with the url`/api/friends`.This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });



    //    * A POST routes`/api/friends`.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.

    // Create New friends - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newFriend = req.body;

        // Using a RegEx Pattern to remove spaces from newfriend
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        // newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

        // console.log(newFriend);
        var newFriendSum = arraySum(newFriend.scores);
        var mostCompatibleFriend;
        var mostCompatibleDifference = 10000;

        for (var i = 0; i < friends.length; i++) {
            var friendsScore = arraySum(friends[i].scores);

            var difference = parseInt(newFriendSum) - parseInt(friendsScore);
            difference = Math.abs(difference);

            if (difference < mostCompatibleDifference) {
                mostCompatibleFriend = friends[i];
                mostCompatibleDifference = difference;

            }
        }


        friends.push(newFriend);

        res.json(mostCompatibleFriend);
        console.log("friend " + JSON.stringify(mostCompatibleFriend));
        console.log("friend " + mostCompatibleFriend.name);
        console.log("difference " + difference);






    });

}

function arraySum(scoreArray) {
    var userSum = 0;
    for (var i = 0; i < scoreArray.length; i++) {
        userSum += parseInt(scoreArray[i]);
    }
    return userSum;
}
// module.exports = apiRoutes;