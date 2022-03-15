import { ratingToArray } from './rating-to-array';

describe('hello world', () => {
  it('it should convert a number 1 to array of 1 true and 4 false boolean array', () => {
    const result = ratingToArray(1);

    expect(result).toEqual([true, false, false, false, false]);
  });

  it('it should convert a number 3 to 3 true and 2 false array of booleans', () => {
    const result = ratingToArray(3);

    expect(result).toEqual([true, true, true, false, false]);
  });
});
