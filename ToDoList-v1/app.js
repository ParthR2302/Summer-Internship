//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extented: true}));

app.set('view engine', 'ejs');

var items = ["Go Buy Food", "Cook Food", "Eat Food"];

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();

  var option = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  var day = today.toLocaleDateString("en-US", option);

  //res.render("list", {kindOfDay : day,nameOfDay : dayName});
  res.render("list", {kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res){
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server running on port 3000");
});
