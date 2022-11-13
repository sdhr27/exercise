/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let slow = 0,
    fast = 0;

  let max = 1; // max初始值为1
  const set = new Set();
  set.add(s[0]); // 初始化set
  while (fast < s.length) {
    if (set.has(s[fast + 1])) {
      // 判断fast+1
      max = Math.max(max, fast - slow + 1);
      slow++;
      fast = slow;
      set.clear(); // 清空哈希表
      set.add(s[slow]);
    } else {
      fast++;
      set.add(s[fast]);
    }
  }

  return Math.max(max, fast - slow); // 考虑为跳出情况
};
// @lc code=end
