<template>
  <div class="my-notice">
    <!-- 右上角通知序列 -->
    <transition-group name="slide-right">
      <div
        class="my-notice-cell"
        :class="{ [`my-notice-cell-${item.type}`]: true }"
        v-for="item in topRight.list"
        :key="item.key"
        @click="handleClick(item)"
        :style="{ top: `${item.offset}px` }"
        :ref="item.key"
      >
        <i
          v-if="item.type"
          class="my-notice-cell-icon iconfont"
          :class="{
            [`icon-${item.type}`]: true,
            [`my-notice-cell-icon-${item.type}`]: true,
          }"
        />
        <div class="my-notice-cell-content">
          <p class="my-notice-cell-title">{{ item.title }}</p>
          <div
            class="my-notice-cell-text"
            v-if="item.useHTMLString"
            v-html="item.message"
          ></div>
          <div class="my-notice-cell-text" v-else>
            {{ item.message }}
          </div>
        </div>
        <i
          v-if="item.showClose"
          class="my-notice-cell-close iconfont icon-close"
          @click="remove(item)"
        />
      </div>
    </transition-group>
    <!-- 右下角通知序列 -->
    <transition-group name="slide-right">
      <div
        class="my-notice-cell"
        :class="{ [`my-notice-cell-${item.type}`]: true }"
        @click="handleClick(item)"
        v-for="item in bottomRight.list"
        :key="item.key"
        :style="{ bottom: `${item.offset}px` }"
        :ref="item.key"
      >
        <i
          v-if="item.type"
          class="my-notice-cell-icon iconfont"
          :class="{
            [`icon-${item.type}`]: true,
            [`my-notice-cell-icon-${item.type}`]: true,
          }"
        />
        <div class="my-notice-cell-content">
          <p class="my-notice-cell-title">{{ item.title }}</p>
          <div
            class="my-notice-cell-text"
            v-if="item.useHTMLString"
            v-html="item.message"
          ></div>
          <div class="my-notice-cell-text" v-else>
            {{ item.message }}
          </div>
        </div>
        <i
          v-if="item.showClose"
          class="my-notice-cell-close iconfont icon-close"
          @click="remove(item)"
        />
      </div>
    </transition-group>
    <!-- 左下角通知序列 -->
    <transition-group name="slide-left">
      <div
        class="my-notice-cell"
        :class="{ [`my-notice-cell-${item.type}`]: true }"
        @click="handleClick(item)"
        v-for="item in bottomLeft.list"
        :key="item.key"
        style="right: auto; left: 20px"
        :style="{ bottom: `${item.offset}px` }"
        :ref="item.key"
      >
        <i
          v-if="item.type"
          class="my-notice-cell-icon iconfont"
          :class="{
            [`icon-${item.type}`]: true,
            [`my-notice-cell-icon-${item.type}`]: true,
          }"
        />
        <div class="my-notice-cell-content">
          <p class="my-notice-cell-title">{{ item.title }}</p>
          <div
            class="my-notice-cell-text"
            v-if="item.useHTMLString"
            v-html="item.message"
          ></div>
          <div class="my-notice-cell-text" v-else>
            {{ item.message }}
          </div>
        </div>
        <i
          v-if="item.showClose"
          class="my-notice-cell-close iconfont icon-close"
          @click="remove(item)"
        />
      </div>
    </transition-group>
    <!-- 左上角通知序列 -->
    <transition-group name="slide-left">
      <div
        class="my-notice-cell"
        :class="{ [`my-notice-cell-${item.type}`]: true }"
        @click="handleClick(item)"
        v-for="item in topLeft.list"
        :key="item.key"
        style="right: auto; left: 20px"
        :style="{ top: `${item.offset}px` }"
        :ref="item.key"
      >
        <i
          v-if="item.type"
          class="my-notice-cell-icon iconfont"
          :class="{
            [`icon-${item.type}`]: true,
            [`my-notice-cell-icon-${item.type}`]: true,
          }"
        />
        <div class="my-notice-cell-content">
          <p class="my-notice-cell-title">{{ item.title }}</p>
          <div
            class="my-notice-cell-text"
            v-if="item.useHTMLString"
            v-html="item.message"
          ></div>
          <div class="my-notice-cell-text" v-else>
            {{ item.message }}
          </div>
        </div>
        <i
          v-if="item.showClose"
          class="my-notice-cell-close iconfont icon-close"
          @click="remove(item)"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
// 工具函数，用于判断传入的值是否符合条件
import { oneOf, toHump } from '../../utils/assist'

export default {
  name: 'MyMessage',
  data() {
    return {
      // 消息列表
      messageList: [],
      topRight: {
        offset: 20,
        list: [],
      },
      bottomRight: {
        offset: 20,
        list: [],
      },
      bottomLeft: {
        offset: 20,
        list: [],
      },
      topLeft: {
        offset: 20,
        list: [],
      },
      offsetTop: 20, // 当前消息的基础偏移量-top
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
      const key = `notice-need-key-by-random-${Math.random()}`
      const { duration, showClose } = params

      // 位置计算
      let position = oneOf(params.position, [
        'top-right',
        'bottom-right',
        'bottom-left',
        'top-left',
      ])
        ? params.position
        : 'top-right'

      position = toHump(position)

      const notice = {
        ...params,
        showClose: showClose || true,
        offset: this[position].offset,
        key,
        position,
      }

      this[position].list.push(notice)

      console.log('位置', position)

      this.$nextTick(() => {
        this[position].offset += this.$refs[key][0].clientHeight + 20
      })

      // 持续时间，传0则不关闭
      if (duration !== 0) {
        setTimeout(() => {
          this.remove(notice)
        }, duration || 4500)
      }
    },
    /**
     * @description 点击事件
     */
    handleClick(params) {
      if (typeof params.onClick === 'function') {
        params.onClick()
      }
    },
    /**
     * @description 移除消息
     */
    remove(params) {
      const {key, position, onClose} = params

      const list = this[position].list
      const target = this.$refs[key][0]

      let offset = 20
      if (target) {
        offset += target.clientHeight
        this[position].offset -= offset

        const index = list.findIndex((cell) => cell.key === key)

        if (typeof onClose === 'function') {
          onClose();
        }

        list.splice(index, 1)
        list.forEach((cell, i) => {
          if (i >= index) {
            cell.offset -= offset
          }
        })
      }
    },
  },
}
</script>
