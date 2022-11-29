const removeExclamationMarks = (string) => string.match(/[^\!](\w)*/g).join('')

console.log(removeExclamationMarks("Hello World!"))
console.log(removeExclamationMarks("Hello! World!"))
console.log(removeExclamationMarks("!Hello World!"))