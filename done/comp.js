const comp = (a, b) => {
  if (!a || !b) return false;

  if (!a.length || !b.length) return false;

  const sortedA = a.sort((a, b) => a - b)
  const sortedB = b.sort((a, b) => a - b)

  const squaredArray = sortedA.map((digit) => Math.pow(digit, 2));
  const filteredSquaredArray = squaredArray.filter(
    (squared, index) => squared === sortedB[index]
  );

  return filteredSquaredArray.length === squaredArray.length;
};

console.log(comp([2], [])); // false
console.log(comp(null, [2])); // false
console.log(comp([3, 4], [9, 31])); // false
console.log(comp([2, 2, 3], [4, 4, 9])); // true
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
); // true
