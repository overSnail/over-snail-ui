---
title: Collapse 折叠面板
pageClass: os-page-class
---

# Collapse 折叠面板

<p class="os-vuepress-my-p">
  通过折叠面板收纳内容区域。
</p>

### 基础用法

<p class="os-vuepress-my-p">
  可同时展开多个面板，面板之间不影响。
</p>

<template>
  <os-collapse v-model="activeNames">
    <os-collapse-item title="一号位" name="1">
      <p>美杜莎</p>
      <p>俗称一姐，手拿双圣剑守卫世界树两个小时，绝地翻盘。</p>
    </os-collapse-item>
    <os-collapse-item title="二号位" name="2">
      <p>死亡先知</p>
      <p>法系肉盾和推塔小能手</p>
    </os-collapse-item>
    <os-collapse-item title="三号位" name="3">
      <p>猛犸</p>
      <p>绝世无双的颠勺神技</p>
    </os-collapse-item>
  </os-collapse>
</template>

```vue
<template>
  <os-collapse v-model="activeNames">
    <os-collapse-item title="一号位" name="1">
      <p>美杜莎</p>
      <p>俗称一姐，手拿双圣剑守卫世界树两个小时，绝地翻盘。</p>
    </os-collapse-item>
    <os-collapse-item title="二号位" name="2">
      <p>死亡先知</p>
      <p>法系肉盾和推塔小能手</p>
    </os-collapse-item>
    <os-collapse-item title="三号位" name="3">
      <p>猛犸</p>
      <p>绝世无双的颠勺神技</p>
    </os-collapse-item>
  </os-collapse>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {}
};
</script>
```

### 手风琴效果

<p class="os-vuepress-my-p">
  每次只能展开一个面板。
</p>

<template>
  <os-collapse v-model="activeName" accordion>
    <os-collapse-item title="一号位" name="1">
      <p>美杜莎</p>
      <p>俗称一姐，手拿双圣剑守卫世界树两个小时，绝地翻盘。</p>
    </os-collapse-item>
    <os-collapse-item title="二号位" name="2">
      <p>死亡先知</p>
      <p>法系肉盾和推塔小能手</p>
    </os-collapse-item>
    <os-collapse-item title="三号位" name="3">
      <p>猛犸</p>
      <p>绝世无双的颠勺神技</p>
    </os-collapse-item>
  </os-collapse>
</template>

```vue
<template>
  <os-collapse v-model="activeName" accordion>
    <os-collapse-item title="一号位" name="1">
      <p>美杜莎</p>
      <p>俗称一姐，手拿双圣剑守卫世界树两个小时，绝地翻盘。</p>
    </os-collapse-item>
    <os-collapse-item title="二号位" name="2">
      <p>死亡先知</p>
      <p>法系肉盾和推塔小能手</p>
    </os-collapse-item>
    <os-collapse-item title="三号位" name="3">
      <p>猛犸</p>
      <p>绝世无双的颠勺神技</p>
    </os-collapse-item>
  </os-collapse>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1"
    };
  },
  methods: {}
};
</script>
```

### 自定义面板标题

<p class="os-vuepress-my-p">
  除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。
</p>

<template>
  <os-collapse v-model="activeName" accordion>
    <os-collapse-item name="1">
      <span slot="title" style="color:red">一号位</span>
      <p>美杜莎</p>
      <p>俗称一姐，手拿双圣剑守卫世界树两个小时，绝地翻盘。</p>
    </os-collapse-item>
    <os-collapse-item name="2">
      <span slot="title" style="color:green">二号位</span>
      <p>死亡先知</p>
      <p>法系肉盾和推塔小能手</p>
    </os-collapse-item>
    <os-collapse-item name="3">
      <span slot="title" style="color:blue">三号位</span>
      <p>猛犸</p>
      <p>绝世无双的颠勺神技</p>
    </os-collapse-item>
  </os-collapse>
</template>

```vue
<template>
  <os-collapse v-model="activeName" accordion>
    <os-collapse-item name="1">
      <span slot="title" style="color:red">一号位</span>
      <p>美杜莎</p>
      <p>俗称一姐，手拿双圣剑守卫世界树两个小时，绝地翻盘。</p>
    </os-collapse-item>
    <os-collapse-item name="2">
      <span slot="title" style="color:green">二号位</span>
      <p>死亡先知</p>
      <p>法系肉盾和推塔小能手</p>
    </os-collapse-item>
    <os-collapse-item name="3">
      <span slot="title" style="color:blue">三号位</span>
      <p>猛犸</p>
      <p>绝世无双的颠勺神技</p>
    </os-collapse-item>
  </os-collapse>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1"
    };
  },
  methods: {}
};
</script>
```

<!-- 以下是运行代码 -->
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      activeName: "1"
    }
  },
  methods: {
  }
}
</script>

### Collapse 属性

|      参数       | 说明                                                                    | 类型           | 可选值 | 默认值 |
| :-------------: | :---------------------------------------------------------------------- | :------------- | :----: | :----- |
| value / v-model | 当前激活的面板(如果是手风琴模式，绑定值类型需要为 string，否则为 array) | string / array |   --   | --     |
|    accordion    | 是否手风琴模式                                                          | boolean        |   --   | false  |

### Collapse 事件

| 事件名称 | 说明                                                                                   |           回调参数            |
| :------: | :------------------------------------------------------------------------------------- | :---------------------------: |
|  change  | 当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为 string，否则为 array) | (activeNames: array / string) |

### CollapseItem 属性

|   参数   | 说明       | 类型          | 可选值 | 默认值 |
| :------: | :--------- | :------------ | :----: | :----- |
|   name   | 唯一标志符 | string/number |   --   | --     |
|  title   | 面板标题   | string        |   --   | --     |
| disabled | 是否禁用   | boolean       |   --   | false  |
