/**
 *
 * @param obj
 * @description 创建一个新对象，使用现有的对象来作为新创建对象的原型
 * @returns
 */
export default function create2(obj) {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function Fn() {}
  Fn.prototype = obj;
  return new Fn();
}
