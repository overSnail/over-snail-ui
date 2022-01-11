<template>
  <div class="my-slider-horizontal">
    <div class="my-slider-horizontal-bar" ref="barParent">
      <div
        class="my-slider-horizontal-bar-inner"
        :style="{ width: barWidth, 'margin-left': barOffset }"
      ></div>
      <tooltip :content="startLabel">
        <div
          class="my-slider-horizontal-bar-dot"
          ref="startDot"
          v-show="range"
        ></div>
      </tooltip>
      <tooltip :content="endLabel">
        <div class="my-slider-horizontal-bar-dot" ref="endDot"></div>
      </tooltip>
    </div>
  </div>
</template>

<script>
import { on, off } from "../../utils/dom";
import tooltip from "../tooltip";

export default {
  components: {
    tooltip
  },
  data() {
    return {
      currentValue: 0,
      barOffset: 0,
      barWidth: 0,
      startValue: 0,
      endValue: 0
    };
  },
  props: {
    value: {
      type: [Number, Array],
      default: 0
    },
    range: {
      type: Boolean,
      default: true
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    formatTooltip: {
      type: Function
    }
  },
  watch: {
    value(newVal) {}
  },
  computed: {
    startLabel() {
      if (typeof this.formatTooltip === "function") {
        return this.formatTooltip(this.startValue);
      } else {
        return this.startValue;
      }
    },
    endLabel() {
      if (typeof this.formatTooltip === "function") {
        return this.formatTooltip(this.endValue);
      } else {
        return this.endValue;
      }
    }
  },
  mounted() {
    // 限制下最大值
    const max = this.$refs.barParent.offsetWidth;
    // 给两颗小丸子加上拖拽功能
    this.bindDrag(this.$refs.endDot, max, this.step);
    this.bindDrag(this.$refs.startDot, max, this.step);
  },
  methods: {
    /**
     * @description 绑定拖拽功能和限制最大值
     * @param {dom} el 元素
     * @param {number} max 可拖拽的最大值
     */
    bindDrag(el, max, step) {
      // 已绑定过的不再额外绑
      if (el.dragable) return;
      el.dragable = true;
      el.dragMax = max;
      el.step = step;
      el.dragX = 0;
      el.dragPercent = 0;
      el._onMousedown = onMousedown;
      el._onMousemove = onMousemove;
      el._onMouseup = onMouseup;

      el.inMove = this.onDrag;

      on(el, "mousedown", el._onMousedown);
    },
    /**
     * @description 元素被拖拽时触发，用来计算拖拽值
     */
    onDrag() {
      const startX = this.$refs.startDot.dragX;
      const endX = this.$refs.endDot.dragX;

      // 显示的长度
      if (startX < endX) {
        this.barOffset = `${startX}px`;
        this.barWidth = `${endX - startX}px`;
      } else {
        this.barOffset = `${endX}px`;
        this.barWidth = `${startX - endX}px`;
      }

      // 值计算
      if (this.range) {
        this.calcValue([
          this.$refs.startDot.dragPercent,
          this.$refs.endDot.dragPercent
        ]);
      } else {
        this.calcValue(this.$refs.endDot.dragPercent);
      }
    },
    /**
     * @description 值计算
     */
    calcValue(newVal) {
      const range = this.max - this.min;
      let leftVal, rightVal;
      if (this.range) {
        leftVal = Number((this.min + newVal[0] * range).toFixed(0));
        rightVal = Number((this.min + newVal[1] * range).toFixed(0));

        if (leftVal > rightVal) {
          this.$emit("input", [leftVal, rightVal].reverse());
        } else {
          this.$emit("input", [leftVal, rightVal]);
        }
      } else {
        rightVal = Number((this.min + newVal * range).toFixed(0));
        this.$emit("input", rightVal);
      }

      this.startValue = leftVal || 0;
      this.endValue = rightVal || 0;
    },
    /**
     * @description 值同步
     */
    syncValue(newVal) {}
  }
};

// 以下是拖拽辅助函数

function onMousedown(e) {
  this.offsetX = e.clientX - this.offsetLeft;
  // this.offsetY = e.clientY - this.offsetTop;

  this._onMousemove = this._onMousemove.bind(this);
  this._onMouseup = this._onMouseup.bind(this);

  this.draging = true;
  on(document.body, "mousemove", this._onMousemove);
  on(document.body, "mouseup", this._onMouseup);
}

function onMousemove(e) {
  if (!this.draging) return;

  // 当前的拖拽距离
  let moveX = e.clientX - this.offsetX;
  let halfWidth = this.offsetWidth / 2;

  // 拖拽的最大值和最小值
  let minX = 0 - halfWidth;
  let maxX = this.dragMax - halfWidth;

  // 校正数值为百分比, 默认步数1%
  const baseStep = this.step * (this.dragMax / 100);
  moveX = (moveX / baseStep).toFixed(0) * baseStep;
  // 限制拖拽的范围
  if (moveX < minX) {
    moveX = minX;
  }
  if (moveX > maxX) {
    moveX = maxX;
  }

  this.style.left = `${moveX}px`;

  this.dragPercent =
    (Number(((moveX + halfWidth) / baseStep).toFixed(0)) * this.step) / 100;

  // this.style.top = `${moveY}px`;

  this.dragX = moveX + halfWidth;
  this.inMove();
}

function onMouseup() {
  this.draging = false;
  off(document.body, "mousemove", this._onMousemove);
  off(document.body, "mouseup", this._onMouseup);
}
</script>
