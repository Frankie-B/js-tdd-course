// 'cat' -> {c:1 , a: 1, t: 1 }
// 'better' -> {b:1 , e: 2, t: 2, r: 1 }

// TODO - refactor using arr.reduce method
export const getLetterCount = (str) => {
  const letters = str.split('');
  let letterCount = {};
  letters.forEach((letter) => {
    return !letterCount[letter]
      ? (letterCount[letter] = 1)
      : letterCount[letter]++;
  });

  return letterCount;
};
