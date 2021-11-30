<template>
  <transition :name="disableTransitions ? '' : 'fade'">
    <div
      class="my-tag"
      :class="{
        [`my-tag-${effect}-${type}`]: true,
        [`my-tag-size-${size}`]: true
      }"
      v-if="visible"
    >
      <slot></slot>
      <i
        class="iconfont icon-close my-tag-close"
        @click="handleClose"
        v-if="closeable"
      />
    </div>
  </transition>
</template>

<script>
// 工具函数，用于判断传入的值是否符合条件
import { oneOf } from "../../utils/assist";

export default {
  name: "MyTag",
  data() {
    return {
      visible: true
    };
  },
  props: {
    size: {
      validator(value) {
        return oneOf(value, ["large", "medium", "small", "mini"]);
      },
      type: String,
      default: "large"
    },
    type: {
      validator(value) {
        return oneOf(value, ["primary", "success", "warning", "text", "error"]);
      },
      type: String,
      default: "primary"
    },
    effect: {
      validator(value) {
        return oneOf(value, ["light", "dark", "plain"]);
      },
      type: String,
      default: "light"
    },
    closeable: {
      type: Boolean,
      default: false
    },
    disableTransitions: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.visible = false;
      this.$emit("close");
    }
  }
};
</script>
