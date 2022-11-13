/**
 * ## 问题2
 * 将一个json数据的所有key从下划线改为驼峰
 * @param {object | array} value 待处理对象或数组
 * @returns {object | array} 处理后的对象或数组
 */

export function keyToCamel(obj) {
  const newObj = obj instanceof Array ? [] : {};
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      newObj[tran(key)] = keyToCamel(obj[key]);
    } else {
      newObj[tran(key)] = obj[key];
    }
  }
  return newObj;
}

function tran(str) {
  const reg = /[_]+(.)?/g;

  return str.replace(reg, (match, char1: string) => {
    // match代表所有匹配的项目
    // char1, char2……代表()中的值，即特殊符号后的字符
    // console.log('match:', match, 'char1:', char1);
    return char1 ? char1.toUpperCase() : '';
  });
}
