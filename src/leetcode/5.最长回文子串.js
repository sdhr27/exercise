/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let start = 0,
    max = 1;
  // dp[i][j]字符串i~j是否为回文子串
  const dp = new Array(s.length).fill(0).map(() => []);
  for (let i = 0; i < s.length; i++) {
    // 单个字符是回文子串
    dp[i][i] = true;
  }
  // 枚举长度
  for (let L = 2; L <= s.length; L++) {
    for (let i = 0; i < s.length; i++) {
      const j = L + i - 1;
      if (s.charAt(i) !== s.charAt(j)) {
        dp[i][j] = false;
      } else if (L <= 3) {
        // length = j-i+1 < 4，length取值1、2、3
        // 此时头尾字符相等charAt(i) === charAt(j)
        dp[i][j] = true;
      } else {
        // 字符串过长，内部情况不明朗，使用递推方程
        dp[i][j] = dp[i + 1][j - 1];
      }
      if (dp[i][j] && L > max) {
        // 当前字符串是回文字符串，且长度大于max
        max = L; // 刷新max
        start = i; // 记录start
      }
    }
  }
  return s.slice(start, start + max);
};
// @lc code=end
