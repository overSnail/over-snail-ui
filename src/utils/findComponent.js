/**
 * @description 由一个组件，向上找到最近的指定组件
 * @param {object} context 当前组件实例
 * @param {string} componentName 目标组件
 * @returns 符合要求的组件实例
 */
export function findComponentUpward(context, componentName) {
  let parent = context.$parent;
  let name = parent.$options.name;

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

/**
 * @description 由一个组件，找到指定组件的兄弟组件
 * @param {object} context 当前组件实例
 * @param {string} componentName 目标组件
 * @param {boolean} exceptMe 是否不包括自己
 * @returns 符合要求的组件实例列表
 */
export function findBrothersComponents(
  context,
  componentName,
  exceptMe = true
) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName;
  });
  let index = res.findIndex(item => item._uid === context._uid);
  if (exceptMe) res.splice(index, 1);
  return res;
}
