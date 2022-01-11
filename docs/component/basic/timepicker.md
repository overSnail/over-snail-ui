---
title: TimePicker 时间选择器
pageClass: os-page-class
---

# TimePicker 时间选择器

### 任意时间点

<p class="os-vuepress-my-p">
  可以选择任意时间, 通过selectableRange限制可选时间范围。
</p>

<template>
  <os-time-picker
    v-model="time1"
    :picker-options="{
      selectableRange: '08:30:21-21:35:08'
    }"
  />
  <span>{{ time1 }}</span>
</template>

```vue
<template>
  <os-time-picker
    v-model="time1"
    :picker-options="{
      selectableRange: '08:30:21-21:35:08'
    }"
  />
  <span>{{ time1 }}</span>
</template>

<script>
export default {
  data() {
    return {
      time1: ""
    };
  }
};
</script>
```

### 任意时间点范围

<p class="os-vuepress-my-p">
  可选择任意的时间范围
</p>

<template>
  <os-time-picker-range
    v-model="time2"
    :picker-options="{
      selectableRange: ['08:10:00-12:40:00', '16:10:00-21:05:00']
    }"
  />
  <span>{{ time2 }}</span>
</template>

```vue
<template>
  <os-time-picker-range
    v-model="time2"
    :picker-options="{
      selectableRange: ['08:10:00-12:40:00', '16:10:00-21:05:00']
    }"
  />
  <span>{{ time2 }}</span>
</template>

<script>
export default {
  data() {
    return {
      time2: []
    };
  }
};
</script>
```

<!-- 以下是运行代码 -->
<script>
  export default {
    data() {
      return {
        time1: "",
        time2: [],
      }
    }
  }
</script>
