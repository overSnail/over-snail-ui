---
title: Loading 加载
pageClass: os-page-class
---

# Loading 加载

加载数据时显示动效。

### 区域加载

<p class="os-vuepress-my-p">在表格等容器中加载数据时显示。</p>

<template>
  <div style="height: 200px;border:1px solid #ddd;text-align: center;padding-top: 50px;margin-bottom: 10px"
  v-loading="loading"
  >
    我其实是个表格
  </div>
  <os-button @click="handleComplete" :loading="loading">点击加载</os-button>
</template>

<p class="os-vuepress-my-p">提供两种调用 Loading 的方法：指令和服务。对于自定义指令 v-loading，只需要绑定 Boolean 即可。 </p>

```vue
<template>
  <div>
    <div v-loading="loading">我其实是个表格</div>
    <os-button @click="handleComplete" :loading="loading">点击加载</os-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    handleComplete() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
  },
}
</script>
```

### 自定义

<p class="os-vuepress-my-p">可自定义加载文案和背景色。</p>

<template>
  <div style="height: 200px;border:1px solid #ddd;text-align: center;padding-top: 50px;margin-bottom: 10px"
  v-loading="loading2"
  os-loading-text="偷懒中......"
  os-loading-background="rgba(0, 0, 0, 0.4)"
  >
    我也是个表格
  </div>
  <os-button @click="handleLoading2" :loading="loading2">点击加载</os-button>
</template>

<p class="os-vuepress-my-p">在绑定了 v-loading 指令的元素上添加 os-loading-text 属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，os-loading-background 属性用来设定背景色值。</p>

```vue
<template>
  <div>
    <div
      v-loading="loading2"
      os-loading-text="偷懒中......"
      os-loading-background="rgba(0, 0, 0, 0.4)"
    >
      我也是个表格
    </div>
    <os-button @click="handleLoading2" :loading="loading2">点击加载</os-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading2: false,
    }
  },
  methods: {
    handleLoading2() {
      this.loading2 = true
      setTimeout(() => {
        this.loading2 = false
      }, 2000)
    },
  },
}
</script>
```

### 整页加载

<p class="os-vuepress-my-p">页面数据加载时显示。</p>

<template>
  <os-button @click="handleLoading3" type="warning" v-loading.fullscreen="loading3">指令方式</os-button>
  <os-button @click="handleLoading" type="success">服务方式</os-button>
</template>

<p class="os-vuepress-my-p">当使用指令方式时，全屏遮罩需要添加fullscreen修饰符（遮罩会插入至 body 上）。当使用服务方式时，遮罩默认即为全屏，无需额外设置。</p>

```vue
<template>
  <div>
    <os-button
      @click="handleLoading3"
      type="warning"
      v-loading.fullscreen="loading3"
      >指令方式</os-button
    >
    <os-button @click="handleLoading" type="success">服务方式</os-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading2: false,
    }
  },
  methods: {
    handleLoading() {
      const loading = this.$loading({
        text: '全屏加载...',
      })

      setTimeout(() => {
        loading.close()
      }, 2000)
    },
    handleLoading3() {
      this.loading3 = true
      setTimeout(() => {
        this.loading3 = false
      }, 2000)
    },
  },
}
</script>
```

<script>
export default {
  data() {
    return {
      loading: false,
      loading2: false,
      loading3: false
    }
  },
  methods: {
    handleLoading() {
      const loading = this.$loading({
        text: "全屏加载..."
      })

      setTimeout(() => {
        loading.close()
      }, 2000)
    },
    handleLoading2() {
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
      }, 2000)
    },
    handleLoading3() {
      this.loading3 = true;
      setTimeout(() => {
        this.loading3 = false;
      }, 2000)
    },

    handleComplete() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000)
    },
  }
}
</script>

### Loading 参数

|    参数    | 说明                                    | 类型    | 可选值 | 默认值 |
| :--------: | :-------------------------------------- | :------ | :----: | :----- |
|    text    | 加载文案                                | string  |   --   | --     |
| fullscreen | 同 v-loading 指令中的 fullscreen 修饰符 | bollean |   --   | true   |
| background | 遮罩背景色                              | string  |   --   | --     |
