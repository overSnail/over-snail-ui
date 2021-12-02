import popoverTemp from "./popover.vue";
import Vue from "vue";

import { oneOf } from "../../utils/assist";
import { calcCoordinates } from "../../utils/tooltip";

import { on, off } from "../../utils/dom";

export default {
  name: "MyPopover",
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
    disabled: {
      type: Boolean,
      default: false
    },
    trigger: {
      validator(value) {
        return oneOf(value, ["hover", "click", "focus", "manual"]);
      },
      default: "click"
    },
    value: {
      type: Boolean,
      default: true
    },
    width: {
      type: String
    }
  },
  watch: {
    trigger(newVal, oldVal) {
      this.resolveEventTrigger(newVal, oldVal);
    },
    value(newVal) {
      if (newVal) {
        this.showTip();
      } else {
        this.hideTipByMouseup();
        off(document.body, "click", this.hideTipByClick);
      }
      if (this.tooltip) {
        this.tooltip.value = newVal;
      }
    },
    content(newVal) {
      if (this.tooltip) {
        this.tooltip.content = newVal;
      }
    }
  },
  render(h) {
    let vnode = this.$slots.reference;
    return vnode;

    // return h("div", {
    //   class: "my-tooptip"
    // });
  },
  mounted() {
    this.referenceElm = this.$el;
    this.resolveEventTrigger(this.trigger);
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
          this.$emit("input", false);
          this.tooltip.visible = false;
        }
      }, 150);
    },
    /**
     * @description 通过点击目标来显示元素
     * @returns
     */
    showTipByClick() {
      if (this.disabled) return;
      if (!this.tooltip) {
        this.__renderTip();
      }

      if (this.tooltip.visible) {
        this.hideTipByMouseup();
      } else {
        this.__setTipVisible();
        off(document.body, "click", this.hideTipByClick);
        setTimeout(() => {
          on(document.body, "click", this.hideTipByClick);
        });
      }
    },
    /**
     * @description 通过点击元素外位置来隐藏元素
     * @param {param} event 事件对象
     */
    hideTipByClick(event) {
      // 点击目标若不是组件内元素时，关闭选项弹窗
      if (!this.tooltip) return;

      let target = event.path.find(
        d => d === this.tooltip.$el || d === this.referenceElm
      );

      if (!target) {
        this.$emit("input", false);
        this.tooltip.visible = false;
        off(document.body, "click", this.hideTipByClick);
      }
    },
    hideTipByMouseup() {
      this.$emit("input", false);
      if (this.tooltip) {
        this.tooltip.visible = false;
      }
    },
    /**
     * @description 创建元素
     */
    __renderTip() {
      const Tooltip = Vue.extend(popoverTemp);
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
      this.$emit("input", true);
      const coordinates = calcCoordinates(this.referenceElm, this.placement);

      this.tooltip.top = coordinates.top;
      this.tooltip.left = coordinates.left;
      this.tooltip.angleTop = coordinates.angleTop;
      this.tooltip.angleLeft = coordinates.angleLeft;

      this.tooltip.content = this.content;
      if (this.$slots.default) {
        this.tooltip.$slots.default = this.$slots.default;
        this.tooltip.content = "slot";
      }

      this.tooltip.value = this.value;
      this.tooltip.placement = this.placement;
      this.tooltip.visible = true;
    },
    /**
     * @description trigger事件处理
     */
    resolveEventTrigger(onTrigger, offTrigger) {
      if (onTrigger) {
        // hover触发
        switch (onTrigger) {
          case "hover":
            on(this.referenceElm, "mouseenter", this.showTip);
            on(this.referenceElm, "mouseleave", this.hideTip);
            break;

          case "click":
            on(this.referenceElm, "click", this.showTipByClick);
            break;

          case "focus":
            on(this.referenceElm, "mousedown", this.showTip);
            on(this.referenceElm, "mouseup", this.hideTipByMouseup);
            break;
        }
      }

      if (offTrigger) {
        switch (offTrigger) {
          case "hover":
            off(this.referenceElm, "mouseenter", this.showTip);
            off(this.referenceElm, "mouseleave", this.hideTip);
            break;

          case "click":
            off(this.referenceElm, "click", this.showTipByClick);
            break;

          case "focus":
            off(this.referenceElm, "mousedown", this.showTip);
            off(this.referenceElm, "mouseup", this.hideTipByMouseup);
            break;
        }
      }
    }
  },
  beforeDestroy() {
    off(this.referenceElm, "mouseenter", this.showTip);
    off(this.referenceElm, "mouseleave", this.hideTip);
  }
};
