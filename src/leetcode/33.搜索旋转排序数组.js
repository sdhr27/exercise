/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  // 尽全力搜索加等号
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[0] <= nums[mid]) {
      // target落在左边
      if (nums[0] <= target && target <= nums[mid]) {
        // 左边固定，动右边
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // target落在右边
      if (nums[mid] <= target && target <= nums[nums.length - 1]) {
        // 右边固定，动左边
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end
