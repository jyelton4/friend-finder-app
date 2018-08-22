
//
var exphbs = require("express-handlebars");

//
// var root = "/Users/jacob.yelton/BootCamp/GitHub/jyelton4/friend-finder-app";

var questionBank = [
    {
        id: "1",
        question: "You find yourself with an unexpected afternoon without commitments...you spend it outside."
    }, 
    {
        id: "2",
        question: "You do not feel that animals products are necessary to maintain a high standard of living."
    }, 
    {
        id: "3",
        question: "You are scared of heights."
    }, 
    {
        id: "4",
        question: "You rate your success by 'number of nights spent sleeping on the ground.'"
    }, 
    {
        id: "5",
        question: "Time is more valuable than money."
    }, 
    {
        id: "6",
        question: "Attitude is everything."
    }, 
    {
        id: "7",
        question: "An object in motion stays in motion..."
    }, 
    {
        id: "8",
        question: "If you work hard, and are not a shithead, you are bound to succeeed."
    }, 
    {
        id: "9",
        question: "You would rather escort a spider outside than kill it."
    }, 
    {
        id: "10",
        question: "You should attempt to rise to the level of the mountain, not bring it down to you."
    }
]; 

//
module.exports = function(app) {

    //
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");
    
    //
    app.get("/", function(req, res) {
        // res.sendFile("app/public/home.html", { root: root });
        res.render("index");
    });

    //
    app.get("/survey", function(req, res) {
        // res.sendFile("app/public/survey.html", { root: root });
        res.render("survey", { questions: questionBank });
    });
};