var express 	= 	require("express"), 
	app 		= 	express(),
	bodyParser 	= 	require("body-parser"),
	mongoose 	= 	require("mongoose");

mongoose.connect("mongodb://localhost/yelpcamp")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP


var campgrounds = [ 
		{name: "Brummelbergen", image: "https://static.pexels.com/photos/803226/pexels-photo-803226.jpeg"},
		{name: "Juma", image: "https://static.pexels.com/photos/699558/pexels-photo-699558.jpeg"},
		{name: "Linastrand", image: "https://static.pexels.com/photos/6757/feet-morning-adventure-camping.jpg"},
		{name: "Brummelbergen", image: "https://static.pexels.com/photos/803226/pexels-photo-803226.jpeg"},
		{name: "Juma", image: "https://static.pexels.com/photos/699558/pexels-photo-699558.jpeg"},
		{name: "Linastrand", image: "https://static.pexels.com/photos/6757/feet-morning-adventure-camping.jpg"}
	];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
	//res.send("You hit the post route!");
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
	// Get data from form and add to campgrounds array
	// Redirect back to campgrounds page
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.listen(3000, "localhost", function(){
	console.log('YelpCamp server started..');
});