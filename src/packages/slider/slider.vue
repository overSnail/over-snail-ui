<template>
  <div class="my-slider">
    <!-- 横向 -->
    <horizontal v-model="currentValue" />
  </div>
</template>

<script>
import horizontal from "./horizontal.vue";

export default {
  components: {
    horizontal
  },
  name: "MySlider",
  data() {
    return {
      currentValue: undefined
    };
  },
  props: {
    value: {
      type: [Number, Array],
      default: 0
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
    range: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    currentValue(newVal) {
      this.calcValue(newVal);
    },
    value(newVal) {
      this.currentValue = newVal;
    }
  },
  methods: {
    /**
     * @description 值计算
     */
    calcValue(newVal) {
      this.$emit("input", newVal);
    }
  }
};
</script>
