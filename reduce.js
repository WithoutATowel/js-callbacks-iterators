var numbers = [1, 56, 2, 4, 1, 99, 3, 5];

function myCallback(accumulator, currentValue) {
  return accumulator * currentValue;
}

console.log(numbers.reduce(myCallback));