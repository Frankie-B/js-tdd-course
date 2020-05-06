import { isEqual } from 'lodash';
import { getLetterCount } from './letterCount';

export const isAnagram = (str1, str2) => {
  const str1LetterCount = getLetterCount(str1);
  const str2LetterCount = getLetterCount(str2);

  return isEqual(str1LetterCount, str2LetterCount); // lodash function for deep equal comparison between str1Letters and str2Letters
};
