import { events } from './pub_sub_mode';

describe('pub_sub_mode', () => {
  it('events', async () => {
    var v = '';
    var fn = function (data) {
      v += data + '1';
    };
    var fn1 = function (data) {
      v += data + `2`;
    };
    var fn2 = function (data) {
      v += data + `3`;
    };
    events.on('hello', fn);
    events.on('hello', fn1);
    events.on('hello', fn2);
    events.emit('hello', 'world');
    expect(v).toBe(`world1world2world3`);
    events.off('hello', fn);
    events.emit('hello', 'world');
    expect(v).toBe(`world1world2world3world2world3`);
  });
});
