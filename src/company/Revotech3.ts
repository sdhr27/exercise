// [[(1.5, 3.5)], [(2.4, 4.5), (6, 8)], [(7, 10)]];
// [(0, 1.5), (4.5, 6), (10, 24)];
// 0~24浮点数
type TimeType = Array<Array<[number, number]>>;
export function getSpace(nums: TimeType) {
  const result: Array<[number, number]> = [];
  const ranges = nums.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
  ranges.sort((a, b) => a[0] - b[0]);
  const newRange = ranges.reduce((acc, cur) => {
    const lastArr = acc.pop();
    if (lastArr) {
      const lastNum = lastArr[1];
      if (cur[0] < lastNum) {
        acc.push([lastArr[0], cur[1]]);
      } else {
        acc.push(lastArr, cur);
      }
    } else {
      acc.push(cur);
    }
    return acc;
  }, [] as typeof ranges);

  for (let i = 0; i < newRange.length; i++) {
    const next = newRange[i + 1] !== undefined ? newRange[i + 1][0] : 24;
    result.push([newRange[i][1], next]);
  }
  const first = newRange[0];
  if (first[0] !== 0) result.unshift([0, first[0]]);
  return result;
}
