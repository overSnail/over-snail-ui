<template>
  <div class="my-progress-dashboard">
    <svg :width="width" :height="width" class="my-progress-dashboard-svg">
      <circle
        :cx="x"
        :cy="y"
        :r="radius"
        :stroke-width="strokeWidth"
        stroke="#ebeef5"
        :transform="transform"
        fill="none"
        :stroke-dasharray="baseDasharray"
        :stroke-linecap="strokeLinecap"
      ></circle>
      <circle
        v-show="percentage > 0"
        :cx="x"
        :cy="y"
        :r="radius"
        :stroke-width="strokeWidth"
        :stroke="color"
        fill="none"
        :transform="transform"
        :stroke-dasharray="strokeDasharray"
        :stroke-linecap="strokeLinecap"
        style="transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s"
      ></circle>
    </svg>
    <div class="my-progress-dashboard-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { oneOf } from "../../utils/assist";

export default {
  data() {
    return {};
  },
  props: {
    // 底部圆的尺寸
    width: {
      type: Number,
      default: 130
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    color: {
      type: [String, Array, Function],
      default: "#00554a"
    },
    percentage: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: "123"
    },
    strokeLinecap: {
      validator(value) {
        return oneOf(value, ["butt", "round", "square"]);
      },
      type: String,
      default: "round"
    }
  },
  computed: {
    x() {
      return this.width / 2;
    },
    y() {
      return this.width / 2;
    },
    radius() {
      return (this.width - this.strokeWidth) / 2;
    },
    transform() {
      return `matrix(0,-1,1,0,0,${this.width})`;
    },
    strokeDasharray() {
      const perimeter = Math.PI * 2 * this.radius;
      // const showLength = (1 / 100) * perimeter - 3;
      const showLength =
        (Math.ceil(this.percentage * 0.75) / 100) * perimeter - 3;

      console.log("比例", showLength);
      return `${showLength} 1000`;
    },
    baseDasharray() {
      const perimeter = Math.PI * 2 * this.radius;
      const showLength = (75 / 100) * perimeter - 3;
      return `${showLength} 1000`;
    }
  }
};
</script>
