---
title: Alert 警告
pageClass: os-page-class
---

# 警告

用于页面中展示重要的提示信息。

### 基础用法

<template>
  <os-alert type="success" title="操作成功" />
  <os-alert type="info" title="提醒你一下" />
  <os-alert type="warning" title="警告提示" />
  <os-alert type="error" title="错误提示" />
</template>

Alert 组件提供四种主题，由 type 属性指定，默认值为 info。

```vue
<template>
  <os-alert type="success" title="操作成功" />
  <os-alert type="info" title="提醒你一下" />
  <os-alert type="warning" title="警告提示" />
  <os-alert type="error" title="错误提示" />
</template>
```

### 主题

Alert 组件提供了两个不同的主题：light 和 dark。<br />

<template>
  <os-alert type="success" title="操作成功" effect="dark" />
  <os-alert type="info" title="提醒你一下" effect="dark" />
  <os-alert type="warning" title="警告提示" effect="dark" />
  <os-alert type="error" title="错误提示" effect="dark" />
</template>

通过设置 effect 属性来改变主题，默认为 light

```vue
<template>
  <os-alert type="success" title="操作成功" effect="dark" />
  <os-alert type="info" title="提醒你一下" effect="dark" />
  <os-alert type="warning" title="警告提示" effect="dark" />
  <os-alert type="error" title="错误提示" effect="dark" />
</template>
```

### 自定义关闭按钮

自定义关闭按钮为文字或其他符号。 <br />

<template>
  <os-alert type="success" title="操作成功" :closeable="false" />
  <os-alert type="info" title="提醒你一下" close-text="知道了"/>
  <os-alert type="warning" title="警告提示" @close="handleClose" />
</template>

在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。closable 属性决定是否可关闭，接受 boolean，默认为 true。你可以设置 close-text 属性来代替右侧的关闭图标，注意：close-text 必须为文本。设置 close 事件来设置关闭时的回调。

```vue
<template>
  <os-alert type="success" title="操作成功" :closeable="false" />
  <os-alert type="info" title="提醒你一下" close-text="知道了" />
  <os-alert type="warning" title="警告提示" @close="handleClose" />
</template>
<script>
export default {
  methods: {
    handleClose() {
      this.$message({
        message: '关闭',
      })
    },
  },
}
</script>
```

### 显示/隐藏 icon

表示某种状态时提升可读性。<br />

<template>
  <os-alert type="success" title="操作成功" :show-icon="false" />
  <os-alert type="info" title="提醒你一下" :show-icon="false" />
  <os-alert type="warning" title="警告提示" :show-icon="false" />
  <os-alert type="error" title="错误提示" :show-icon="false" />
</template>

通过设置 show-icon 属性来控制 Alert 的 icon，这能更有效地向用户展示你的显示意图。

```vue
<template>
  <os-alert type="success" title="操作成功" :show-icon="false" />
  <os-alert type="info" title="提醒你一下" :show-icon="false" />
  <os-alert type="warning" title="警告提示" :show-icon="false" />
  <os-alert type="error" title="错误提示" :show-icon="false" />
</template>
```

### 带有辅助性文字介绍

包含标题和内容，解释更详细的警告。 <br />

<template>
  <os-alert type="success" title="操作成功" description="你的操作很标准，必须点个赞你的操作很标准，必须点个赞你的操作很标准，必须点个赞你的操作很标准，必须点个赞你的操作很标准，必须点个赞你的操作很标准，必须点个赞你的操作很标准，必须点个赞" />
  <os-alert type="info" title="提醒你一下" description="帅哥，雨伞记得带走" />
  <os-alert type="warning" title="警告提示" description="前方有10公里通行缓慢，预计通行时间2小时" />
  <os-alert type="error" title="错误提示" description="这瓶快乐水已经过期啦" />
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.$message({
        message: "关闭"
      })
    },
  }
}
</script>

### Alert 属性

|    参数     | 说明                               | 类型    |           可选值           | 默认值 |
| :---------: | :---------------------------------: | :------ | :------------------------: | :----- |
|    title    | 标题                               | string  |             --             | --     |
|    type     | 类型                               | string  | success/warning/error/info | info   |
| description | 辅助性文字。也可通过默认 slot 传入 | string  |             --             | --     |
|  closable   | 是否显示关闭按钮                   | boolean |             --             | true   |
| close-text  | 关闭按钮自定义文本                 | string  |             --             | --     |
|  show-icon  | 是否显示图标                       | boolean |             --             | true   |
|   effect    | 选择提供的主题                     | string  |         light/dark         | light  |


### Alert 插槽
|    名称     | 说明                               |
| :---------: | :---------------------------------: |
| -- | 描述 |
| title | 标题的内容 |

### Alert 事件
| 事件名称 | 说明 | 回调参数 |
| :---------: | :---------------------------------: | :------- |
| close | 关闭alert时触发的事件 | -- |