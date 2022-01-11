---
title: Progress 进度条
pageClass: os-page-class
---

# Progress 进度条

<p class="os-vuepress-my-p">
  用于展示操作进度，告知用户当前状态和预期。
</p>

### 线形进度条

<template>
  <os-progress :percentage="75" />
  <os-progress :percentage="100" :format="format" />
  <os-progress :percentage="100" status="success" />
  <os-progress :percentage="100" status="warning" />
  <os-progress :percentage="50" status="error" />
</template>

<p class="os-vuepress-my-p">
  Progress 组件设置percentage属性即可，表示进度条对应的百分比，必填，必须在 0-100。通过 format 属性来指定进度条文字内容。
</p>

```vue
<template>
  <os-progress :percentage="75" />
  <os-progress :percentage="100" :format="format" />
  <os-progress :percentage="100" status="success" />
  <os-progress :percentage="100" status="warning" />
  <os-progress :percentage="50" status="error" />
</template>

<script>
export default {
  data() {},
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    }
  }
};
</script>
```

### 百分比内显

<p class="os-vuepress-my-p">
  百分比不占用额外控件，适用于文件上传等场景。
</p>

<template>
  <os-progress :text-inside="true" :stroke-width="26" :percentage="70" />
  <os-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
  <os-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" />
  <os-progress :text-inside="true" :stroke-width="20" :percentage="50" status="error" />
</template>

<p class="os-vuepress-my-p">
  Progress 组件可通过 stroke-width 属性更改进度条的高度，并可通过 text-inside 属性来将进度条描述置于进度条内部。
</p>

```vue
<template>
  <os-progress :text-inside="true" :stroke-width="26" :percentage="70" />
  <os-progress
    :text-inside="true"
    :stroke-width="24"
    :percentage="100"
    status="success"
  />
  <os-progress
    :text-inside="true"
    :stroke-width="22"
    :percentage="80"
    status="warning"
  />
  <os-progress
    :text-inside="true"
    :stroke-width="20"
    :percentage="50"
    status="error"
  />
</template>
```

### 自定义颜色

<p class="os-vuepress-my-p">
  可以通过 color 设置进度条的颜色，color 可以接受颜色字符串，函数和数组。
</p>

<template>
  <os-progress :percentage="percentage" :color="customColor" />
  <os-progress :percentage="percentage" :color="customColorMethod" />
  <os-progress :percentage="percentage" :color="customColors" />
  <os-button type="info" @click="clickMe">点我</os-button>
</template>

```vue
<template>
  <os-progress :percentage="percentage" :color="customColor" />
  <os-progress :percentage="percentage" :color="customColorMethod" />
  <os-progress :percentage="percentage" :color="customColors" />

  <os-button type="info" @click="clickMe">点我</os-button>
</template>
<script>
export default {
  data() {
    return {
      percentage: 60,
      customColor: "#9266f9",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 }
      ]
    };
  },
  methods: {
    customColorMethod(percentage) {
      return "gold";
    },
    clickMe() {
      this.percentage = Number((Math.random() * 100).toFixed(0));
    }
  }
};
</script>
```

### 环形进度条

<p class="os-vuepress-my-p">
  Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。
</p>

<template>
  <os-progress type="circle" :percentage="0" />
  <os-progress type="circle" :percentage="circlePercent" :format="format" />
  <os-progress type="circle" :percentage="circlePercent" status="success" />
  <os-progress type="circle" :percentage="circlePercent" status="warning" />
  <os-progress type="circle" :percentage="circlePercent" status="error" />
  <os-button type="info" @click="clickMeToo">点我</os-button>
</template>

```vue
<template>
  <os-progress type="circle" :percentage="0" />
  <os-progress type="circle" :percentage="circlePercent" :format="format" />
  <os-progress type="circle" :percentage="circlePercent" status="success" />
  <os-progress type="circle" :percentage="circlePercent" status="warning" />
  <os-progress type="circle" :percentage="circlePercent" status="error" />
  <os-button type="info" @click="clickMeToo">点我</os-button>
</template>

<script>
export default {
  data() {
    circlePercent: 30;
  },
  methods: {
    format(percentage) {
      return percentage >= 80 ? "优秀" : `${percentage}分`;
    },
    clickMeToo() {
      this.circlePercent = Number((Math.random() * 100).toFixed(0));
    }
  }
};
</script>
```

### 仪表盘进度条

<p class="os-vuepress-my-p">
  通过 type 属性来指定使用仪表盘形进度条。
</p>

<template>
  <os-progress type="dashboard" :percentage="percentage" :color="customColors"  />
  <os-button type="info" @click="clickMe">点我</os-button>
</template>

```vue
<template>
  <os-progress
    type="dashboard"
    :percentage="percentage"
    :color="customColors"
  />
  <os-button type="info" @click="clickMe">点我</os-button>
</template>

<script>
export default {
  data() {
    percentage: 30;
  },
  methods: {
    clickMe() {
      this.percentage = Number((Math.random() * 100).toFixed(0));
    }
  }
};
</script>
```

<!-- 以下是运行代码 -->
<script>
export default {
  data() {
    return {
      percentage: 60,
      circlePercent: 30,
      customColor: "#9266f9",
      customColors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ]
    }
  },
  methods: {
    handleClose() {
      this.$message({
        message: "关闭"
      })
    },
    customColorMethod(percentage) {
      return "gold"
    },
    format(percentage) {
      return percentage >= 80 ? "优秀" : `${percentage}分`;
    },
    clickMe() {
      this.percentage = Number((Math.random() * 100).toFixed(0))
    },
    clickMeToo() {
      this.circlePercent = Number((Math.random() * 100).toFixed(0))
    }
  }
}
</script>

### Progress 属性

|      参数      | 说明                                   | 类型                  |            可选值             | 默认值  |
| :------------: | :------------------------------------- | :-------------------- | :---------------------------: | :------ |
|   percentage   | 百分比（必填）                         | number                |             0-100             | 0       |
|      type      | 进度条类型                             | string                |     line/circle/dashboard     | line    |
|  stroke-width  | 进度条的宽度，单位 px                  | number                |              --               | 6       |
|  text-inside   | 进度条显示文字内置在进度条内           | boolean               |              --               | false   |
|     status     | 进度条当前状态                         | string                | primary/success/warning/error | primary |
|     color      | 进度条背景色（会覆盖 status 状态颜色） | string/function/array |              --               | --      |
|     width      | 环形进度条画布宽度                     | number                |              --               | 130     |
|   show-text    | 是否显示进度条文字内容                 | boolean               |              --               | true    |
| stroke-linecap | circle/dashboard 类型路径两端的形状    | string                |       butt/round/square       | round   |
|     format     | 指定进度条文字内容                     | function(percentage)  |              --               | --      |
