import Vue from 'vue';

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
  if (window[name]) clearTimeout(window[name])
  window[name] = setTimeout(function() {
    func()
    window[name] = undefined
  }, wait)
}