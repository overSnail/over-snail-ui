<template>
  <label
    class="my-checkbox"
    :class="{
      'my-checkbox-checked': checked,
      'my-checkbox-disabled': forbidden,
      [`my-checkbox-${size}-border`]: border,
      [`my-checkbox-${size}-button`]: button,
      'my-checkbox-checked-button': checked && button
    }"
  >
    <input
      type="checkbox"
      class="my-checkbox-input"
      @click="handleClick"
      :disabled="forbidden"
    />
    <span
      class="my-checkbox-icon"
      :class="{
        'my-checkbox-icon-checked': checked,
        'my-checkbox-icon-indeterminate': indeterminate,
        'my-checkbox-icon-indeterminate-disabled': forbidden && indeterminate,
        'my-checkbox-icon-disabled': forbidden,
        'my-checkbox-icon-checked-disabled': forbidden && checked,
        'my-checkbox-icon-button': button
      }"
    >
    </span>
    <span class="my-checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
// 工具函数，用于判断传入的值是否符合条件
import { oneOf } from "../../utils/assist";

import Emitter from "../../mixins/emitter";

export default {
  name: "MyCheckbox",
  mixins: [Emitter],
  data() {
    return {
      checked: false, // 是否被选中
      myDisabled: false, // 是否被禁用，该属性由父级控制
      limitDisabled: false, // 是否因为父级数量限制而被禁用
      button: false // 是否渲染成按钮样式
    };
  },
  props: {
    // v-model的值
    value: {
      type: [Boolean, Number, String],
      default: false
    },
    // 不确定状态
    indeterminate: {
      type: Boolean,
      default: false
    },
    // 是否禁用该组件
    disabled: {
      type: Boolean,
      default: false
    },
    // 选中状态下的值，在多选时发挥作用。
    label: {
      type: [Boolean, Number, String],
      default: ""
    },
    // 是否绘制边框
    border: {
      type: Boolean,
      default: false
    },
    // 尺寸
    size: {
      validator(value) {
        return oneOf(value, ["large", "medium", "small", "mini"]);
      },
      type: String,
      default: "medium"
    }
  },
  watch: {
    value: {
      handler(newVal) {
        this.checked = newVal;
      },
      immediate: true
    }
  },
  computed: {
    forbidden() {
      return this.disabled || this.myDisabled || this.limitDisabled;
    }
  },
  mounted() {
    // 通知myCheckboxGroup组件调用on-checkbox-add方法，参数为当前checkbox实例
    this.dispatch("myCheckboxGroup", "on-checkbox-add", this);
  },
  beforeDestroy() {
    // 移除时，调用myCheckboxGroup组件的on-checkbox-remove方法
    this.dispatch("myCheckboxGroup", "on-checkbox-remove", this);
  },
  methods: {
    /**
     * @description 复选框点击事件
     */
    handleClick() {
      this.checked = !this.checked;
      this.$emit("input", this.checked);
      this.$emit("change", this.checked);
      this.dispatch("myCheckboxGroup", "on-checkbox-select", this);
    }
  }
};
</script>
