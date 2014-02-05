var data = require("../data.json");

exports.addFriend = function(req, res) {
	var json = new Object();
	json.name = req.query.name;
	json.description = req.query.description;
	json.imageURL = "http://lorempixel.com/400/400/people";
	data["friends"].push(json);
	console.log(data);
	res.render('add', data);
}