<template>
  <div class="my-messagebox" :class="{ 'my-messagebox-show': visible }">
    <transition name="messagebox-fade">
      <div class="my-messagebox-wrap" v-show="visible">
        <div class="my-messagebox-title">
          <span>{{ title }}</span>
          <i
            class="my-messagebox-close iconfont icon-close"
            @click="handleClose"
          />
        </div>
        <div class="my-messagebox-prompt" v-if="type === 'prompt'">
          <p v-if="useHTMLString" v-html="message">

          </p>
          <p v-else>
            <slot>
              {{ message }}
            </slot>
          </p>
          <div class="my-messagebox-input">
            <os-input style="width: 100%" v-model="currentValue" />
          </div>
        </div>
        <div class="my-messagebox-content" v-else>
          <i
            v-show="type === 'confirm'"
            class="my-messagebox-icon iconfont icon-warning"
          />
          <div class="my-messagebox-text" v-if="useHTMLString" v-html="message">

          </div>
          <div class="my-messagebox-text" v-else>
            <slot>
              {{ message }}
            </slot>
          </div>
        </div>
        <div class="my-messagebox-footer">
          <os-button
            @click="handleCancel"
            v-show="type !== 'alert'"
            type="info"
            style="margin-right: 5px"
            >取消</os-button
          >
          <os-button @click="handleSubmit">确定</os-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Button from '../button'
import Input from '../input'

export default {
  name: 'MyMessageBox',
  components: {
    osButton: Button,
    osInput: Input,
  },
  data() {
    return {
      useHTMLString: false, // 是否使用HTML片段
      currentValue: '', // 输入的内容
      title: '', // 标题
      message: '', // 消息内容
      type: 'alert',
      visible: false,
      callback: '', // 点击确定按钮的回调
      resolve: '', // resolve回调
      reject: '', // reject回调
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.currentValue = ''
      }
    },
  },
  methods: {
    /**
     * @description alert的参数
     * @param {object} params 参数
     */
    alert(params) {
      // 参数处理
      const { title, message, type, callback, resolve, reject, useHTMLString } = params

      this.type = type

      this.title = title
      this.message = message
      this.useHTMLString = useHTMLString || false

      this.callback = callback
      this.resolve = resolve
      this.reject = reject

      this.visible = true
    },
    handleClose() {
      this.visible = false
    },
    /**
     * @description 确定按钮事件
     */
    handleSubmit() {
      this.visible = false
      // 是否传了callback函数，若是有就执行，否则执行resolve
      if (typeof this.callback === 'function') {
        this.callback(this.currentValue)
      } else {
        this.resolve(this.currentValue)
      }
    },
    /**
     * @description 取消按钮回调
     */
    handleCancel() {
      this.visible = false
      this.reject()
    },
  },
}
</script>
