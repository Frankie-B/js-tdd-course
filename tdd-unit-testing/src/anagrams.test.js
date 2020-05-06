import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {
  // checks to see if the same letters exist in both params
  it('it returns true when two known anagram are passed in', () => {
    const expected = true;
    const actual = isAnagram('listen', 'silent');

    expect(actual).to.equal(expected);
  });

  // checks to see if there are more letters in one than the other
  it('returns false when either word has more letters in it', () => {
    const expected = false;
    const actual = isAnagram('elbows', 'below');
    expect(actual).to.equal(expected);

    const actual2 = isAnagram('below', 'elbows');
    expect(actual2).to.equal(expected);
  });

  // checks to see if the params have the same letters but in different quantities
  it('returns false when the string have the same letters but in different quantities', () => {
    const expected = false;
    const actual = isAnagram('listens', 'silent');

    expect(actual).to.equal(expected);
  });
});
