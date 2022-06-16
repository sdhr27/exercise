import Queue from './class_queue';
import Queue2 from './combine_queue';

describe('promise', () => {
  it(`class继承实现队列`, () => {
    const queue = new Queue(3);
    queue.in(1);
    expect(queue.join('')).toEqual('1');
    queue.in(2, 3);
    expect(queue.join('')).toEqual('123');
    queue.in(4);
    expect(queue.join('')).toEqual('234');
    queue.in(5, 6);
    expect(queue.join('')).toEqual('456');
    queue.out();
    expect(queue.join(',')).toEqual('5,6');
  });
  it(`组合继承队列`, () => {
    const queue = new Queue2(3);
    queue.in(1);
    expect(queue.join('')).toEqual('1');
    queue.in(2, 3);
    expect(queue.join('')).toEqual('123');
    queue.in(4);
    expect(queue.join('')).toEqual('234');
    queue.in(5, 6);
    expect(queue.join('')).toEqual('456');
    queue.out();
    expect(queue.join(',')).toEqual('5,6');
  });
});
