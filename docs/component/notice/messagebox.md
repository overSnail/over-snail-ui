---
title: MessageBox 弹框
pageClass: os-page-class
---

# MessageBox 弹框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

### 消息提示

<p class="os-vuepress-my-p">当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>

<template>
  <os-button @click="showMsg" type="text">点击打开 Message Box</os-button>
</template>

```vue
<template>
  <os-button @click="showMsg" type="text">点击打开 Message Box</os-button>
</template>
<script>
export default {
  methods: {
    showMsg() {
      this.$alert('你的假期余额不足', '温馨提示').then((res) => {
        this.$message.info('你点击了确定')
      })
    },
  },
}
</script>
```

### 确认消息

<p class="os-vuepress-my-p">提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>

<template>
  <os-button @click="showConfirm" type="text">点击打开 Message Box</os-button>
</template>

```vue
<template>
  <os-button @click="showConfirm" type="text">点击打开 Message Box</os-button>
</template>
<script>
export default {
  methods: {
    showConfirm() {
      this.$confirm('确认执行该删除操作', '警告')
        .then((res) => {
          this.$message.success('文件删除成功')
        })
        .catch((err) => {
          this.$message.info('取消操作')
        })
    },
  },
}
</script>
```

### 提交内容

<p class="os-vuepress-my-p">当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。</p>

<template>
  <os-button @click="showPrompt" type="text">点击打开 Message Box</os-button>
</template>

```vue
<template>
  <os-button @click="showPrompt" type="text">点击打开 Message Box</os-button>
</template>
<script>
export default {
  methods: {
    showPrompt() {
      this.$prompt('请输入口号', '提示')
        .then((res) => {
          this.$message.success(`输入内容：${res}`)
        })
        .catch((err) => {
          this.$message.info('取消操作')
        })
    },
  },
}
</script>
```

### 自定义

<p class="os-vuepress-my-p">可自定义配置不同内容。弹出层的内容可以是 VNode，所以我们能把一些自定义组件传入其中。</p>

<template>
  <os-button @click="showVNode" type="text">点击打开 Message Box</os-button>
</template>

```vue
<template>
  <os-button @click="showVNode" type="text">点击打开 Message Box</os-button>
</template>

<script>
export default {
  methods: {
    showVNode() {
      const h = this.$createElement
      this.$alert(
        h('p', null, [
          h('span', null, '类型：'),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]),
        '温馨提示'
      )
    },
  },
}
</script>
```

### 使用 HTML 片段

<p class="os-vuepress-my-p">message 属性支持传入 HTML 片段。</p>

<template>
  <os-button @click="showHTML" type="text">点击打开 Message Box</os-button>
</template>

```vue
<template>
  <os-button @click="showHTML" type="text">点击打开 Message Box</os-button>
</template>

<script>
export default {
  methods: {
    showHTML() {
      this.$alert(
        `<strong>加粗和<i style="color: green">颜色</i></strong>`,
        'HTML片段',
        {
          useHTMLString: true,
        }
      )
    },
  },
}
</script>
```

<!-- 以下是运行代码 -->
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    showMsg() {
      this.$alert("你的假期余额不足","温馨提示").then(res => {
        this.$message.info("你点击了确定")
      })
    },
    showConfirm() {
      this.$confirm("确认执行该删除操作？", "警告").then(res => {
        this.$message.success("文件删除成功")
      }).catch(err => {
        console.log(err)
        this.$message.info("取消操作")
      })
    },
    showPrompt() {
      this.$prompt('请输入口号', '提示')
        .then((res) => {
          this.$message.success(`输入内容：${res}`)
        })
        .catch((err) => {
          this.$message.info('取消操作')
        })
    },
    showVNode() {
      const h = this.$createElement;
      this.$alert(h('p', null, [
            h('span', null, '类型：'),
            h('i', { style: 'color: teal' }, 'VNode')
          ]), '温馨提示')
    },
    showHTML() {
      this.$alert(`<strong>加粗和<i style="color: green">颜色</i></strong>`, 'HTML片段', {
        useHTMLString: true
      })
    }
  }
}
</script>

<!-- ### MessageBox 参数

|    参数    | 说明                                    | 类型    | 可选值 | 默认值 |
| :--------: | :-------------------------------------- | :------ | :----: | :----- |
|    text    | 加载文案                                | string  |   --   | --     |
| fullscreen | 同 v-loading 指令中的 fullscreen 修饰符 | bollean |   --   | true   |
| background | 遮罩背景色                              | string  |   --   | --     | -->
