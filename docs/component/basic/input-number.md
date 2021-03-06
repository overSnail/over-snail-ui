---
title: Input-Number 计数器
---

# 计数器

### 基础使用

<br />
<template>
  <os-input-number v-model="inputValue"></os-input-number>
  <div>输入的值是: {{inputValue}}</div>
</template>

```vue
<template>
  <os-input-number v-model="inputValue"></os-input-number>
  <div>输入的值是: {{inputValue}}</div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: 0
    }
  },
}
</script>
```

### 禁用状态
<br />

<template>
  <os-input-number v-model="inputValue" disabled></os-input-number>
  <div>输入的值是: {{inputValue}}</div>
</template>

```vue
<template>
  <os-input-number v-model="inputValue" disabled></os-input-number>
  <div>输入的值是: {{inputValue}}</div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: 0
    }
  },
}
</script>
```

### 步数
<br />

<template>
  <os-input-number v-model="inputValue" :step="3"></os-input-number>
  <div>输入的值是: {{inputValue}}</div>
</template>

```vue
<template>
  <os-input-number v-model="inputValue" :step="3"></os-input-number>
  <div>输入的值是: {{inputValue}}</div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: 0
    }
  },
}
</script>
```

### 严格步数
<br />

<template>
  <os-input-number v-model="strictValue" :step="3" :step-strictly="true"></os-input-number>
  <div>输入的值是: {{strictValue}}</div>
</template>

```vue
<template>
  <os-input-number v-model="strictValue" :step="3" :step-strictly="true"></os-input-number>
  <div>输入的值是: {{strictValue}}</div>
</template>
<script>
export default {
  data() {
    return {
      strictValue: 0
    }
  },
}
</script>
```

### 精度
<br />

<template>
  <os-input-number v-model="precisionValue" :step="0.12" :precision="2"></os-input-number>
  <div>输入的值是: {{precisionValue}}</div>
</template>

```vue
<template>
  <os-input-number v-model="precisionValue" :step="0.12" :precision="2"></os-input-number>
  <div>输入的值是: {{precisionValue}}</div>
</template>
<script>
export default {
  data() {
    return {
      precisionValue: 0
    }
  },
}
</script>
```

### 数值范围
<br />

<template>
  <os-input-number v-model="limitValue" :max="1" :min="-1"></os-input-number>
  <div>输入的值是: {{limitValue}}</div>
</template>

```vue
<template>
  <os-input-number v-model="limitValue" :max="1" :min="-1"></os-input-number>
  <div>输入的值是: {{limitValue}}</div>
</template>
<script>
export default {
  data() {
    return {
      limitValue: 0
    }
  },
}
</script>
```

### 尺寸
<br />

<template>
  <os-input-number size="large"></os-input-number>
  <br />
  <os-input-number size="medium"></os-input-number>
  <br />
  <os-input-number size="small"></os-input-number>
  <br />
  <os-input-number size="mini"></os-input-number>
</template>

```vue
<template>
  <os-input-number size="large"></os-input-number>
  <os-input-number size="medium"></os-input-number>
  <os-input-number size="small"></os-input-number>
  <os-input-number size="mini"></os-input-number>
</template>
```

<script>
export default {
  data() {
    return {
      inputValue: 0,
      strictValue: 0,
      precisionValue: 0,
      limitValue: 0
    }
  }
}
</script>

### Input-Number 属性
参数 | 说明 | 类型 | 可选值 | 默认值
|:-----------:|:-------------|:-------------|:-------------:|:-------------|
| value/v-model | 绑定值 | string/number | -- | -- |
| disabled | 是否禁用 | boolean | -- | false |
| max | 最大值 | number | -- | -- |
| min | 最小值 | number | -- | -- |
| size | 尺寸 | string | large/medium/small/mini | medium |
| step | 步长 | number | -- | 1 |
| step-strictly | 是否只能输入 step 的倍数 | boolean | -- | false | 
| precision | 数值精度 | number | -- | -- |

### Input-Number 事件
事件名称 | 说明 | 回调参数 | 
|:-----------:|:-------------|:-------------|
| change | 绑定值发生变化触发的事件 | 更新后的值 |