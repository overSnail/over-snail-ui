<template>
  <transition name="fade">
    <div
      ref="popover"
      class="my-popover"
      :class="{
        [`my-popover-placement-${placement}`]: true
      }"
      :style="{ top: `${top}px`, left: `${left}px` }"
      v-show="panelVislbe"
    >
      <div class="my-popover-content" :style="{ width: width }">
        <slot>
          <p class="my-popover-content-title">{{ title }}</p>
          <div class="my-popover-content-inner">
            {{ content }}
          </div>
        </slot>
      </div>
      <span
        class="my-popover-angle"
        :class="{
          [`my-popover-angle-${placement}`]: true
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
      value: true,
      placement: "top",
      title: "我是标题",
      content: "",
      effect: "dark",
      width: "180px"
    };
  },
  computed: {
    panelVislbe() {
      return this.value && this.content && (this.visible || this.isFocus);
    }
  },
  mounted() {
    on(this.$refs.popover, "mouseenter", this.setFocus);
    on(this.$refs.popover, "mouseleave", this.setFocus);
  },
  methods: {
    setFocus(e) {
      this.isFocus = e.type === "mouseenter";
    }
  },
  beforeDestroy() {
    off(this.$refs.popover, "mouseenter", this.setFocus);
    off(this.$refs.popover, "mouseleave", this.setFocus);
  }
};
</script>
