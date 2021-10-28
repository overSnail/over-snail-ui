<template>
  <transition name="fade">
    <div
      class="my-alert"
      :class="{ [`my-alert-${effect}-${type}`]: true }"
      v-if="visible"
    >
      <span class="my-alert-icon" :class="{'my-alert-icon-large': description}" v-if="showIcon">
        <i class="iconfont" :class="{ [`icon-${type}`]: true }" />
      </span>
      <div class="my-alert-content">
        <p class="my-alert-content-title" :style="{'font-weight': description ? 'bold' : 'inherit'}">
          <slot name="title">{{ title }}</slot>
        </p>
        <p class="my-alert-content-description">
          <slot>
            {{  description  }}
          </slot>
        </p>
        
      </div>
      <span class="my-alert-close" @click="handleClose" v-if="closeable">
        <span v-if="closeText">{{ closeText }}</span>
        <i class="iconfont icon-close" v-else />
      </span>
    </div>
  </transition>
</template>

<script>
// 工具函数，用于判断传入的值是否符合条件
import { oneOf } from '../../utils/assist'

export default {
  name: 'MyAlert',
  data() {
    return {
      visible: true,
    }
  },
  props: {
    // 标题
    title: {
      type: String,
    },
    // 主题，light和dark两种
    effect: {
      validator(value) {
        return oneOf(value, ['light', 'dark'])
      },
      type: String,
      default: 'light',
    },
    // 类型
    type: {
      validator(value) {
        return oneOf(value, ['info', 'success', 'warning', 'error'])
      },
      type: String,
      default: 'info',
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default: true,
    },
    // 是否显示关闭按钮
    closeable: {
      type: Boolean,
      default: true
    },
    // 关闭按钮文案
    closeText: {
      type: String
    },
    description: {
      type: String
    }
  },
  methods: {
    handleClose() {
      this.visible = false
      this.$emit("close")
    },
  },
}
</script>
