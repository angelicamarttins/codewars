const betterThanAverage = (classPoints, yourPoints) => {
  classPoints.push(yourPoints);

  const averagePoints =
    classPoints.reduce((acc, cur) => acc + cur) / classPoints.length;

  return yourPoints > averagePoints;
};

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
