/**
 * ## 问题3
 * 将48位的时间位图格式化成字符串
 * 要求：写一个函数timeBitmapToRanges，将下述规则描述的时间位图转换成一个选中时间区间的数组。
 *
 * 规则描述：
 * 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，例如`110000000000000000000000000000000000000000000000`，
 * 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
 * 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
 *
 * 示例输入：`"110010000000000000000000000000000000000000000000"`
 * 示例输出：`["00:00~01:00", "02:00~02:30"]`
 */

export function timeRange(str: string) {
  const result: any[] = [];
  let index = 0;
  while (index < str.length) {
    if (str.charAt(index) === '0') {
      index++;
      continue;
    }
    const curRange = { start: index, end: index };
    while (str.charAt(index) === '1') {
      curRange.end = index;
      index++;
    }
    result.push(curRange);
  }
  // 48个区间，49个节点
  const times = new Array(49).fill(0).map((_, index) => {
    const oriHour = Math.floor(index / 2);
    const hour = oriHour < 10 ? `0${oriHour}` : oriHour; // 补0
    const hasMin = !!(index % 2);
    return hasMin ? `${hour}:30` : `${hour}:00`;
  });

  return result.map((item) => {
    const len = item.end - item.start + 1;
    return `${times[item.start]}~${times[item.start + len]}`;
  });
}
