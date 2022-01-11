<template>
  <div class="my-time-picker-range">
    <time-input
      ref="myInput"
      @click="handleFocus"
      @close="handleClose"
      @clean="handleClean"
      :focus="timeVisible"
    />
    <transition name="fade-bottom">
      <time-panel
        v-show="timeVisible"
        ref="myTimePanel"
        :pickerOptions="pickerOptions"
        @cancel="timeVisible = false"
        @submit="handleSubmit"
      />
    </transition>
  </div>
</template>

<script>
import Emitter from "../../mixins/emitter";

import TimePanel from "./time-panel.vue";
import TimeInput from "./time-input.vue";

import { dateFormat } from "../../utils/assist";

export default {
  name: "MyTimePickerRange",
  mixins: [Emitter],
  components: {
    TimePanel,
    TimeInput
  },
  data() {
    return {
      timeVisible: false
    };
  },
  props: {
    /**
     * @description 绑定值
     */
    value: {
      type: Array
    },
    /**
     * @description 选择器选项
     */
    pickerOptions: {
      type: Object
    }
  },
  watch: {
    timeVisible(newVal) {
      newVal && this.syncValue();
    }
  },
  mounted() {
    if (this.value && this.value.length === 2) {
      this.syncValue();
    }

    // 时间选择器滚动时，设置弹窗内的内容
    this.$on("on-set-time-label", options => {
      if (options.mark === "start") {
        this.$refs.myInput.setValue(options.timeLabel, undefined);
      } else if (options.mark === "end") {
        this.$refs.myInput.setValue(undefined, options.timeLabel);
      }
    });

    this.$on("on-time-focus", options => {
      this.$refs.myInput.setTextFocus(options);
    });
  },
  methods: {
    /**
     * @description 值同步
     */
    syncValue() {
      // 1. 将获取的value转成日期对象
      let startTime = new Date();
      let endTime = new Date();

      if (this.value && this.value.length === 2) {
        if (this.value[0] instanceof Date) {
          startTime = this.value[0];
        }
        if (this.value[1] instanceof Date) {
          endTime = this.value[1];
        }
      } else {
        this.changeValue([startTime, endTime]);
      }
      // 日期对象转为时间字符串
      const startTimeLabel = dateFormat("HH:MM:SS", startTime);
      const endTimeLabel = dateFormat("HH:MM:SS", endTime);

      // 传参给输入框和时间选择器
      this.$refs.myTimePanel.setValue(startTimeLabel, endTimeLabel);
      this.$refs.myInput.setValue(startTimeLabel, endTimeLabel);
    },
    /**
     * @description 选中
     */
    handleFocus() {
      this.timeVisible = true;
    },
    /**
     * @description 关闭
     */
    handleClose(path) {
      let target = path.find(d => d === this.$refs.myTimePanel.$el);

      if (this.timeVisible && !target) {
        this.timeVisible = false;
      }
    },
    changeValue(val) {
      this.$emit("input", val);
    },
    handleSubmit(timeLabelRange) {
      this.__emitValue(timeLabelRange);
      this.timeVisible = false;
    },
    /**
     * @description 清空所选值
     */
    handleClean() {
      this.$emit("input", []);
    },
    /**
     * @description 将所选值转为日期对象
     */
    __emitValue(timeLabelRange) {
      let nowDate = dateFormat("YYYY-mm-dd", new Date());

      let startTime = new Date(`${nowDate} ${timeLabelRange[0]}`);
      let endTime = new Date(`${nowDate} ${timeLabelRange[1]}`);

      this.$emit("input", [startTime, endTime]);
    }
  }
};
</script>
