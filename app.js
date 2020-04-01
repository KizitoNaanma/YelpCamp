var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

var campgrounds = [
    {name: "Camp Ground", image: "https://cdn.pixabay.com/photo/2017/06/17/03/17/gongga-snow-mountain-2411069__480.jpg"},
    {name: "Tent", image: "https://cdn.pixabay.com/photo/2015/05/13/05/40/tent-765064__480.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2015/11/07/11/39/camping-1031360__480.jpg"},
    //{name: "Mountain Goat's Rest", image: "https://pixabay.com/get/52e7d0454d55a814f6da8c7dda793f7f1636dfe2564c704c7d2f7cd2954ec058_340.jpg"},
    //{name: "Salmon Creek", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c7d2f7cd2954ec058_340.jpg"},
    //{name: "Granite Hill", image: "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c7d2f7cd2954ec058_340.jpg"},
    //{name: "Mountain Goat's Rest", image: "https://pixabay.com/get/52e7d0454d55a814f6da8c7dda793f7f1636dfe2564c704c7d2f7cd2954ec058_340.jpg"}
];

app.get("/", function(req, res){
    res.render("landing")
});
app.get("/campgrounds", function(req, res){
 
    res.render("campgrounds", {campgrounds:campgrounds})
});

app.get("/camp", function(req, res){
 
    res.render("camp", {campgrounds:campgrounds})
});

app.post("/campgrounds", function(req, res){
    //get data from the form and add to campground array
    var name = req.body.name;
    var image = req.body.url;
    var newCampGround = {name:name, image:image};

    campgrounds.push(newCampGround)
    res.redirect("/campgrounds")
});
app.get("/campgrounds/new", function(req, res){
    res.render("new");
});
app.listen(3000, function(){
    console.log("Server Running!")
});

