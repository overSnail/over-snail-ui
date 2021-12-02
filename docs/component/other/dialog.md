---
title: Dialog 对话框
pageClass: os-page-class
---

# Dialog 对话框

<p class="os-vuepress-my-p">
  在保留当前页面状态的情况下，告知用户并承载相关操作。
</p>

### 基础用法

<p class="os-vuepress-my-p">
  Dialog 弹出一个对话框，适合需要定制性更大的场景。
</p>

<template>
  <os-button type="info" @click="visible = true">点击打开Dialog</os-button>
  <os-dialog :visible.sync="visible" :before-close="onClose" title="自定义标题" width="30%">
    <div>
      我是弹窗里面的内容
    </div>
    <div slot="footer" style="text-align: right">
      <os-button @click="visible = false">确定</os-button>
    </div>
  </os-dialog>
</template>

```vue
<template>
  <os-button type="info" @click="visible = true">点击打开Dialog</os-button>
  <os-dialog
    :visible.sync="visible"
    :before-close="onClose"
    title="自定义标题"
    width="30%"
  >
    <div>
      我是弹窗里面的内容
    </div>
    <div slot="footer" style="text-align: right">
      <os-button @click="visible = false">确定</os-button>
    </div>
  </os-dialog>
</template>

<script>
export default {
  data() {
    visible: false,
  },
  methods: {
    onClose(done) {
      this.$confirm("确认关闭？", "警告").then(res => {
        done();
      });
    }
  }
};
</script>
```

### 自定义内容

<p class="os-vuepress-my-p">
  Dialog 组件的内容可以是任意的。
</p>

<template>
  <os-button type="info" @click="visible2 = true">嵌套用户输入的Dialog</os-button>
  <os-dialog :visible.sync="visible2" title="收获地址" width="400px"
   >
    <div>
      <p>
        <span>具体地址：</span> <os-input></os-input>
      </p>
      <p style="margin-top: 20px">
        <span>所属城市：</span>
        <os-select>
          <os-option label="北京" value="1" />
          <os-option label="深圳" value="2" />
          <os-option label="厦门" value="3" />
        </os-select>
      </p>
    </div>
    <div slot="footer" style="text-align: right">
      <os-button @click="visible2 = false">确定</os-button>
    </div>
  </os-dialog>
</template>

```vue
<template>
  <os-button type="info" @click="visible2 = true"
    >嵌套用户输入的Dialog</os-button
  >
  <os-dialog :visible.sync="visible2" title="收获地址" width="400px">
    <div>
      <p><span>具体地址：</span> <os-input></os-input></p>
      <p style="margin-top: 20px">
        <span>所属城市：</span>
        <os-select>
          <os-option label="北京" value="1" />
          <os-option label="深圳" value="2" />
          <os-option label="厦门" value="3" />
        </os-select>
      </p>
    </div>
    <div slot="footer" style="text-align: right">
      <os-button @click="visible2 = false">确定</os-button>
    </div>
  </os-dialog>
</template>

<script>
export default {
  data() {
    visible2: false,
  }
};
</script>
```

<!-- 以下是运行代码 -->
<script>
export default {
  data() {
    return {
      visible: false,
      visible2: false
    }
  },
  methods: {
    onClose(done) {
      this.$confirm("确认关闭？", "警告").then(res => {
        done()
      })
    },
    eventInfo(info) {
      console.log(info)
    }
  }
}
</script>

### Dialog 属性

|         参数          | 说明                                  | 类型                                 | 可选值 | 默认值 |
| :-------------------: | :------------------------------------ | :----------------------------------- | :----: | :----- |
|        visible        | 是否显示 Dialog，支持 .sync 修饰符    | boolean                              |   --   | false  |
|         title         | Dialog 的标题，也可通过具名 slot 传入 | string                               |   --   | --     |
|         width         | Dialog 的宽度                         | string                               |   --   | 50%    |
|          top          | Dialog CSS 中的 margin-top 值         | string                               |   --   | 15vh   |
|    append-to-body     | Dialog 是否插入至 body 元素上         | boolean                              |   --   | true   |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Dialog    | boolean                              |   --   | true   |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog      | boolean                              |   --   | true   |
|      show-close       | 是否显示关闭按钮                      | boolean                              |   --   | true   |
|     before-close      | 关闭前的回调，会暂停 Dialog 的关闭    | function(done)，done 用于关闭 Dialog |   --   | --     |

### Dialog 插槽

|  参数  | 说明                    |
| :----: | :---------------------- |
|   --   | Dialog 的内容           |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

### Dialog 事件

| 事件名称 | 说明                        | 回调参数 |
| :------: | :-------------------------- | :------- |
|   open   | Dialog 打开的回调           | --       |
|  opened  | Dialog 打开动画结束时的回调 | --       |
|  close   | Dialog 关闭的回调           | --       |
|  closed  | Dialog 关闭动画结束时的回调 | --       |
