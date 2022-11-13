// 包含 begin，但不包含 end
export function slice2(begin, end) {
  const newArr: any[] = [];
  const start = begin || 0;
  const finish = end || this.length;
  for (let i = start; i < finish; i++) {
    newArr.push(this[i]);
  }
  return newArr;
}
