const towerBuilder = (number) => {
  console.log(Array.from({length: number}))
  let firstOddNumber = 1;
  const oddNumbers = [];

  for (let i = 0; i < number; i++) {
    oddNumbers.push(i === 0 ? 1 : (firstOddNumber += 2));
  }

  const maxNumber = Math.max(...oddNumbers);

  return oddNumbers.map((element) => {
    const stars = "*".repeat(element);
    const spaces = " ".repeat((maxNumber - element) / 2);
    return `${spaces}${stars}${spaces}`;
  });
};

console.log(towerBuilder(3));
[ 
  "  *  ", 
  " *** ", 
  "*****"
];

console.log(towerBuilder(1));
["*"];

console.log(towerBuilder(4));
[
  "   *   ", 
  "  ***  ", 
  " ***** ", 
  "*******"
];
