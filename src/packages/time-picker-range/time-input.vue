<template>
  <div
    class="my-time-picker-range-input-container"
    ref="myInput"
    :class="{ 'my-time-picker-range-input-container-selected': focus }"
    @click="handleClick"
  >
    <input
      class="my-time-picker-range-input"
      type="text"
      ref="startInput"
      :value="startTimeLabel"
      placeholder="开始时间"
      readonly
    />
    <span class="my-time-picker-range-separator">至</span>
    <input
      class="my-time-picker-range-input"
      :value="endTimeLabel"
      type="text"
      ref="endInput"
      placeholder="结束时间"
      readonly
    />
    <i class="iconfont icon-time my-time-picker-range-icon" />
    <i
      class="iconfont icon-close my-time-picker-range-clean"
      v-show="startTimeLabel && endTimeLabel"
      ref="cleanBtn"
      @click="handleClean"
    />
  </div>
</template>

<script>
export default {
  name: "MyTimePickerRangeInput",
  data() {
    return {
      startTimeLabel: "",
      endTimeLabel: ""
    };
  },
  props: {
    focus: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 绑定点击事件
    document.addEventListener("click", this.addCloseEvent);
  },
  beforeDestroy() {
    // 释放点击事件
    document.removeEventListener("click", this.addCloseEvent);
  },
  methods: {
    handleClick(e) {
      if (e.path.includes(this.$refs.cleanBtn)) return;

      this.$emit("click");
    },
    /**
     * @description 控制提示框的显示/隐藏
     */
    addCloseEvent(event) {
      // 点击目标若不是组件内元素时，关闭选项弹窗
      let target = event.path.find(d => d === this.$refs.myInput);
      !target && this.$emit("close", event.path);
    },
    /**
     * @description 设置控件的时间内容
     */
    setValue(startTimeLabel, endTimeLabel) {
      if (startTimeLabel) {
        this.startTimeLabel = startTimeLabel;
      }
      if (endTimeLabel) {
        this.endTimeLabel = endTimeLabel;
      }
    },
    /**
     * @description 鼠标hover到选项上时，对应的时间文本需要被选中
     */
    setTextFocus(options) {
      // 取消选中
      // (document.selection &&
      //   document.selection.empty &&
      //   (document.selection.empty(), 1)) ||
      //   (window.getSelection && window.getSelection().removeAllRanges());

      let textDom = this.$refs.startInput;
      if (options.mark === "end") {
        textDom = this.$refs.endInput;
      }
      window.$textDom = textDom;

      textDom.setSelectionRange(options.start, options.end);
      textDom.focus();
    },
    /**
     * @description 清空操作
     */
    handleClean() {
      this.startTimeLabel = "";
      this.endTimeLabel = "";
      this.$emit("clean");
    }
  }
};
</script>
