<template>
  <div class="my-time-picker-input-simple">
    <input
      type="text"
      readonly
      placeholder="请选择"
      class="time-input"
      :value="currentVal"
      ref="myInput"
      @click="handleClick"
    />
    <i class="iconfont icon-time my-time-picker-input-simple-icon" />
    <i
      class="iconfont icon-close my-time-picker-input-simple-clean"
      v-show="currentVal"
      ref="cleanBtn"
      @click="handleClean"
    />
  </div>
</template>

<script>
export default {
  name: "MyTimeInputSimple",
  data() {
    return {
      // 展示的值
      currentVal: ""
    };
  },
  watch: {
    value: {
      type: [Date, String, Number]
    }
  },
  methods: {
    handleClick(e) {
      if (e.path.includes(this.$refs.cleanBtn)) return;

      this.$emit("click");
    },
    handleClean() {
      this.currentVal = "";
      this.$emit("clean");
    },
    /**
     * @description 控制提示框的显示/隐藏
     */
    addCloseEvent(event) {
      // 点击目标若不是组件内元素时，关闭选项弹窗
      let target = event.path.find(d => d === this.$refs.myInput);
      !target && this.$emit("close", event.path);
    },
    setValue(nowTimeLabel) {
      this.currentVal = nowTimeLabel;

      // this.currentVal = dateFormat("HH:MM:SS", nowTime);
    },
    setLabel(label) {
      this.currentVal = label;
    },
    /**
     * @description 设置文字的选中效果
     */
    setTextFocus(options) {
      const textDom = this.$refs.myInput;
      textDom.setSelectionRange(options.start, options.end);
    }
  },
  mounted() {
    // 绑定点击事件
    document.addEventListener("click", this.addCloseEvent);
  },
  beforeDestroy() {
    // 释放点击事件
    document.removeEventListener("click", this.addCloseEvent);
  }
};
</script>
