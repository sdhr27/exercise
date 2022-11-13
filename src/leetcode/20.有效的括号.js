/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const pairs = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  const sArr = s.split('');
  // console.log(sArr)
  while (sArr.length) {
    const elm = sArr.shift();
    if (stack.length && stack[stack.length - 1] === pairs[elm]) {
      stack.pop();
    } else {
      stack.push(elm);
    }
  }
  return stack.length === 0;
};
// @lc code=end
