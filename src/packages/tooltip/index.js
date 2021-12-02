import tooltipTemp from "./tooltip.vue";
import Vue from "vue";

import { calcCoordinates } from "../../utils/tooltip";
import { on, off } from "../../utils/dom";
import { oneOf } from "../../utils/assist";

import Tooltip from "./main";

export default Tooltip;

// 构建自定义指令
export const TooltipDirective = {
  /**
   * @description 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
   * @param {*} el 指令所绑定的元素，可以用来直接操作 DOM。
   * @param {*} binding 里面包含事件信息
   * @param {*} vnode Vue 编译生成的虚拟节点
   * @param {*} oldNode 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
   */
  bind: (el, binding, vnode, oldNode) => {
    // 创建loading实例，将实例挂到el上
    const Tooltip = Vue.extend(tooltipTemp);

    el.showTip = () => {
      if (!el.tooltip) {
        el.tooltip = new Tooltip({
          el: document.createElement("DIV")
        });
        document.body.appendChild(el.tooltip.$el);
      }

      const placement =
        Object.keys(binding.modifiers).find(d => placementOneOf(d)) || "top";

      const effect =
        Object.keys(binding.modifiers).find(d => effectOneOf(d)) || "dark";

      const coordinates = calcCoordinates(el, placement);

      el.tooltip.top = coordinates.top;
      el.tooltip.left = coordinates.left;
      el.tooltip.angleTop = coordinates.angleTop;
      el.tooltip.angleLeft = coordinates.angleLeft;
      el.tooltip.content = binding.value;

      el.tooltip.effect = effect;
      el.tooltip.placement = placement;
      el.tooltip.visible = true;
    };

    el.hideTip = () => {
      setTimeout(() => {
        el.tooltip.visible = false;
      }, 150);
    };
  },
  /**
   * @description 被绑定元素插入父节点时调用
   * @param {*} el 指令所绑定的元素，可以用来直接操作 DOM。
   * @param {*} binding 里面包含事件信息
   * @param {*} vnode Vue 编译生成的虚拟节点
   * @param {*} oldNode 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
   */
  inserted: (el, binding, vnode, oldNode) => {
    on(el, "mouseenter", el.showTip);
    on(el, "mouseleave", el.hideTip);
  },
  /**
   * @description 所在组件的 VNode 更新时调用
   * @param {*} el 指令所绑定的元素，可以用来直接操作 DOM。
   * @param {*} binding 里面包含事件信息
   * @param {*} vnode Vue 编译生成的虚拟节点
   * @param {*} oldNode 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
   */
  update: (el, binding, vnode, oldNode) => {
    el.tooltip.value = binding.value;
  },
  /**
   * @description 只调用一次，指令与元素解绑时调用
   * @param {*} el 指令所绑定的元素，可以用来直接操作 DOM。
   * @param {*} binding 里面包含事件信息
   * @param {*} vnode Vue 编译生成的虚拟节点
   * @param {*} oldNode 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
   */
  unbind: (el, binding, vnode, oldNode) => {
    // 记得在指令移除时，删除相关实例
    off(el, "mouseenter", el.showTip);
    off(el, "mouseleave", el.hideTip);
  }
};

const placementOneOf = value => {
  return oneOf(value, [
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
    "right",
    "right-start",
    "right-end"
  ]);
};

const effectOneOf = value => {
  return oneOf(value, ["light", "dark"]);
};
