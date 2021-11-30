<template>
  <div class="my-option-group">
    <p class="my-option-group-title">{{ label }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyOptionGroup",
  props: {
    label: {
      type: String,
      default: false
    }
  }
};
</script>
