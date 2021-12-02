<template>
  <transition name="fade">
    <div
      ref="popconfirm"
      class="my-popconfirm"
      :class="{
        [`my-popconfirm-placement-${placement}`]: true
      }"
      :style="{ top: `${top}px`, left: `${left}px` }"
      v-show="panelVislbe"
    >
      <div class="my-popconfirm-content" :style="{ width: width }">
        <p class="my-popconfirm-content-title">
          <i
            v-if="!hideIcon"
            class="iconfont my-popconfirm-content-title-icon"
            :class="{ [`${icon}`]: true }"
            :style="{ color: iconColor }"
          />
          {{ title }}
        </p>
        <div class="my-popconfirm-content-control">
          <my-button :type="cancelButtonType" size="mini" @click="onCancel">{{
            cancelButtonText
          }}</my-button>
          <my-button :type="confirmButtonType" size="mini" @click="onSubmit">{{
            confirmButtonText
          }}</my-button>
        </div>
      </div>
      <span
        class="my-popconfirm-angle"
        :class="{
          [`my-popconfirm-angle-${placement}`]: true
        }"
        :style="{ top: angleTop, left: angleLeft }"
      ></span>
    </div>
  </transition>
</template>

<script>
import Button from "../button";
import { on, off } from "../../utils/dom";

export default {
  components: {
    myButton: Button
  },
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
      title: "",
      effect: "dark",
      width: "220px",
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      icon: "icon-warning",
      iconColor: "#e6a23c",
      confirmButtonType: "primary",
      cancelButtonType: "text",
      hideIcon: false
    };
  },
  computed: {
    panelVislbe() {
      return this.value && (this.visible || this.isFocus);
    }
  },
  mounted() {
    on(this.$refs.popconfirm, "mouseenter", this.setFocus);
    on(this.$refs.popconfirm, "mouseleave", this.setFocus);
  },
  methods: {
    setFocus(e) {
      this.isFocus = e.type === "mouseenter";
    },
    onSubmit() {
      if (typeof this.handleSubmit === "function") {
        this.isFocus = false;
        this.handleSubmit();
      }
    },
    onCancel() {
      if (typeof this.handleCancel === "function") {
        this.isFocus = false;
        this.handleCancel();
      }
    }
  },
  beforeDestroy() {
    off(this.$refs.popconfirm, "mouseenter", this.setFocus);
    off(this.$refs.popconfirm, "mouseleave", this.setFocus);
  }
};
</script>
