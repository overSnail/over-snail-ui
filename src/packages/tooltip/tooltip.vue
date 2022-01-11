<template>
  <transition name="tooltip-fade">
    <div
      ref="tooltip"
      class="my-tooltip"
      :class="{
        [`my-tooltip-placement-${placement}`]: true,
        [`my-tooltip-${effect}`]: true
      }"
      :style="{ top: `${top}px`, left: `${left}px` }"
      v-show="panelVislbe"
    >
      <div class="my-tooltip-content">
        <slot>
          {{ content }}
        </slot>
      </div>
      <span
        class="my-tooltip-angle"
        :class="{
          [`my-tooltip-angle-${placement}`]: true,
          [`my-tooltip-angle-${placement}-${effect}`]: true
        }"
        :style="{ top: angleTop, left: angleLeft }"
      ></span>
    </div>
  </transition>
</template>

<script>
import { on, off } from "../../utils/dom";

export default {
  data() {
    return {
      top: 0,
      left: 0,
      angleTop: "100%",
      angleLeft: "50%",
      visible: false,
      isFocus: false,
      placement: "top",
      content: "",
      effect: "dark"
    };
  },
  computed: {
    panelVislbe() {
      return this.visible || this.isFocus;
    }
  },
  mounted() {
    on(this.$refs.tooltip, "mouseenter", this.setFocus);
    on(this.$refs.tooltip, "mouseleave", this.setFocus);
  },
  methods: {
    setFocus(e) {
      this.isFocus = e.type === "mouseenter";
    }
  },
  beforeDestroy() {
    off(this.$refs.tooltip, "mouseenter", this.setFocus);
    off(this.$refs.tooltip, "mouseleave", this.setFocus);
  }
};
</script>
