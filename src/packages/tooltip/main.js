import tooltipTemp from "./tooltip.vue";
import Vue from "vue";

import { oneOf } from "../../utils/assist";
import { calcCoordinates } from "../../utils/tooltip";

import { on, off } from "../../utils/dom";

export default {
  name: "MyTooltip",
  abstract: true,
  data() {
    return {
      // slots.default中的$el
      referenceElm: undefined,
      // 是否显示
      visible: false,
      // 鼠标是否停留在内容之中，若是，则继续显示
      isFocus: false,
      // 弹窗实例
      tooltip: undefined
    };
  },
  props: {
    placement: {
      validator(value) {
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
      },
      default: "top"
    },
    content: {
      type: [String, Number]
    },
    effect: {
      validator(value) {
        return oneOf(value, ["dark", "light"]);
      },
      default: "dark"
    },
    disabled: {
      type: [Boolean],
      default: false
    }
  },
  render(h) {
    let vnode = this.getFirstElement();
    return vnode;

    // return h("div", {
    //   class: "my-tooptip"
    // });
  },
  mounted() {
    this.referenceElm = this.$el;
    on(this.referenceElm, "mousemove", this.showTip);
    on(this.referenceElm, "mouseleave", this.hideTip);
  },
  methods: {
    /**
     * @description 显示文字提示
     */
    showTip() {
      if (this.disabled) return;
      if (!this.tooltip) {
        this.__renderTip();
      }
      this.__setTipVisible();
    },
    /**
     * @description 隐藏文字提示
     */
    hideTip() {
      setTimeout(() => {
        if (this.tooltip) {
          this.tooltip.visible = false;
        }
      }, 150);
    },
    /**
     * @description 创建元素
     */
    __renderTip() {
      const Tooltip = Vue.extend(tooltipTemp);
      this.tooltip = new Tooltip({
        el: document.createElement("DIV"),
        data: {
          ...this._data,
          ...this._props
        }
      });

      if (this.$slots.content) {
        this.tooltip.$slots.default = this.$slots.content;
        this.tooltip.content = "slot";
      }

      document.body.appendChild(this.tooltip.$el);
    },
    __setTipVisible() {
      const coordinates = calcCoordinates(this.referenceElm, this.placement);

      this.tooltip.top = coordinates.top;
      this.tooltip.left = coordinates.left;
      this.tooltip.angleTop = coordinates.angleTop;
      this.tooltip.angleLeft = coordinates.angleLeft;

      this.tooltip.content = this.content;
      if (this.$slots.content) {
        this.tooltip.$slots.default = this.$slots.content;
        this.tooltip.content = "slot";
      }

      this.tooltip.placement = this.placement;
      this.tooltip.effect = this.effect;
      this.tooltip.visible = true;
    },
    getFirstElement() {
      const slots = this.$slots.default;
      if (!Array.isArray(slots)) return null;
      let element = null;
      for (let index = 0; index < slots.length; index++) {
        if (slots[index] && slots[index].tag) {
          element = slots[index];
        }
      }
      return element;
    }
  },
  beforeDestroy() {
    off(this.referenceElm, "mouseenter", this.showTip);
    off(this.referenceElm, "mouseleave", this.hideTip);
  }
};
