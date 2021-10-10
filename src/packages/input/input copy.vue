<template>
  <div
    class="my-input"
    :class="{ 'my-input-disabled': disabled, [`my-input-${size}-size`]: true }"
    ref="myInput"
  >
    <input
      class="my-input-input"
      :class="{
        'my-input-input-disabled': disabled,
        'my-input-input-icon': needPaddingRight,
        'my-input-input-icon-suffix': prefixIcon,
        [`my-input-input-${size}-size`]: true,
      }"
      type="text"
      :value="currentValue"
      @input="handleInput"
      @focus="handleFocus"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <!-- 前置图标区域 -->
    <span class="my-input-icon my-input-icon-prefix">
      <i
        class="iconfont"
        :class="{
          [`${prefixIcon}`]: prefixIcon,
        }"
      />
    </span>
    <!-- 后置图标区域 -->
    <span class="my-input-icon">
      <i
        class="iconfont icon-close"
        v-if="clearable && currentValue && !disabled"
        @click="handleClean"
      />
      <i
        v-else
        class="iconfont"
        :class="{
          [`${suffixIcon}`]: suffixIcon,
        }"
      />
    </span>
    <!-- 输入建议选项框 -->
    <transition name="fade-bottom">
      <div
        class="my-input-suggestion"
        v-show="panelVisible"
        ref="mySuggestion"
        v-if="suggestion && this.options.length > 0"
      >
        <div
          class="my-input-suggestion-cell"
          @click="setSuggestion(item.value)"
          v-for="item in options"
          :key="item.value"
        >
          <slot :item="item">
            {{ item.value }}
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// 工具函数，用于判断传入的值是否符合条件
import { oneOf, debounce } from '../../utils/assist'

export default {
  name: 'MyInput',
  data() {
    return {
      currentValue: this.value, // 当前输入值
      panelVisible: false, // 鼠标在hover阶段
      options: [], // 输入建议可选项
    }
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    // 占位符
    placeholder: {
      type: String,
      default: '请输入',
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否显示清空按钮
    clearable: {
      type: Boolean,
      default: false,
    },
    // 前置图标名称
    prefixIcon: {
      type: String,
      default: '',
    },
    // 后置图标名称
    suffixIcon: {
      type: String,
      default: '',
    },
    // 尺寸
    size: {
      validator(value) {
        return oneOf(value, ['large', 'medium', 'small', 'mini'])
      },
      type: String,
      default: 'medium',
    },
    // 是否开启输入建议
    suggestion: {
      type: Boolean,
      default: false,
    },
    // 输入建议回调函数
    fetchSuggestions: {
      type: Function,
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.currentValue = newVal
      },
      immediate: true,
    },
  },
  computed: {
    // 是否需要设置输入框的右侧内边距
    needPaddingRight() {
      return this.clearable && this.suffixIcon
    },
  },
  mounted() {
    // 绑定点击事件
    document.addEventListener('click', this.addCloseEvent)
    this.getSuggesitions()
  },
  beforeDestroy() {
    // 释放点击事件
    document.removeEventListener('click', this.addCloseEvent)
  },
  methods: {
    /**
     * @description 输入事件
     */
    handleInput(_e) {
      const value = _e.target.value
      this.currentValue = value
      this.$emit('input', value)
      debounce(
        () => {
          this.getSuggesitions()
        },
        333,
        'fetch-suggestions'
      )
    },
    /**
     * @description 清空输入值
     */
    handleClean() {
      if (!this.disabled) {
        this.currentValue = ''
        this.$emit('input', this.currentValue)
      }
    },
    /**
     * @description input的hover事件，该函数作用是控制输入提示的显示
     */
    handleFocus() {
      this.panelVisible = true
      this.getSuggesitions()
    },
    /**
     * @description 控制提示框的显示/隐藏
     */
    addCloseEvent(event) {
      // 点击目标若不是组件内元素时，关闭选项弹窗
      let target = event.path.find((d) => d === this.$refs.myInput)
      if (!target && this.panelVisible) {
        this.panelVisible = false
      }
    },
    /**
     * @description 获取输入提示数据
     */
    getSuggesitions() {
      this.fetchSuggestions &&
        this.fetchSuggestions(this.currentValue, (options) => {
          console.log(options)
          this.options = options
        })
    },
    /**
     * @description 设置所选中的值
     */
    setSuggestion(str) {
      this.currentValue = str
      this.$emit('input', this.currentValue)
      this.panelVisible = false
    },
  },
}
</script>
