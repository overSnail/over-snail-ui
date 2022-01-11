<template>
  <!-- 任意时间点 -->
  <div class="my-time-picker-range-panel">
    <div class="my-time-picker-range-panel-content">
      <div class="my-time-picker-range-panel-cell">
        <p class="my-time-picker-range-panel-label">开始时间</p>
        <time-cell
          class="my-time-picker-range-panel-time"
          @onScroll="setEndTimeRange"
          :time-range="startTimeRange"
          ref="startTimeCell"
        />
      </div>
      <div class="my-time-picker-range-panel-cell">
        <p class="my-time-picker-range-panel-label">结束时间</p>
        <time-cell
          mark="end"
          class="my-time-picker-range-panel-time"
          :time-range="endTimeRange"
          ref="endTimeCell"
        />
      </div>
    </div>
    <div class="my-time-picker-range-control">
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
import TimeCell from "../time-picker/time-cell.vue";

export default {
  components: {
    TimeCell
  },
  data() {
    return {
      startTimeRange: "00:00:00-23:59:59",
      endTimeRange: "00:00:00-23:59:59"
    };
  },
  props: {
    /**
     * @description 选择器选项
     */
    pickerOptions: {
      type: Object
    }
  },
  watch: {
    "pickerOptions.selectableRange": {
      handler(newVal) {
        if (newVal && newVal.length === 2) {
          [this.startTimeRange, this.endTimeRange] = newVal;
        } else {
          this.startTimeRange = "00:00:00-23:59:59";
          this.endTimeRange = "00:00:00-23:59:59";
        }
      },
      immediate: true
    }
  },
  methods: {
    /**
     * @description 设置选择的值
     * @param {string} timeLabel 显示的时间，格式为2021-05-02
     */
    setValue(startTime, endTime) {
      this.$refs.startTimeCell.setValue(startTime);
      this.$refs.endTimeCell.setValue(endTime);
    },
    handleCancel() {
      this.$emit("cancel");
    },
    handleSubmit() {
      const startTime = this.$refs.startTimeCell.getValue();
      const endTime = this.$refs.endTimeCell.getValue();
      startTime && endTime && this.$emit("submit", [startTime, endTime]);
    },
    /**
     * @description 设置结束时间的选择范围
     */
    setEndTimeRange(startTime) {
      let min = startTime;
      if (
        this.pickerOptions &&
        this.pickerOptions.selectableRange &&
        this.pickerOptions.selectableRange.length === 2
      ) {
        const limit = this.pickerOptions.selectableRange[1].split("-")[0];
        if (startTime <= limit) {
          min = limit;
        }
      }

      this.endTimeRange = `${min}-23:59:59`;
    }
  }
};
</script>
