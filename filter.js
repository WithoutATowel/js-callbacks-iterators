var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

var isCool = function(person) {
	return person.coolnessScore > 20;
}

var coolPeople = people.filter(isCool)

for(i in coolPeople) {
	console.log(coolPeople[i].name, "is cool");
}