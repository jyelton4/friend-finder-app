
//
var Friend = function(name, link, scores) {
    this.name = name;
    this.photoLink = link;
    this.scores = scores;
    this.aggMatches = {
        scoresDiff: [], 
        matches: [], 
        topMatchName: "", 
        topMatchPhotoLink: ""
    }, 
    this.findMatch = (friend, bank) => {
        var matchScore = Math.max(...friend.aggMatches.scoresDiff);
        var matchIndex = friend.aggMatches.scoresDiff.indexOf(matchScore);
        var matchName = friend.aggMatches.matches[matchIndex].name;
        var matchPhoto = bank.find(function(obj) {
            return obj.name === matchName;
        });
        this.aggMatches.topMatchName = matchName;
        this.aggMatches.topMatchPhotoLink = matchPhoto.photoLink;
    }, 
    this.compareScores = (friend, bank) => {
        bank.forEach(function(obj) { 
            var matchScores = obj.scores;
            var newFriendScores = friend.scores;
            var diff = [];
            matchScores.forEach(function(int, index) {
                diff.push(Math.abs(int - newFriendScores[index]));
            })
            friend.aggMatches.scoresDiff.push(diff.reduce((a, b) => a + b, 0));
            friend.aggMatches.matches.push(
                {
                    name: obj.name, 
                    aggDiff: diff.reduce((a, b) => a + b, 0)
                });  
        });
        this.findMatch(friend, bank);
    };
};

// sessionStorage.setItem('new', JSON.stringify(friend));

module.exports = Friend;