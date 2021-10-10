---
title: Input 输入框
---

# 输入框

<script>

const options = [
  {value: "西瓜子"},
  {value: "葵花子"},
  {value: "百事可乐"},
  {value: "可口可乐"},
  {value: "樱花味可乐"},
  {value: "无糖可乐"},
  {value: "南瓜子"},
  {value: "蒜香花生"},
  {value: "水煮花生"},
  {value: "五香花生"},
]


export default {
  data() {
    return {
      inputValue: '',
      options: [
        {value: "西瓜子", price: 6},
        {value: "葵花子", price: 4},
        {value: "百事可乐", price: 3},
        {value: "可口可乐", price: 3},
        {value: "樱花味可乐", price: 3.5},
        {value: "无糖可乐", price: 4},
        {value: "南瓜子", price: 4},
        {value: "蒜香花生", price: 8},
        {value: "水煮花生", price: 7.5},
        {value: "五香花生", price: 10}
      ]
    }
  },
  methods: {
    querySearch(queryString, cb) {
      if (queryString) {
        const newOptions = this.options.filter(d => d.value.indexOf(queryString) > -1);
        cb(newOptions);
      } else {
        cb(this.options)
      }
    },
    queryByString(queryString, cb) {
      if (queryString) {
        const newOptions = this.options.filter(
          (d) => d.value.indexOf(queryString) > -1
        )
        setTimeout(() => {
          cb(newOptions)
        }, 1333)
      } else {
        cb(this.options)
      }
    },
  }
}
</script>

### 基础使用

<br />
<template>
  <my-input v-model="inputValue"></my-input>
  <div>输入的值是: {{inputValue}}</div>
</template>

```vue
<script>
export default {
  data() {
    return {
      inputValue: '',
    }
  },
}
</script>
<template>
  <l-input v-model="inputValue"></l-input>
  <div>输入的值是: {{ inputValue }}</div>
</template>
```

### 禁用状态

<br />
<template>
  <my-input v-model="inputValue" disabled></my-input>
</template>

```html
<template>
  <my-input v-model="inputValue" disabled></my-input>
</template>
```

### 可清空

<br />
<template>
  <my-input v-model="inputValue" clearable></my-input>
</template>

```html
<template>
  <my-input v-model="inputValue" clearable></my-input>
</template>
```

### 带 icon 的输入框

<br />
<template>
  <my-input v-model="inputValue" prefix-icon="icon-search"></my-input>
  <my-input v-model="inputValue" suffix-icon="icon-edit"></my-input>
  <my-input v-model="inputValue" suffix-icon="icon-edit" clearable></my-input>
</template>

```html
<template>
  <my-input v-model="inputValue" prefix-icon="icon-search"></my-input>
  <my-input v-model="inputValue" suffix-icon="icon-edit"></my-input>
  <my-input v-model="inputValue" suffix-icon="icon-edit" clearable></my-input>
</template>
```

### 尺寸

<br />
<template>
  <div style="margin-bottom: 20px">
    <my-input v-model="inputValue" suffix-icon="icon-edit" size="large" />
    <my-input v-model="inputValue" suffix-icon="icon-edit" />
  </div>
  <my-input v-model="inputValue" suffix-icon="icon-edit" size="small" />
  <my-input v-model="inputValue" suffix-icon="icon-edit" size="mini" />
</template>

```html
<template>
  <my-input v-model="inputValue" suffix-icon="icon-edit" size="large" />
  <my-input v-model="inputValue" suffix-icon="icon-edit" />
  <my-input v-model="inputValue" suffix-icon="icon-edit" size="small" />
  <my-input v-model="inputValue" suffix-icon="icon-edit" size="mini" />
</template>
```

### 输入建议

<br />
<template>
  <my-input v-model="inputValue" suffix-icon="icon-edit" clearable suggestion :fetch-suggestions="querySearch"/>
</template>

<br />
<br />
<br />

```vue
<template>
  <my-input
    v-model="inputValue"
    suffix-icon="icon-edit"
    suggestion
    :fetch-suggestions="querySearch"
  />
</template>
<script>
export default {
  data() {
    return {
      inputValue: '',
      options: [
        { value: '西瓜子' },
        { value: '葵花子' },
        { value: '百事可乐' },
        { value: '可口可乐' },
        { value: '樱花味可乐' },
        { value: '无糖可乐' },
        { value: '南瓜子' },
        { value: '蒜香花生' },
        { value: '水煮花生' },
        { value: '五香花生' },
      ],
    }
  },
  methods: {
    querySearch(queryString, cb) {
      if (queryString) {
        const newOptions = this.options.filter(
          (d) => d.value.indexOf(queryString) > -1
        )
        cb(newOptions)
      } else {
        cb(this.options)
      }
    },
  },
}
</script>
```

### 自定义建议模板

<br />
<template>
  <my-input
    v-model="inputValue"
    clearable
    suggestion
    :fetch-suggestions="querySearch"
  >
    <template slot-scope="{item}">
      <span>{{item.value}}</span>
      <span style="float: right;color: gold">{{item.price}}元</span>
    </template>
  </my-input>
</template>

```html
<template>
  <my-input
    v-model="inputValue"
    clearable
    suggestion
    :fetch-suggestions="querySearch"
  >
    <template slot-scope="{item}">
      <span>{{item.value}}</span>
      <span style="float: right;color: gold">{{item.price}}元</span>
    </template>
  </my-input>
</template>
```

### 远程搜索

<br />
<template>
  <my-input
    v-model="inputValue"
    clearable
    suggestion
    :fetch-suggestions="queryByString"
  >
    <template slot-scope="{item}">
      <span>{{item.value}}</span>
      <span style="float: right;color: gold">{{item.price}}元</span>
    </template>
  </my-input>
</template>

```html
<template>
  <my-input
    v-model="inputValue"
    clearable
    suggestion
    :fetch-suggestions="queryByString"
  >
    <template slot-scope="{item}">
      <span>{{item.value}}</span>
      <span style="float: right;color: gold">{{item.price}}元</span>
    </template>
  </my-input>
</template>
```

### Input 属性
参数 | 说明 | 类型 | 可选值 | 默认值
|:-----------:|:-------------|:-------------|:-------------:|:-------------|
| value/v-model | 绑定值 | string/number | -- | -- |
| placeholder | 占位符 | string | -- | 请输入 |
| clearable | 是否可清空 | boolean | -- | false |
| disabled | 是否禁用 | boolean | -- | false |
| prefix-icon | 输入框头部图标 | string | -- | -- |
| suffix-icon | 输入框尾部图标 | string | -- | -- |
| readonly | 原生属性:是否可读 | boolean | -- | false |
| max | 原生属性:最大值 | -- | -- | -- |
| min | 原生属性:最小值 | -- | -- | -- |
| size | 尺寸 | string | large/medium/small/mini | medium |
| suggestion | 是否启用输入建议 | boolean | -- | false |
| fetch-suggestions | 输入建议异步回调 | function | -- | -- |

### Input 事件
事件名称 | 说明 | 回调参数 | 
|:-----------:|:-------------|:-------------|
| change | 绑定值发生变化触发的事件 | 更新后的值 |