<template>
  <div class="my-message">
    <transition-group name="slide">
      <div
        class="my-message-cell"
        :class="{ [`my-message-cell-${item.type}`]: true }"
        v-for="item in messageList"
        :key="item.key"
        :style="{ top: `${item.top}px` }"
        :ref="item.key"
      >
        <i class="my-message-cell-icon iconfont" :class="{[`icon-${item.type}`]:true}" />
        
        <div class="my-message-cell-text" v-if="item.useHTMLString" v-html="item.message">
        </div>
        <div class="my-message-cell-text" v-else>
          {{ item.message }}
        </div>
        <i
          v-if="item.showClose"
          class="my-message-cell-close iconfont icon-close"
          @click="remove(item.key)"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'MyMessage',
  data() {
    return {
      // 消息列表
      messageList: [],
    }
  },

  methods: {
    /**
     * @description 添加新消息
     * @param {object} 消息提示的参数
     */
    add(params) {
      /*
        用随机数来生成一个不重复的key
        一方面是transition-group需要key
        另一个是作为删除时的遍历依据
      */
      const key = `i-need-key-by-random-${Math.random()}`
      const top = 20 + 70 * this.messageList.length
      const { duration, message,showClose, type, useHTMLString } = params

      this.messageList.push({
        message: message,
        showClose,
        useHTMLString,
        type: type || 'info',
        top,
        key,
      })

      // 持续时间，传0则不关闭
      if (duration !== 0) {
        setTimeout(() => {
          this.remove(key)
        }, duration || 3000)
      }
    },
    /**
     * @description 移除消息
     */
    remove(key) {
      const index = this.messageList.findIndex((cell) => cell.key === key)
      this.messageList.splice(index, 1)
    },
  },
}
</script>
