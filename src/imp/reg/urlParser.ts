export default function parseUrl(url: string) {
  const paramsStr = /.+\?(.+)$/g.exec(url)?.[1]; // 获取?后第一个组内容：即?后的所有内容
  const paramsArr = paramsStr?.split('&') || []; // 参数之间以&分割
  const obj = {};
  paramsArr.forEach((param) => {
    if (/=/.test(param)) {
      const [key, value] = param.split('=');
      if (obj[key]) {
        // 已有
        obj[key] = [].concat(obj[key], value);
      } else {
        obj[key] = value;
      }
    } else {
      // 纯参数
      obj[param] = true;
    }
  });
  return obj;
}
