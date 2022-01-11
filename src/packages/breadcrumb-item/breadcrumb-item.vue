<template>
  <span class="my-breadcrumb-item">
    <!-- 显示内容 -->
    <span :class="{ 'my-breadcrumb-item-link': to }" @click="handleClick">
      <slot></slot>
    </span>

    <!-- 分隔符 -->
    <span class="my-breadcrumb-item-separator" v-if="breadcrumb.separatorClass">
      <i :class="['iconfont', breadcrumb.separatorClass]" />
    </span>
    <span class="my-breadcrumb-item-separator" v-else>
      {{ breadcrumb.separator }}
    </span>
  </span>
</template>

<script>
export default {
  name: "MyBreadcrumbItem",
  inject: ["breadcrumb"],
  data() {
    return {};
  },
  props: {
    // 跳转的地址
    to: {
      type: [String, Object]
    },
    // 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录
    replace: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      const { to, $router, replace } = this;
      if (to && $router) {
        replace ? $router.replace(to) : $router.push(to);
      }
    }
  }
};
</script>
