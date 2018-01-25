var people = ['Bob', 'Jen', 'James', 'Isolde'];

function upperCaser(item) {
	return item.toUpperCase();
}

people = people.map(upperCaser);
console.log(people);
