<template>
  <transition name="fade">
    <div class="my-loading" :class="{'my-loading-fullscreen': fullscreen}" :style="{ background: bgColor }">
      <div class="my-loading-content">
        <div class="my-loading-icon">
          <i class="my-loading-animate iconfont icon-loading" />
        </div>
        <p class="my-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      text: '', // 显示文本
      bgColor: '', // 背景颜色
      fullscreen: false, // 是否覆盖全局
    }
  },
}
</script>
