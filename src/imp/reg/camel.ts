// 1. foo Bar => fooBar
// 2. foo-bar---- => fooBar
// 3. foo_bar__ => fooBar

export default function camel(str: string) {
  // 此处写为(.)?是为了兼容尾部是特殊符号的情况
  const reg = /[_-\s]+(.)?/g;

  return str.replace(reg, (match, char1: string) =>
    // match代表所有匹配的项目
    // char1, char2……代表纯粹()中的值
    char1 ? char1.toUpperCase() : '',
  );
}
