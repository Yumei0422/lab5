var data = require("../data.json");

exports.addFriend = function(request, response) {   
	var name = request.query.name;
	var description = request.query.description;
	var newFriend = {
		"name" : name,
		"description" : description,
		"imageURL" : "https://loremflickr.com/400/400/people"
	} 
	console.log("New freind added" + data);
	data.friends.push(newFriend)
 }