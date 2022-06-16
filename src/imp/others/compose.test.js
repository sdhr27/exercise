import { compose1, compose2 } from './compose';

describe('compose', () => {
  it('recursion compose', () => {
    function fn1(num1) {
      return num1 + 1;
    }
    function fn2(num1) {
      return num1 * 10;
    }
    function fn3(num1) {
      return num1 + 3;
    }
    const composeFn = compose1(fn1, fn2, fn3);
    const res = composeFn(0);
    expect(res).toEqual(31);
  });
  it(`reduce compose`, () => {
    function fn1(num1) {
      return num1 + 1;
    }
    function fn2(num1) {
      return num1 * 10;
    }
    function fn3(num1) {
      return num1 + 3;
    }
    const composeFn = compose2(fn1, fn2, fn3);
    const res = composeFn(0);
    expect(res).toEqual(13);
  });
});
