// import React from 'react';
import { cleanup } from '@testing-library/react';
import forEach2 from './for_each';

describe('test array', () => {
  afterEach(cleanup);
  beforeEach(() => {
    Array.prototype.forEach2 = forEach2;
  });

  it(`forEach`, () => {
    const arr = [1, 2, 3];
    let str = '';
    arr.forEach2((item) => {
      str += item;
    });
    expect(str).toEqual('123');
  });
});
