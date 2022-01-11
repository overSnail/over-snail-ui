<template>
  <div
    class="my-progress"
    :class="{ 'my-progress-circle-area': type === 'circle' }"
  >
    <!-- 线形进度条 -->
    <div class="my-progress-line" v-if="type === 'line'">
      <div
        class="my-progress-line-bar"
        :style="{
          height: `${strokeWidth}px`,
          'border-radius': `${strokeWidth / 2}px`
        }"
      >
        <div
          class="my-progress-line-bar-inner"
          :style="{
            width: `${percentage}%`,
            'border-radius': `${strokeWidth / 2}px`,
            'line-height': `${strokeWidth}px`,
            'background-color': customColor
          }"
        >
          <span
            v-if="textInside && showText"
            class="my-progress-line-bar-inner-text"
            >{{ text }}</span
          >
        </div>
      </div>
      <div
        class="my-progress-line-text"
        :class="{ [`my-progress-line-text-${status}`]: true }"
        v-if="!textInside && showText"
      >
        <i
          class="iconfont"
          :class="{
            [`icon-${status}`]: true
          }"
          v-if="status !== 'primary'"
        />
        <span v-else>
          {{ text }}
        </span>
      </div>
    </div>
    <!-- 环形进度条 -->
    <my-circle
      v-if="type === 'circle'"
      :strokeWidth="strokeWidth"
      :color="customColor"
      :percentage="percentage"
      :strokeLinecap="strokeLinecap"
    >
      <span
        v-if="showText"
        :class="{ [`my-progress-line-text-${status}`]: true }"
      >
        <i
          class="iconfont"
          :class="{
            [`icon-${status}`]: true
          }"
          v-if="status !== 'primary'"
        />
        <span v-else>
          {{ text }}
        </span>
      </span>
    </my-circle>
    <!-- 仪表盘 -->
    <my-dashboard
      v-if="type === 'dashboard'"
      :strokeWidth="strokeWidth"
      :color="customColor"
      :percentage="percentage"
      :strokeLinecap="strokeLinecap"
    >
      <span
        v-if="showText"
        :class="{ [`my-progress-line-text-${status}`]: true }"
      >
        <i
          class="iconfont"
          :class="{
            [`icon-${status}`]: true
          }"
          v-if="status !== 'primary'"
        />
        <span v-else>
          {{ text }}
        </span>
      </span>
    </my-dashboard>
  </div>
</template>

<script>
// todo: 需要从scss中导入样式变量
// import scssVar from "../../styles/common/var.scss";

const scssVar = {
  primaryColor: "#00554a",
  textColor: "#909399",
  successColor: "#67c23a",
  warningColor: "#e6a23c",
  errorColor: "#f56c6c"
};

import { oneOf } from "../../utils/assist";
import circle from "./circle.vue";
import dashboard from "./dashboard.vue";

export default {
  components: {
    myCircle: circle,
    myDashboard: dashboard
  },
  data() {
    return {};
  },
  props: {
    // 百分比
    percentage: {
      type: Number,
      required: true,
      validator: val => val >= 0 && val <= 100,
      default: 0
    },
    // 文本格式化
    format: {
      type: Function
    },
    status: {
      validator(value) {
        return oneOf(value, ["success", "warning", "error", "primary"]);
      },
      type: String,
      default: "primary"
    },
    // 百分比内显
    textInside: {
      type: Boolean,
      default: false
    },
    // 进度条高度
    strokeWidth: {
      type: Number
    },
    // 自定义颜色
    color: {
      type: [String, Array, Function]
    },
    // 进度条类型
    type: {
      validator(value) {
        return oneOf(value, ["line", "circle", "dashboard"]);
      },
      type: String,
      default: "line"
    },
    // 是否显示进度条文字内容
    showText: {
      type: Boolean,
      default: true
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
    text() {
      if (typeof this.format === "function") {
        return this.format(this.percentage) || "";
      } else {
        return `${this.percentage}%`;
      }
    },
    customColor() {
      if (this.color) {
        if (typeof this.color === "string") {
          return this.color;
        } else if (Array.isArray(this.color)) {
          return this.__getStepColor();
        } else if (typeof this.color === "function") {
          return this.color(this.percentage);
        }
      } else {
        // console.log("颜色", scssVar[`${this.status}Color`]);
        return scssVar[`${this.status}Color`];
      }
    }
  },
  methods: {
    /**
     * @description 根据当前百分比获取分段颜色
     */
    __getStepColor() {
      for (let i = 0; i < this.color.length; i++) {
        if (this.color[i].percentage >= this.percentage) {
          return this.color[i].color;
        }
      }
    }
  }
};
</script>
