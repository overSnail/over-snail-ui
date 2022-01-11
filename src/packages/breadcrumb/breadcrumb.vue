<template>
  <div class="my-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    /**
     * @description 分隔符
     */
    separator: {
      type: String,
      default: "/"
    },
    separatorClass: {
      type: String
    }
  },
  provide() {
    return {
      breadcrumb: this
    };
  }
};
</script>
