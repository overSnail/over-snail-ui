<template>
  <div class="my-datepage-cell">
    <!-- 顶部日期切换区 -->
    <div class="my-datepage-cell-title">
      <div class="my-datepage-control">
        <i class="iconfont icon-left2" />
      </div>
      <div class="my-datepage-control" @click="setMonth(false)">
        <i class="iconfont icon-left" />
      </div>
      <div class="my-datepage-year">
        {{ this.currentYear }}年{{ this.currentMonth }}月
      </div>
      <div class="my-datepage-control" @click="setMonth(true)">
        <i class="iconfont icon-right" />
      </div>
      <div class="my-datepage-control">
        <i class="iconfont icon-right2" />
      </div>
    </div>
    <!-- 星期展示区 -->
    <div class="my-datepage-header">
      <div class="my-datepage-header-cell">日</div>
      <div class="my-datepage-header-cell">一</div>
      <div class="my-datepage-header-cell">二</div>
      <div class="my-datepage-header-cell">三</div>
      <div class="my-datepage-header-cell">四</div>
      <div class="my-datepage-header-cell">五</div>
      <div class="my-datepage-header-cell">六</div>
    </div>
    <!-- 具体日期展示 -->
    <div class="my-datepage-table">
      <div
        class="my-datepage-table-cell"
        :class="{
          'my-datepage-table-now': item.isNow,
          'my-datepage-table-nomonth': item.isBefore || item.isAfter
        }"
        v-for="item in dateList"
        :key="item.value"
      >
        <span
          @click="clickCell(item)"
          :class="{ 'my-datepage-table-selected': item.value === value }"
        >
          {{ item.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { format, resolveDateCell } from "./config";

import Emitter from "../../mixins/emitter";

export default {
  name: "myDateCell",
  mixins: [Emitter],
  data() {
    return {
      timestamp: new Date().getTime(),
      currentYear: "----",
      currentMonth: "--",
      currentDate: "--",
      // 日期项
      dateList: []
    };
  },
  props: {
    value: {
      type: [Number, String]
    }
  },
  watch: {
    value: {
      handler(newVal) {
        if (newVal) {
          this.timestamp = newVal;
        }
      },
      immediate: true
    },
    timestamp: {
      handler(newVal) {
        if (newVal) {
          this.syncValue();
        } else {
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.dispatch("myDatePage", "on-date-cell-add", this);
  },
  methods: {
    /**
     * @description 初始化
     */
    initData() {},
    /**
     * @description 值同步
     */
    syncValue() {
      const date = new Date(this.timestamp);

      this.currentYear = format(date, "yyyy");
      this.currentMonth = format(date, "MM");
      this.currentDate = format(date, "d");
      this.resolveDateList(this.timestamp);
    },
    /**
     * @description 根据时间戳，计算出当前日历页上的日期格子
     */
    resolveDateList(timestamp) {
      this.dateList = resolveDateCell(timestamp);
    },
    /**
     * @description
     */
    setMonth(isForward) {
      let sumMonth = Number(this.currentYear) * 12 + Number(this.currentMonth);

      if (isForward) {
        sumMonth += 1;
      } else {
        sumMonth -= 1;
      }

      let month = sumMonth % 12;
      let year = parseInt(sumMonth / 12);

      if (month === 0) {
        month = 12;
        year -= 1;
      }

      this.timestamp = new Date(`${year}-${month}`).getTime();
    },
    /**
     * @description 选中
     */
    clickCell(date) {
      // 点击前一个月/后一个月的日期时，需要变更面板至同一个月
      if (date.isBefore || date.isAfter) {
        this.resolveDateList(date.value);
      }
      this.$emit("dateSelect", date);
      this.$emit("input", date.value);
    }
  }
};
</script>
