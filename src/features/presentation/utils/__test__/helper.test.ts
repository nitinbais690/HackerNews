import { paginator, timeConvert } from '../helpers';

describe('helpers', () => {
  it('paginator should should return correct totalPage, data function', () => {
    const actual = paginator([1, 23, 45, 32, 23, 67], 2, 2);
    const expected = {
      total: 6,
      totalPage: 3,
      data: [45, 32],
    };
    expect(actual).toMatchObject(expected);
  });

  it('second covert into minutes:hour', () => {
    const actual = timeConvert(3600);
    const expected = '1:0';
    expect(actual).toMatch(expected);
  });
});
