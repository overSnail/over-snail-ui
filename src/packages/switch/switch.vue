<template>
  <label class="my-switch" :class="{ [`my-switch-disabled`]: disabled }">
    <input
      type="checkbox"
      class="my-switch-input"
      :disabled="disabled"
      @click="handleClick"
    />
    <span
      class="my-switch-label"
      :class="{
        [`my-switch-label-selected`]: value == inactiveValue
      }"
      :style="{ color: _inactiveColor }"
      >{{ inactiveText }}</span
    >
    <span
      class="my-switch-dot"
      :class="{
        [`my-switch-dot-selected`]: value === activeValue,
        [`my-switch-dot-disabled`]: disabled
      }"
      :style="{
        [`background-color`]:
          value === activeValue ? _activeColor : _inactiveColor,
        [`border-color`]: value === activeValue ? _activeColor : _inactiveColor
      }"
    ></span>
    <span
      class="my-switch-label"
      :class="{
        [`my-switch-label-selected`]: value == activeValue
      }"
      :style="{ color: _activeColor }"
      >{{ activeText }}</span
    >
  </label>
</template>

<script>
export default {
  name: "nbSwitch",
  data() {
    return {};
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    activeText: {
      type: [Boolean, String, Number],
      default: null
    },
    inactiveText: {
      type: [Boolean, String, Number],
      default: null
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    }
  },
  computed: {
    _activeColor() {
      return this.value === this.activeValue && this.activeColor
        ? this.activeColor
        : "";
    },
    _inactiveColor() {
      return this.value === this.inactiveValue && this.inactiveColor
        ? this.inactiveColor
        : "";
    }
  },
  methods: {
    handleClick() {
      let newVal =
        this.value === this.activeValue ? this.inactiveValue : this.activeValue;
      this.$emit("input", newVal);
    }
  }
};
</script>
