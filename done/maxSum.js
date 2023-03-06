const maxSequence = (array) => {
  const allNegative = array.every((number) => number < 0);

  if (!array.length || allNegative) return 0;

  const sum = (acc, current) => acc + current;
  const sumFullArray = array.reduce(sum);

  let maxSequenceSum = sumFullArray;
  let endArray = 0;

  for (let initialArray = 0; initialArray < array.length; initialArray++) {
    while (endArray < array.length) {
      const tempArray = array.slice(initialArray, endArray + 2);

      if (tempArray.length) {
        const tempSum = tempArray.reduce((acc, current) => acc + current);

        if (tempSum > maxSequenceSum) maxSequenceSum = tempSum;
      }

      endArray++;
    }

    endArray = 0;
  }

  return maxSequenceSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]));
console.log(maxSequence([39, -32]));
