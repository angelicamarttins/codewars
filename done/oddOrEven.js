const oddOrEven = (array) => {
  if (!array.length) return 'even';

  return array.reduce((acc, cur) => acc + cur) % 2 === 0 ? "even" : "odd";
};

console.log(oddOrEven([1, -2]));
console.log(oddOrEven([]));
console.log(oddOrEven([0]));
