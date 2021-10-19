---
title: Message 消息提示
---

### 基础用法

<template>
  <os-button @click="showMessage">消息</os-button>
</template>

```vue
<template>
  <os-button @click="showMessage">消息</os-button>
</template>
<script>
export default {
  methods: {
    showMessage() {
      this.$message({
        message: '大家好',
      })
    },
  },
}
</script>
```

### 消息增强

用来显示「成功、警告、消息、错误」类的操作反馈 <br />

<template>
  <os-button @click="open('success')" type="success">成功</os-button>
  <os-button @click="open('warning')" type="warning">警告</os-button>
  <os-button @click="open('error')" type="error">错误</os-button>
  <os-button @click="open('info')" type="info">消息</os-button>
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
    open(type) {
      this.$message[type]('消息文本')
    },
  },
}
</script>
```

### 可关闭

显示关闭按钮 <br />

<template>
  <os-button @click="showCloseMessage('success')" type="success">成功</os-button>
  <os-button @click="showCloseMessage('warning')" type="warning">警告</os-button>
  <os-button @click="showCloseMessage('error')" type="error">错误</os-button>
  <os-button @click="showCloseMessage('info')" type="info">消息</os-button>
</template>

```vue
<template>
  <os-button @click="showCloseMessage('success')" type="success"
    >成功</os-button
  >
  <os-button @click="showCloseMessage('warning')" type="warning"
    >警告</os-button
  >
  <os-button @click="showCloseMessage('error')" type="error">错误</os-button>
  <os-button @click="showCloseMessage('info')" type="info">消息</os-button>
</template>
<script>
export default {
  methods: {
    showCloseMessage(type) {
      this.$message({
        type,
        showClose: true,
        message: '看到右边这个打叉没？',
      })
    },
  },
}
</script>
```

### 使用 HTML 片段

message 属性支持传入 HTML 片段<br />

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
      this.$message({
        useHTMLString: true,
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
    showMessage() {
      this.$message({
        message: "大家好"
      })
    },
    open(type) {
      this.$message[type]("消息文本");
    },
    showCloseMessage(type) {
      this.$message({
        type,
        message: "看到右边这个打叉没？",
        showClose: true,
        duration: 0,
        
      })
    },
    showHTMLMessage() {
      this.$message({
        useHTMLString: true,
        message: `<span >给 <b>HTML</b> 加粗, 给 <i style="color: red">css</i> 斜体</span>`
      })
    }
  }
}
</script>

### 参数

|     参数      | 说明                                  | 类型    |           可选值           | 默认值 |
| :-----------: | :------------------------------------ | :------ | :------------------------: | :----- |
|    message    | 消息文字                              | string  |             --             | --     |
|     type      | 类型                                  | string  | success/warning/error/info | info   |
| useHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean |             --             | false  |
|   duration    | 显示时间, 毫秒。设为 0 则不会自动关闭 | number  |             --             | 3000   |
|   showClose   | 是否显示关闭按钮                      | boolean |             --             | false  |
