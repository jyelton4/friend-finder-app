
//
var Friend = require("../app.js");

//
module.exports = function(app, data) {
    
    //
    app.get("/app/data/friends", function(req, res) {
        res.json(data);
    });

    //
    app.post("/app/data/friends", function(req, res) {
        var newFriend = req.body;
        data.push(newFriend);
        var friend = new Friend(newFriend.name, newFriend.photoLink, newFriend.scores);
        friend.compareScores(friend, data);
        res.json(friend);
    });

};