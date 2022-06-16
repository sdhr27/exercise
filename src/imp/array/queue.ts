export default class Queue<T = unknown> {
  // 队列限制长度
  limit = 0;

  len = 0;

  constructor(limit: number) {
    this.limit = limit;
  }

  _push(elms: T[]) {
    for (let i = 0; i < elms.length; i++) {
      this[this.len++] = elms[i];
    }
  }

  push(...elms: T[]) {
    let diff = elms.length + this.len - this.limit;
    const shifts: T[] = [];
    if (diff > 0) {
      while (diff) {
        diff--;
        const elm = this.pop();
        if (elm) shifts.push(elm);
      }
      this._push(elms);
    } else {
      this._push(elms);
    }
    return shifts;
  }

  pop() {
    const elm = this[0];
    for (let i = 0; i < this.len; i++) {
      this[i] = this[i + 1];
    }
    // 删除上一个位置的键值对
    delete this[--this.len];
    return elm;
  }

  join(sign: string) {
    let str = '';
    const keys = Object.keys(this);
    keys.forEach((key) => {
      if (!Number.isNaN(Number(key))) {
        str += str ? `${sign}${this[key]}` : this[key];
      }
    });
    return str;
  }
}
