const feast = (beast, dish) => {
  const firstAndLastLetterBeast = [beast.at(0), beast.at(-1)];
  const firstAndLastLetterDish = [dish.at(0), dish.at(-1)];

  return (
    firstAndLastLetterBeast.filter(
      (letter, index) => letter === firstAndLastLetterDish[index]
    ).length === 2
  );
};

console.log(feast("chickadee", "chocolate cake")); // true
console.log(feast("brown bear", "bear claw")); // false
