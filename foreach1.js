/*
	For Each:
	Use the .forEach iterator to loop over the following array of foods and say you like them.
 */
 
var foods = ["pizza", "tacos", "ice cream"];

for(i in foods) {
	console.log("I like", foods[i]);
}

foods.forEach(function(element) {
	console.log("I like", element);
});

function myCallback(item) {
	console.log("I like", item);
}

foods.forEach(myCallback);

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"