/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // i = word1.length; j = word2.length;
  // 1、dp[i][j]: 将 word1 转化为 word2 所使用的最少操作次数为 dp[i][j]。
  // 2、状态转移方程
  //  (1)插入一个字符成立dp[i][j] = dp[i][j - 1] +1
  //  (2)删除一个字符成立dp[i][j] = dp[i -1][j] + 1
  //  (3)替换一个字符成立dp[i][j] = dp[i -1][j - 1] +1
  //  (4)当前字符相等直接成立dp[i][j] = dp[i -1][j - 1]
  // 3、初始值i或j为0时
  // dp[0][j] = j; dp[i][0] = i;
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(m + 1).fill(0).map(() => []);
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[m][n];
};
// @lc code=end
