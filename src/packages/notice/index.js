import Notice from './notice.vue'
import Vue from 'vue'

/**
 * @description 消息通知的实例创建函数
 * @param {object} params 创建实例时的参数
 */
Notice.newInstance = (params = {}) => {
  // 组件实例创建
  const Instance = new Vue({
    render(h) {
      return h(Notice, {
        params,
      })
    },
  })
  // 创建后需要挂载
  const component = Instance.$mount()
  // 全局通知函数，我们挂载到body元素上
  document.body.appendChild(component.$el)

  // 拿到该组件实例
  const message = component.$children[0]

  return {
    add(_message) {
      message.add(_message)
    },
  }
}

//
let messageInstance
/**
 * @description 导出使用方法
 */
const showNotice = (_message) => {
  // 单例模式核心代码，判断单例是否存在，若不存在则创建
  messageInstance = messageInstance || Notice.newInstance()
  messageInstance.add(_message)
}

/**
 * @description 4种增强型的消息使用方式
 */
['info', 'success', 'warning', 'error'].forEach((key) => {
  showNotice[key] = (options) => {
    messageInstance = messageInstance || Notice.newInstance()
    messageInstance.add({
      ...options,
      type: key,
    })
  }
})

export default showNotice
