<template>
  <div class="my-time-picker">
    <time-input-simple
      ref="myInput"
      @click="handleClick"
      @close="handleClose"
      @clean="handleClean"
    />
    <transition name="fade-bottom">
      <time-picker-simple
        v-show="timeVisible"
        ref="myTimeCell"
        @setTimeLabel="setTimeLabel"
        @cancel="timeVisible = false"
        @submit="handleSubmit"
        :pickerOptions="pickerOptions"
      />
    </transition>
  </div>
</template>

<script>
import Emitter from "../../mixins/emitter";

import TimePickerSimple from "./time-picker-simple.vue";
import TimeInputSimple from "./time-input-simple.vue";

import { dateFormat } from "../../utils/assist";

export default {
  name: "MyTimePicker",
  mixins: [Emitter],
  components: {
    TimePickerSimple,
    TimeInputSimple
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
      type: [Date, Number, String],
      default: () => new Date()
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
    if (this.value) {
      this.syncValue();
    }

    this.$on("on-set-time-label", options => {
      this.$refs.myInput.setLabel(options.timeLabel);
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
      let nowTime = new Date();

      if (this.value) {
        if (this.value instanceof Date) {
          nowTime = this.value;
        } else {
          nowTime = new Date(this.value);
        }
      } else {
        this.changeValue(nowTime);
      }

      // 日期对象转为时间字符串
      const timeLabel = dateFormat("HH:MM:SS", nowTime);

      // 传参给输入框和时间选择器
      this.$refs.myTimeCell.setValue(timeLabel);
      this.$refs.myInput.setValue(timeLabel);
    },
    /**
     * @description 清空操作
     */
    handleClean() {},
    /**
     * @description input的hover事件，该函数作用是控制输入提示的显示
     */
    handleClick() {
      this.timeVisible = true;
    },
    /**
     * @description 面板关闭的判断
     */
    handleClose(path) {
      let target = path.find(d => d === this.$refs.myTimeCell.$el);

      if (this.timeVisible && !target) {
        this.timeVisible = false;
      }
    },
    /**
     * @description 滚动时的值同步
     */
    setTimeLabel(timeLabel) {},
    changeValue(val) {
      this.$emit("input", val);
    },
    handleSubmit(timeLabel) {
      this.__emitValue(timeLabel);
      this.timeVisible = false;
    },
    /**
     * @description 将所选值转为日期对象
     */
    __emitValue(timeLabel) {
      let nowDate = dateFormat("YYYY-mm-dd", new Date());
      this.$emit("input", new Date(`${nowDate} ${timeLabel}`));
    }
  }
};
</script>
