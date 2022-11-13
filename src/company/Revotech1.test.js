// import { FileSys } from './Revotech2';
import { getSpace } from './Revotech3';

describe('revotech三面', () => {
  it(`getSpace`, () => {
    expect(
      getSpace([
        [[1.5, 3.5]],
        [
          [2.4, 4.5],
          [6, 8],
        ],
        [[7, 10]],
      ]),
    ).toEqual([
      [0, 1.5],
      [4.5, 6],
      [10, 24],
    ]);
  });
});
