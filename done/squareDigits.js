const squareDigits = number => Array(...String(number)).map(digit => Math.pow(digit, 2)).join('')
  


console.log(squareDigits(3212))
console.log(squareDigits(9119))