export default function debounce(callback, timeout) {
  let timer;
  function tim(...p) {
    // 箭头函数this自动绑定定义的上下文
    // apply绑定箭头函数的this即tim的this
    return () => callback.apply(this, p);
  }
  return function newFn(...args) {
    // 每次触发函数则清除上一个定时器，则上一次任务被取消
    clearTimeout(timer);
    // 注册新定时器，timeout后执行
    // call绑定当前函数作用域this，传入当前函数参数args
    timer = setTimeout(tim.call(this, ...args), timeout);
  };
}

// https://juejin.cn/post/6946022649768181774
// export default function debounce(func, wait) {
//   let timeout;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(context, args);
//     }, wait);
//   };
// }

// github.com/xyuanbuilds/terms/blob/main/src/implement/basic/debounce.ts
// export default function debounce<T extends (...args: any[]) => any>(
//   fn: T,
//   delay: number,
// ) {
//   let timer: NodeJS.Timeout | null = null;

//   // * 返回函数
//   return (...args: Parameters<T>) => {
//     // * 每一次调用 timer 已设置，则主动清除
//     if (timer) {
//       clearTimeout(timer);
//     }
//     // * 进行下一次 setTimeOut
//     timer = setTimeout(() => {
//       fn.apply(null, args);
//       timer = null;
//     }, delay);
//   };
// }
