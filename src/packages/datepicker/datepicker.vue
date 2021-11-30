<template>
  <div class="my-datepicker">
    <div class="my-datepicker-inner" ref="myInput">
      <input
        class="my-datepicker-inner-input"
        :class="{
          ['my-datepicker-inner-input-select']: visible,
          [`my-datepicker-inner-input-disabled`]: disabled,
          [`my-datepicker-inner-input-size-${size}`]: true
        }"
        type="text"
        placeholder="请选择"
        :disabled="disabled"
        :value="currentLabel"
        readonly
        @click="handleClick"
      />
      <i
        class="my-datepicker-inner-icon icon-delete"
        :class="{
          'my-datepicker-inner-icon-focus': visible,
          [`my-datepicker-inner-icon-size-${size}`]: true
        }"
        v-show="!(clearable && this.currentValue && onHover)"
      />
      <span
        class="my-datepicker-inner-icon"
        v-show="clearable && this.currentValue && onHover"
        @click="handleClear"
        >1</span
      >
    </div>
    <transition name="fade-bottom">
      <component
        :is="componentId"
        v-show="visible"
        :value="value"
        @change="onValueChange"
      ></component>
    </transition>
  </div>
</template>

<script>
import { oneOf } from "../../utils/assist";
import Emitter from "../../mixins/emitter";

import DatePage from "../datepage/datepage.vue";

const TRENDSCOMPONENT = {
  date: DatePage
};

export default {
  name: "DatePicker",
  mixins: [Emitter],
  components: {},
  data() {
    return {
      visible: false,
      currentLabel: "",
      currentValue: "",
      // 鼠标是否在父级元素上，该属性会影响清空按钮的显示
      onHover: false,
      componentId: DatePage
    };
  },
  props: {
    value: {
      type: [String, Array, Number],
      default: ""
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    size: {
      validator(value) {
        return oneOf(value, ["mini", "small", "default", "large"]);
      },
      default: "default"
    }
  },
  watch: {
    type: {
      handler(newVal) {
        this.componentId = TRENDSCOMPONENT[newVal];
      },
      immediate: true
    }
  },
  methods: {
    handleClick() {
      this.visible = !this.visible;
    },
    handleClear() {},
    onValueChange(date) {
      if (this.type === "date") {
        this.currentValue = date.value;
        this.currentLabel = date.format;
        this.visible = false;
      }
    }
  }
};
</script>
