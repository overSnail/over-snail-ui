import { on, off } from "../../utils/dom";

// 拖拽
export default {
  /**
   * @description 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
   * @param {*} el 指令所绑定的元素，可以用来直接操作 DOM。
   * @param {*} binding 里面包含事件信息
   * @param {*} vnode Vue 编译生成的虚拟节点
   * @param {*} oldNode 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
   */
  bind: (el, binding, vnode, oldNode) => {
    // 鼠标按下
    el.handleMousedown = e => {
      el.offsetX = e.clientX - el.offsetLeft;
      el.offsetY = e.clientY - el.offsetTop;
      el.dragable = true;
      on(document.body, "mousemove", el.handleMousemove);
    };

    el.handleMouseup = e => {
      el.dragable = false;
      off(document.body, "mousemove", el.handleMousemove);
    };

    el.handleMousemove = e => {
      let moveX = e.clientX - el.offsetX;
      let moveY = e.clientY - el.offsetY;

      if (moveX < 0) {
        moveX = 0;
      }

      el.style.left = `${moveX}px`;
      el.style.top = `${moveY}px`;
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
    // 1. 绑定拖拽事件
    on(el, "mousedown", el.handleMousedown);
    on(el, "mouseup", el.handleMouseup);
  }
};
