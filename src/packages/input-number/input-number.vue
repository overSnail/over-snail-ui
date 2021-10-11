<template>
  <div
    class="my-input-number"
    :class="{ [`my-input-number-size-${size}`]: true }"
  >
    <span
      class="my-input-number-button my-input-number-button-left"
      :class="{
        'my-input-number-button-disabled': disabled || decreaseForbid,
      }"
      @click="handleDecrease"
      >-</span
    >
    <input
      class="my-input-number-input"
      :class="{
        'my-input-number-input-disabled': disabled,
      }"
      type="text"
      :value="currentValue"
      @blur="handleBlur"
      @input="handleInput"
      :disabled="disabled"
    />
    <span
      class="my-input-number-button my-input-number-button-right"
      :class="{
        'my-input-number-button-disabled': disabled || increaseForbid,
      }"
      @click="handleIncrease"
      >+</span
    >
  </div>
</template>

<script>
// 数学运算库
import { add, subtract, format, bignumber } from 'mathjs'

// 工具函数，用于判断传入的值是否符合条件
import { oneOf } from '../../utils/assist'

export default {
  name: 'MyInputNumber',
  data() {
    return {
      currentValue: 0, // 初始值
      increaseForbid: false, // 是否还能递增
      decreaseForbid: false, // 是否还能递减
    }
  },
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 用户定义的步数
    step: {
      type: Number,
      default: 1,
    },
    // 是否限制为严格步数
    stepStrictly: {
      type: Boolean,
      default: false,
    },
    // 精度
    precision: {
      type: Number,
      default: 0,
    },
    // 最大值
    max: {
      type: Number,
    },
    // 最小值
    min: {
      type: Number,
    },
    size: {
      validator(value) {
        return oneOf(value, ['large', 'medium', 'small', 'mini'])
      },
      type: String,
      default: 'medium',
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.currentValue = newVal
        this.handleBlur()
      },
      immediate: true,
    },
  },
  methods: {
    /**
     * @description 数值增加
     */
    handleIncrease() {
      if (this.disabled || this.increaseForbid) return

      this.currentValue = format(
        add(bignumber(this.currentValue), bignumber(this.step))
      )

      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    },
    /**
     * @description 数值减少
     */
    handleDecrease() {
      if (this.disabled || this.decreaseForbid) return
      this.currentValue = format(
        subtract(bignumber(this.currentValue), bignumber(this.step))
      )
      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    },
    /**
     * @description 失去焦点时，做下值类型校验
     */
    handleBlur() {
      if (typeof this.currentValue !== 'number') {
        this.currentValue = Number(this.currentValue.replace(/[^\d.-]/g, ''))
      }
      // NaN校验
      if (isNaN(this.currentValue)) {
        this.currentValue = 0
      }

      // 严格步数校验
      if (this.stepStrictly) {
        this.currentValue = this._approCalc(this.currentValue, this.step)
      }

      // 精度校验
      if (this.precision > 0) {
        this.currentValue = this.currentValue.toFixed(
          Math.floor(this.precision)
        )
      }

      // 数值范围判断
      if (this.min && this.currentValue <= this.min) {
        this.decreaseForbid = true
        this.currentValue = this.min
      } else {
        this.decreaseForbid = false
      }
      if (this.max && this.currentValue >= this.max) {
        this.increaseForbid = true
        this.currentValue = this.max
      } else {
        this.increaseForbid = false
      }

      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    },
    /**
     * @description 输入值变更
     */
    handleInput(_e) {
      const value = _e.target.value
      this.currentValue = value
    },
    /**
     * @description 将数值按照四舍五入的方式进行约算，比如5对3约算后是6
     * @param {number} num 需要被约算的数
     * @param {number} base 基数
     */
    _approCalc(num, base) {
      return Math.round(num / base) * base
    },
  },
}
</script>
