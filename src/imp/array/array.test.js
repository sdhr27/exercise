// import React from 'react';
// import { cleanup } from '@testing-library/react';
import forEach2 from './for_each';
import map2 from './map';
import filter2 from './filter';
import reduce2 from './reduce';
import Queue from './queue';
import { addPrototype, deletePrototype } from '../../utils/protoype_manage';

const fns = [forEach2, map2, filter2, reduce2];

describe('test array', () => {
  // afterEach(cleanup);
  afterEach(() => {
    deletePrototype(Array, fns);
  });
  beforeEach(() => {
    addPrototype(Array, fns);
  });

  it(`forEach`, () => {
    const arr = [1, 2, 3];
    let str = '';
    arr.forEach2((item) => {
      str += item;
    });
    expect(str).toEqual('123');
  });
  it(`map`, () => {
    const arr = [1, 2, 3];
    const arr1 = arr.map2((item) => item);
    expect(arr1.join('')).toEqual('123');
  });
  it(`filter`, () => {
    const arr = [1, 2, 3];
    const arr1 = arr.filter2((item) => item === 1);
    expect(arr1.join('')).toEqual('1');
  });
  it(`reduce`, () => {
    const arr = [1, 2, 3];
    const arr1 = arr.reduce2((prev, cur) => prev + cur);
    expect(arr1).toEqual(6);
  });
  it(`reduce with initialValue`, () => {
    const arr = [1, 2, 3];
    const arr1 = arr.reduce2((prev, cur) => prev + cur, 3);
    expect(arr1).toEqual(9);
  });
  it(`queue`, () => {
    const queue = new Queue(3);
    queue.push(1);

    expect(queue.join('')).toEqual('1');
    queue.push(2, 3);
    expect(queue.join('')).toEqual('123');
    queue.push(4);
    expect(queue.join('')).toEqual('234');
    queue.push(5, 6);
    expect(queue.join('')).toEqual('456');
    queue.pop();
    expect(queue.join(',')).toEqual('5,6');
  });
});
