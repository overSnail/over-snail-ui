<template>
  <button
    class="my-button"
    :disabled="disabled || loading"
    :class="{
      [`my-button-${type}`]: true,
      [`my-button-${type}-disabled`]: disabled,
      [`my-button-size-${size}`]: true,
      [`my-button-size-${size}-round`]: round,
      [`my-button-size-${size}-circle`]: circle,
      [`my-button-loading-layer`]: loading
    }"
    @click="handleClick"
  >
    <i
      class="iconfont icon-loading"
      :class="{ [`my-button-loading`]: true }"
      v-if="loading"
    />
    <i :class="['iconfont', `${icon}`]" v-if="!loading"></i>
    <slot></slot>
  </button>
</template>

<script>
// 工具函数，用于判断传入的值是否符合条件
import { oneOf } from "../../utils/assist";

export default {
  name: "Button",
  data() {
    return {};
  },
  props: {
    type: {
      validator(value) {
        return oneOf(value, [
          "primary",
          "info",
          "success",
          "warning",
          "text",
          "error"
        ]);
      },
      type: String,
      default: "primary"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      validator(value) {
        return oneOf(value, ["large", "medium", "small", "mini"]);
      },
      type: String,
      default: "medium"
    },
    // 图标
    icon: {
      type: String
    },
    // 圆角按钮
    round: {
      type: Boolean,
      default: false
    },
    // 圆形按钮
    circle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>
