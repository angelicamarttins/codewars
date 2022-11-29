function mostFrequentlyWord(text) {
  const hasAnyWord = text.match(/(\w+)/g);
  console.log(text, hasAnyWord)
  if (!hasAnyWord) return [];

  const filteredText = hasAnyWord.map((word) => word.trim());
  // console.log(filteredText);
}

console.log(mostFrequentlyWord("a a c b b"));
console.log(mostFrequentlyWord("a a a  b  c c  d d d d  e e e e e"));
console.log(
  mostFrequentlyWord("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
);
console.log(mostFrequentlyWord("  //wont won't won't "));
console.log(mostFrequentlyWord("  , e   .. "));
console.log(mostFrequentlyWord("  ...  "));
console.log(mostFrequentlyWord("  '  "));
console.log(
  mostFrequentlyWord(
    `In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.`
  )
);
