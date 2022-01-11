<template>
  <!-- 任意时间点 -->
  <div class="my-time-picker-simple">
    <time-cell
      ref="timeCell"
      :timeRange="timeRange"
      @setTimeLabel="setTimeLabel"
    />
    <div class="my-time-picker-control">
      <span class="my-time-picker-control-btn" @click="handleCancel">取消</span>
      <span
        class="my-time-picker-control-btn my-time-picker-control-btn-sure"
        @click="handleSubmit"
        >确定</span
      >
    </div>
  </div>
</template>

<script>
import TimeCell from "./time-cell.vue";

export default {
  components: {
    TimeCell
  },
  data() {
    return {};
  },
  props: {
    /**
     * @description 选择器选项
     */
    pickerOptions: {
      type: Object
    }
  },
  computed: {
    timeRange() {
      if (this.pickerOptions && this.pickerOptions.selectableRange) {
        return this.pickerOptions.selectableRange;
      } else {
        return undefined;
      }
    }
  },
  methods: {
    /**
     * @description 设置选择的值
     * @param {string} timeLabel 显示的时间，格式为2021-05-02
     */
    setValue(nowTime) {
      this.$refs.timeCell.setValue(nowTime);
    },
    setTimeLabel(timeLabel) {
      this.$emit("setTimeLabel", timeLabel);
    },
    handleCancel() {
      this.$emit("cancel");
    },
    handleSubmit() {
      const value = this.$refs.timeCell.getValue();
      value && this.$emit("submit", value);
    }
  }
};
</script>
