const makeNegative = (number) =>
  !number ? number : Math.sign(number) === -1 ? number : -number;

console.log(makeNegative(-8));
console.log(makeNegative(0));
console.log(makeNegative(2));
