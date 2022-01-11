import Vue from "vue";

export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

/**
 * @description 防抖函数
 * @param {Function} func 回调函数
 * @param {number} wait 防抖间隔
 * @param {string} name 计时器名称，计时器挂在到window上
 */
export function debounce(func, wait, name) {
  if (window[name]) clearTimeout(window[name]);
  window[name] = setTimeout(function() {
    func();
    window[name] = undefined;
  }, wait);
}

/**
 * @description 中划线转驼峰
 * @param {string} str 被转换的字符串
 * @returns
 */
export function toHump(str) {
  return str.replace(/\-(\w)/g, function(all, letter) {
    return letter.toUpperCase();
  });
}

/**
 * @description 驼峰转中划线
 * @param {string} str 被转换的字符串
 * @returns
 */
export function toLine(str) {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}

/**
 * @description 判断一个节点是否为VNode
 * @param {HTMLNode} node dom节点
 * @returns boolean
 */
export function isVNode(node) {
  return (
    node !== null &&
    typeof node === "object" &&
    hasOwnProperty.call(node, "componentOptions")
  );
}

/**
 * @description 类型判断
 * @param {*} obj 变量
 * @returns {string} 类型
 */
function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  };
  return map[toString.call(obj)];
}

/**
 * @description 对象深拷贝
 * @param {object} data 要拷贝的对象
 * @returns {object} 拷贝后的对象
 */
export function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === "array") {
    o = [];
  } else if (t === "object") {
    o = {};
  } else {
    return data;
  }

  if (t === "array") {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === "object") {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

/**
 * @description 日期格式化
 * @param {string} fmt 显示格式
 * @param {Date} date 日期对象
 * @returns
 */
export function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
}
