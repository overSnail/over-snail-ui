---
title: Notification 通知
pageClass: os-page-class
---

# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

### 基础用法

<p class="os-vuepress-my-p">适用性广泛的通知栏</p>

<template>
  <os-button @click="showMessage1" type="info">可自动关闭</os-button>
  <os-button @click="showMessage2" type="info">不会自动关闭</os-button>
</template>

<p class="os-vuepress-my-p">Notification 组件提供通知功能，在Vue上全局注册了$notify方法，接收一个options字面量参数，在最简单的情况下，你可以设置title字段和message字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置duration，可以控制关闭的时间间隔，特别的是，如果设置为0，则不会自动关闭。注意：duration接收一个Number，单位为毫秒，默认为4500。</p>

```vue
<template>
  <div>
    <os-button @click="showMessage1" type="info">可自动关闭</os-button>
    <os-button @click="showMessage2" type="info">不会自动关闭</os-button>
  </div>
</template>
<script>
export default {
  methods: {
    showMessage1() {
      this.$notify({
        title: '温馨提示',
        message: '我会在三秒后消失',
      })
    },
    showMessage2() {
      this.$notify({
        title: '温馨提示',
        message: '请点击关闭按钮',
        duration: 0,
      })
    },
  },
}
</script>
```

### 带有倾向性

<p class="os-vuepress-my-p">带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息
用来显示「成功、警告、消息、错误」类的操作反馈 </p>

<template>
  <os-button @click="openSuccess" type="success">成功</os-button>
  <os-button @click="openWarning" type="warning">警告</os-button>
  <os-button @click="openError" type="error">错误</os-button>
  <os-button @click="openInfo" type="info">消息</os-button>
</template>

```vue
<template>
  <os-button @click="open('success')" type="success">成功</os-button>
  <os-button @click="open('warning')" type="warning">警告</os-button>
  <os-button @click="open('error')" type="error">错误</os-button>
  <os-button @click="open('info')" type="info">消息</os-button>
</template>
<script>
export default {
  methods: {
    openSuccess() {
      this.$notify({
        type: 'success',
        title: '成功',
        message: '精彩的演出，值得庆祝',
      })
    },
  },
}
</script>
```

### 自定义弹出位置

<p class="os-vuepress-my-p">可以让 Notification 从屏幕四角中的任意一角弹出</p>

<template>
  <os-button @click="open('top-right')" type="info">右上角</os-button>
  <os-button @click="open('bottom-right')" type="info">右下角</os-button>
  <os-button @click="open('bottom-left')" type="info">左下角</os-button>
  <os-button @click="open('top-left')" type="info">左上角</os-button>
</template>

<p class="os-vuepress-my-p">使用position属性定义 Notification 的弹出位置，支持四个选项：top-right、top-left、bottom-right、bottom-left，默认为top-right。</p>

```vue
<template>
  <div>
    <os-button @click="open('top-right')" type="info">右上角</os-button>
    <os-button @click="open('bottom-right')" type="info">右下角</os-button>
    <os-button @click="open('bottom-left')" type="info">左下角</os-button>
    <os-button @click="open('top-left')" type="info">左上角</os-button>
  </div>
</template>
<script>
export default {
  methods: {
    open(pos) {
      this.$notify({
        title: '自定义位置',
        message: `当前位置：${pos}`,
        position: pos,
      })
    },
  },
}
</script>
```

### 使用 HTML 片段

<p class="os-vuepress-my-p">message 属性支持传入 HTML 片段</p>

<template>
  <os-button @click="showHTMLMessage" >HTML片段</os-button>
</template>

```vue
<template>
  <os-button @click="showHTMLMessage">HTML片段</os-button>
</template>
<script>
export default {
  methods: {
    showHTMLMessage() {
      this.$notify({
        useHTMLString: true,
        title: 'HTML片段',
        message: `<span >给 <b>HTML</b> 加粗, 给 <i style="color: red">css</i> 斜体</span>`,
      })
    },
  },
}
</script>
```

<script>
export default {
  methods: {
    showMessage1() {
      this.$notify({
        title: "温馨提示",
        message: '我会自动消失',
        onClose() {
          console.log("我被关闭了")
        }
      })
    },
    showMessage2() {
      this.$notify({
        title: "温馨提示",
        message: '请点击关闭按钮',
        duration: 0
      })
      
    },
    openSuccess() {
      this.$notify({
        type: "success",
        title: "成功",
        message: "精彩的演出，值得庆祝",
      })
    },
    openWarning() {
      this.$notify({
        type: "warning",
        title: "警告",
        message: "距离上班时间还有5分钟，请马上起床",
      })
    },
    openError() {
      this.$notify.error({
        title: "错误",
        message: "回答错误，本次考试不合格"
      })
    },
    openInfo() {
      this.$notify.info({
        title: "提示",
        message: "听君一席话，如听一席话"
      })
    },
    open(pos) {
      this.$notify({
        title: "自定义位置",
        message: `当前位置：${pos}`,
        position: pos
      })
    },
    showCloseMessage(type) {
      this.$notify({
        type,
        message: "看到右边这个打叉没？",
        showClose: false,
        duration: 0,
        
      })
    },
    showHTMLMessage() {
      this.$notify({
        useHTMLString: true,
        title: "HTML片段",
        message: `<span >给 <b>HTML</b> 加粗, 给 <i style="color: red">css</i> 斜体</span>`
      })
    }
  }
}
</script>

### 参数

|     参数      | 说明                                  | 类型     |                   可选值                    | 默认值    |
| :-----------: | :------------------------------------ | :------- | :-----------------------------------------: | :-------- |
|     title     | 标题                                  | string   |                     --                      |
|    message    | 消息文字                              | string   |                     --                      | --        |
|     type      | 类型                                  | string   |         success/warning/error/info          | info      |
|   position    | 自定义弹出位置                        | string   | top-right/top-left/bottom-right/bottom-left | top-right |
| useHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean  |                     --                      | false     |
|   duration    | 显示时间, 毫秒。设为 0 则不会自动关闭 | number   |                     --                      | 3000      |
|   showClose   | 是否显示关闭按钮                      | boolean  |                     --                      | false     |
|    onClick    | 点击 Notification 时的回调函数        | function |                     --                      | --        |
|    onClose    | 关闭时的回调函数                      | function |                     --                      | --        |
