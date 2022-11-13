import { FileSys } from './Revotech2';

describe('revotech', () => {
  it(`create`, () => {
    const fileSys = new FileSys();
    fileSys.create('a/b/c');
    fileSys.create('a/b/d');
    expect(fileSys.files).toEqual([
      { father: [], level: 0, name: 'a', value: null },
      { father: [{ level: 0, name: 'a' }], level: 1, name: 'b', value: null },
      {
        father: [
          { level: 0, name: 'a' },
          { level: 1, name: 'b' },
        ],
        level: 2,
        name: 'c',
        value: null,
      },
      {
        father: [
          { level: 0, name: 'a' },
          { level: 1, name: 'b' },
        ],
        level: 2,
        name: 'd',
        value: null,
      },
    ]);
  });
  it(`delete`, () => {
    const fileSys = new FileSys();
    fileSys.create('a/b/c');
    fileSys.create('a/b/d');
    fileSys.create('a/b/d/e');
    fileSys.delete('a/b/c');
    expect(fileSys.files).toEqual([
      { father: [], level: 0, name: 'a', value: null },
      { father: [{ level: 0, name: 'a' }], level: 1, name: 'b', value: null },
      {
        father: [
          { level: 0, name: 'a' },
          { level: 1, name: 'b' },
        ],
        level: 2,
        name: 'd',
        value: null,
      },
      {
        father: [
          { level: 0, name: 'a' },
          { level: 1, name: 'b' },
          { level: 2, name: 'd' },
        ],
        level: 3,
        name: 'e',
        value: null,
      },
    ]);
  });
  it(`setValue&getValue`, () => {
    const fileSys = new FileSys();
    fileSys.create('a/b/c');
    fileSys.create('a/b/d');
    fileSys.create('a/b/d/e');
    fileSys.setValue('a/b/c', 'test');
    expect(fileSys.getValue('a/b/c')).toEqual('test');
    expect(fileSys.getValue('a/b/c/d')).toEqual(undefined);
    expect(fileSys.getValue('a/b/d')).toEqual(null);
  });
});
