<template>
  <div
    v-show="visible"
    class="my-option"
    :class="{
      'my-option-selected': selected,
      'my-option-disabled': disabled,
      'my-option-choose': choose
    }"
    @click="onClick"
  >
    <slot>
      {{ label }}
      <i class="iconfont icon-checked my-option-icon" v-if="choose" />
    </slot>
  </div>
</template>

<script>
import Emitter from "../../mixins/emitter";
export default {
  data() {
    return {
      visible: true,
      selected: false,
      choose: false
    };
  },
  props: {
    value: {},
    label: {},
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mixins: [Emitter],
  mounted() {
    this.dispatch("MySelect", "on-option-add", this);
  },
  methods: {
    onClick() {
      if (this.disabled) return;
      this.dispatch("MySelect", "on-option-select", this);
    }
  },
  beforeDestroy() {
    this.dispatch("MySelect", "on-option-remove", this);
  }
};
</script>

<style lang="scss" scoped></style>
