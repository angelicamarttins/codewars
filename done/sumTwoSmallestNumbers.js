const sumTwoSmallestNumbers = numbers => {
  const [firstLowest, secondLowest] = numbers.sort((a, b) => a - b)
  
  return firstLowest + secondLowest
}
