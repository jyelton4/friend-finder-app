
//
$(function() {
    $(".btn").click(function() {
        var friend = {
            name: $("#name").val(), 
            photoLink: $("#photo-link").val(), 
            scores: []
        };
        scrapeScores(friend);
        validateFriend(friend);
    });

    function postNewFriend(friend) {
        $.ajax("app/data/friends", {
            type: "POST", 
            data: friend, 
        }).then((bestFriend) => {
            triggerMatchModal(bestFriend);
        }); 
    }

    function validateFriend(friend) {
        if (!friend.name || !friend.photoLink || friend.scores.indexOf("") !== -1) {
            triggerFormValModal();
        } else {
            postNewFriend(friend);
        };
    };

    function scrapeScores(friend) {

        for (i = 1; i < 11; i++) {
            var elem = $("select#q" + i);
            $('select').formSelect();
            var instance = M.FormSelect.getInstance(elem);
            var _d = instance.getSelectedValues();
            friend.scores.push(_d[0]);
        };

        return friend;

    };

    function triggerMatchModal(bestFriend) {
        $(".modal-content p").text("You matched with " + bestFriend.aggMatches.topMatchName + "!")
        $(".modal-content img").attr("src", bestFriend.aggMatches.topMatchPhotoLink);
        var instance = M.Modal.getInstance($("#matchModal"));
        instance.open();
    };

    function triggerFormValModal() {
        var instance = M.Modal.getInstance($("#formValModal"));
        instance.open();
    };

});
