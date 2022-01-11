<template>
  <div class="my-time-picker-cell">
    <div class="my-time-picker-cell-content">
      <div class="my-time-picker-cell-list" @mousemove="onFocusTimeList(0, 2)">
        <ul class="my-time-picker-cell-list-ul" ref="hourList">
          <li
            class="my-time-picker-cell-list-li"
            :class="{
              'my-time-picker-cell-list-li-selected': item.selected,
              'my-time-picker-cell-list-li-placeholder': item.placeholder,
              'my-time-picker-cell-list-li-disabled':
                item.timestamp < startTimeStamp - 60 * 60 * 1000 ||
                item.timestamp > endTimeStamp
            }"
            v-for="item in hours"
            :key="item.value"
            @click="handleCellClick(item, $refs.hourList)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div class="my-time-picker-cell-list" @mousemove="onFocusTimeList(3, 5)">
        <ul class="my-time-picker-cell-list-ul" ref="minuteList">
          <li
            class="my-time-picker-cell-list-li"
            :class="{
              'my-time-picker-cell-list-li-selected': item.selected,
              'my-time-picker-cell-list-li-placeholder': item.placeholder,
              'my-time-picker-cell-list-li-disabled': item.disabled
            }"
            v-for="item in minutes"
            :key="item.value"
            @click="handleCellClick(item, $refs.minuteList)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div class="my-time-picker-cell-list" @mousemove="onFocusTimeList(6, 8)">
        <ul class="my-time-picker-cell-list-ul" ref="secondList">
          <li
            class="my-time-picker-cell-list-li"
            :class="{
              'my-time-picker-cell-list-li-selected': item.selected,
              'my-time-picker-cell-list-li-placeholder': item.placeholder,
              'my-time-picker-cell-list-li-disabled': item.disabled
            }"
            v-for="item in seconds"
            :key="item.value"
            @click="handleCellClick(item, $refs.secondList)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "../../utils/assist";

import Emitter from "../../mixins/emitter";

export default {
  data() {
    return {
      // 开始时间
      startTimeStamp: 0,
      // 结束时间
      endTimeStamp: 24 * 60 * 60 * 1000,
      // 时
      hours: [],
      // 分
      minutes: [],
      // 秒
      seconds: [],
      // 当前选择的具体小时
      currentHour: "",
      // 当前选择的具体分钟
      currentMinute: "",
      // 当前选择的具体秒数
      currentSecond: "",
      // 当前的年月日
      currentDate: dateFormat("YYYY-mm-dd", new Date())
    };
  },
  mixins: [Emitter],
  props: {
    timeRange: {
      type: String
    },
    // 标记，用于区分开始时间还是结束时间
    mark: {
      type: String,
      default: "start"
    }
  },
  watch: {
    /**
     * @description 有时间范围限制
     * @step1 格式判断
     * @step2 转为时间戳
     */
    timeRange: {
      handler(newVal) {
        if (newVal && newVal.split("-").length === 2) {
          const [start, end] = newVal.split("-");

          this.startTimeStamp =
            new Date(`${this.currentDate} ${start}`).getTime() -
            new Date(`${this.currentDate} 00:00:00`).getTime();
          this.endTimeStamp =
            new Date(`${this.currentDate} ${end}`).getTime() -
            new Date(`${this.currentDate} 00:00:00`).getTime();
        }

        // 设置小时的可用状态
        this.setHoursDisabled();

        this.adjustCellDisabled();
      },
      immediate: true
    },
    /**
     * @description 小时回调
     */
    currentHour: {
      handler(newVal) {
        // 获取基准值
        this.adjustCellDisabled();
        //
      },
      immediate: true
    },
    currentMinute: {
      handler(newVal) {
        // 获取基准值
        if (this.minutes.length > 0) {
          const originTimeStamp = this.minutes.find(d => d.label === newVal)
            .timestamp;
          this.seconds.forEach(second => {
            second.timestamp = originTimeStamp + (second.value - 2) * 1000;
            second.disabled =
              second.timestamp < this.startTimeStamp ||
              second.timestamp > this.endTimeStamp;
          });
        }
        //
      },
      immediate: true
    }
  },
  created() {
    this.initTimeValues();
  },
  mounted() {
    this.bindCellScroll();
  },
  methods: {
    /**
     * @description 初始化时分秒数据
     */
    initTimeValues() {
      let hours = [],
        minutes = [],
        seconds = [];

      // 塞入三个占位用的东西
      for (let i = 0; i < 2; i++) {
        hours.push({
          placeholder: true,
          value: `emp-${Math.random()}`,
          label: ""
        });
        minutes.push({
          placeholder: true,
          value: `emp-${Math.random()}`,
          label: ""
        });
        seconds.push({
          placeholder: true,
          value: `emp-${Math.random()}`,
          label: ""
        });
      }

      for (let i = 0; i < 60; i++) {
        i < 24 &&
          hours.push({
            value: i + 2,
            selected: false,
            timestamp: i * 3600 * 1000,
            disabled:
              i * 3600 * 1000 < this.startTimeStamp - 60 * 60 * 1000 ||
              i * 3600 * 1000 > this.endTimeStamp,
            label: i.toString().padStart(2, "0")
          });
        minutes.push({
          value: i + 2,
          selected: false,
          label: i.toString().padStart(2, "0")
        });
        seconds.push({
          value: i + 2,
          selected: false,
          label: i.toString().padStart(2, "0")
        });
      }

      // 塞入三个占位用的东西
      for (let i = 0; i < 2; i++) {
        hours.push({
          placeholder: true,
          value: `emp-${Math.random()}`,
          label: ""
        });
        minutes.push({
          placeholder: true,
          value: `emp-${Math.random()}`,
          label: ""
        });
        seconds.push({
          placeholder: true,
          value: `emp-${Math.random()}`,
          label: ""
        });
      }

      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    },
    /**
     * @description 时间点击
     */
    handleCellClick(cell, parentNode) {
      if (cell.placeholder || cell.disabled) return;
      parentNode.scrollTop = (cell.value - 2) * 30;
      parentNode.scrollOrder = cell.value;
      parentNode.onScroll(cell.value);
    },
    /**
     * @description 绑定滚动选择事件
     */
    bindCellScroll() {
      const { hourList, minuteList, secondList } = this.$refs;
      hourList.onScroll = this.hoursOnScroll;
      minuteList.onScroll = this.minutesOnScroll;
      secondList.onScroll = this.secondsOnScroll;
      bindScrollEvent(hourList);
      bindScrollEvent(minuteList);
      bindScrollEvent(secondList);
    },
    /**
     * @description 小时滚动回调
     * @param {number} index 滚动选择的序号
     */
    hoursOnScroll(index) {
      this.hours.forEach(d => (d.selected = false));
      this.hours[index].selected = true;
      this.currentHour = this.hours[index].label;

      this.emitValue();
    },
    /**
     * @description 分钟滚动回调
     * @param {number} index 滚动选择的序号
     */
    minutesOnScroll(index) {
      this.minutes.forEach(d => (d.selected = false));
      this.minutes[index].selected = true;
      this.currentMinute = this.minutes[index].label;

      this.emitValue();
    },
    /**
     * @description 秒滚动回调
     * @param {number} index 滚动选择的序号
     */
    secondsOnScroll(index) {
      this.seconds.forEach(d => (d.selected = false));
      this.seconds[index].selected = true;
      this.currentSecond = this.seconds[index].label;

      this.emitValue();
    },
    /**
     * @description 设置小时的可用性
     */
    setHoursDisabled() {
      this.hours.forEach(hour => {
        hour.disabled =
          hour.timestamp < this.startTimeStamp - 60 * 60 * 1000 ||
          hour.timestamp > this.endTimeStamp;
      });
    },
    /**
     * @description 值修改
     */
    setValue(nowTimeLabel) {
      const [hour, minute, second] = nowTimeLabel.split(":");

      setTimeout(() => {
        this.handleCellClick(
          {
            value: Number(hour) + 2
          },
          this.$refs.hourList
        );
        this.handleCellClick(
          {
            value: Number(minute) + 2
          },
          this.$refs.minuteList
        );
        this.handleCellClick(
          {
            value: Number(second) + 2
          },
          this.$refs.secondList
        );
      }, 0);
    },
    /**
     *
     */
    emitValue() {
      if (this.currentHour && this.currentMinute && this.currentSecond) {
        const currentLabel = `${this.currentHour}:${this.currentMinute}:${
          this.currentSecond
        }`;
        // 改变显示的值
        this.dispatch("MyTimePicker", "on-set-time-label", {
          timeLabel: currentLabel
        });

        this.dispatch("MyTimePickerRange", "on-set-time-label", {
          mark: this.mark,
          timeLabel: currentLabel
        });

        this.$emit("onScroll", currentLabel);
      }
    },
    getValue() {
      // 判断是否被禁用
      let hourDisabled = this.hours.find(d => d.label === this.currentHour)
        .disabled;
      let minuteDisabled = this.minutes.find(
        d => d.label === this.currentMinute
      ).disabled;
      let secondDisabled = this.seconds.find(
        d => d.label === this.currentSecond
      ).disabled;

      if (hourDisabled || minuteDisabled || secondDisabled) return;

      if (this.currentHour && this.currentMinute && this.currentSecond) {
        const currentLabel = `${this.currentHour}:${this.currentMinute}:${
          this.currentSecond
        }`;
        // 改变显示的值
        return currentLabel;
      } else {
        return "";
      }
    },
    /**
     * @description 鼠标移动到对应的时间类型区域，使对应的时间文本被选中
     */
    onFocusTimeList(start, end) {
      // 滚动时
      this.dispatch("MyTimePicker", "on-time-focus", { start, end });
      this.dispatch("MyTimePickerRange", "on-time-focus", {
        start,
        end,
        mark: this.mark
      });
    },
    /**
     * @description 调整时间选项的可用性
     */
    adjustCellDisabled() {
      let newVal = this.currentHour;
      if (this.hours.length > 0) {
        const originTimeStamp = this.hours.find(d => d.label === newVal)
          .timestamp;
        this.minutes.forEach(cell => {
          const timestamp = originTimeStamp + (cell.value - 2) * 60 * 1000;
          cell.timestamp = timestamp;
          // 判断是否可选
          cell.disabled =
            timestamp + 60 * 1000 <= this.startTimeStamp ||
            timestamp > this.endTimeStamp;

          if (cell.label === this.currentMinute) {
            this.seconds.forEach(second => {
              second.timestamp = timestamp + (second.value - 2) * 1000;
              second.disabled =
                second.timestamp < this.startTimeStamp ||
                second.timestamp > this.endTimeStamp;
            });
          }
        });
      }
    }
  }
};

const bindScrollEvent = function(el) {
  el.addEventListener("scroll", e => {
    el.scrollOrder = Number((el.scrollTop / 30).toFixed(0)) + 2;
    el.onScroll && el.onScroll(el.scrollOrder);
  });
};
</script>
