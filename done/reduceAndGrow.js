const reduceAndGrow = (array) => array.reduce((acc, cur) => acc * cur);

console.log(reduceAndGrow([1, 2, 3]));
console.log(reduceAndGrow([4, 1, 1, 1, 4]));
console.log(reduceAndGrow([2, 2, 2, 2, 2, 2]));
