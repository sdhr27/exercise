/* eslint-disable no-useless-escape */
/**
 * ## 有赞问题1
 * 实现 getValue 函数，安全的获取目标对象指定 path 的值
 * @params {object | array} value 指定对象
 * @params {string} path
 */

// const object = { 'a': [{ 'b': { 'c': 3 } }] }; // path: 'a[0].b.c'
// const array = [{ "a": { b: [1] } }]; // path: '[0].a.b[0]'
// console.log(1, getValue(object, 'a[0].b.c')); // 3
// console.log(2, getValue(array, '[0].a.b[0]')); // 1
// console.log(3, getValue({ a: 1 }, 'a')); // 1
function getValue(value, path) {
  // 根据 [] 和 . 分割
  const keys = path.split(/[\.\[\]]/).filter(Boolean);
  return keys.reduce((acc, cur) => {
    return acc?.[cur];
  }, value);
}
