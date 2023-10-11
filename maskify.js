const maskify = (mask) => {
  const stringifyMask = mask.split('')
  const stringifyMaskLength = stringifyMask.length

  if (stringifyMaskLength > 4) {
    const difference = stringifyMaskLength - 4
    const newMask = stringifyMask.slice(-4)

    return '#'.repeat(difference).concat(newMask.join(''))
  }

  return mask
}

console.log(maskify('4556364607935616'))
console.log(maskify('11111'))
console.log(maskify('111'))
