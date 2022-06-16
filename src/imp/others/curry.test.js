import curry from './curry';

describe('curry', () => {
  it('add 1 2 3', () => {
    function add(a, b, c) {
      return a + b + c;
    }

    const curryFn = curry(add);
    expect(curryFn(1, 2, 3)).toEqual(6);
    expect(curryFn(1)(2, 3)).toEqual(6);
    expect(curryFn(1)(2)(3)).toEqual(6);
    expect(curryFn(1, 2)(3)).toEqual(6);
  });
  it('async add 1 2 3', async () => {
    async function add(a, b, c) {
      await sleep(500);
      return a + b + c;
    }

    const curryFn = curry(add);
    const result1 = await curryFn(1, 2, 3);
    const result2 = await curryFn(1)(2)(3);
    const result3 = await curryFn(1, 2)(3);
    expect(result1).toEqual(6);
    expect(result2).toEqual(6);
    expect(result3).toEqual(6);
  });
});

const sleep = (timeout) =>
  new Promise((res) => {
    setTimeout(() => {
      res('');
    }, timeout);
  });
