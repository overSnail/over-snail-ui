<template>
  <div class="my-select" ref="mySelect">
    <div class="my-select-inner" ref="myInput">
      <!-- 多选专用区域 -->
      <div
        class="my-select-multi"
        :class="{
          'my-select-multi-disabled': disabled,
          [`my-select-multi-${size}`]: true
        }"
        v-if="multiple"
        ref="multiPanel"
        @click.self="handleMultiClick"
      >
        <!-- <div class="my-select-multi-tags"></div> -->
        <tag
          size="mini"
          type="text"
          closeable
          disableTransitions
          v-for="item in currentTags"
          :key="item.value"
          @close="handleTagClose(item)"
          >{{ item.label }}</tag
        >
        <input
          type="text"
          class="my-select-multi-input"
          ref="multiInput"
          :placeholder="disabled ? '' : '请输入'"
          v-if="filterable"
          :disabled="disabled"
          @click.self="handleMultiClick"
          @input="handleInput"
          @focus="handleInputFocus"
          @blur="handleInputBlur"
        />
      </div>
      <input
        class="my-select-inner-input"
        :class="{
          ['my-select-inner-input-select']: visible,
          [`my-select-inner-input-disabled`]: disabled,
          [`my-select-inner-input-size-${size}`]: true
        }"
        :style="{ 'min-height': `${panelHeight}px` }"
        ref="myInput"
        type="text"
        :placeholder="currentTags.length > 0 ? '' : placeholderLabel"
        :disabled="disabled"
        :value="multiple ? '' : currentLabel"
        :readonly="!filterable"
        @click="handleClick"
        @input="handleInput"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      />
      <i
        class="my-select-inner-icon iconfont icon-bottom"
        :class="{
          'my-select-inner-icon-focus': visible,
          [`my-select-inner-icon-size-${size}`]: true
        }"
        v-show="!(clearable && this.currentValue && onHover)"
      />
      <span
        class="my-select-inner-icon"
        v-show="clearable && this.currentValue && onHover"
        @click="handleClear"
      >
        <i class="iconfont icon-close" />
      </span>
    </div>
    <transition name="fade-bottom">
      <div
        class="my-select-options"
        :style="{ top: panelHeight ? `${panelHeight + 6}px` : undefined }"
        v-show="visible"
        v-loading="filterable && loading"
      >
        <slot> </slot>
        <div
          class="my-select-options-no-data"
          v-show="!$slots.default || !hasOptions"
        >
          无数据
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { oneOf, debounce } from "../../utils/assist";
import Emitter from "../../mixins/emitter";

import { LoadingDirective } from "../loading";
import Tag from "../tag";

export default {
  name: "MySelect",
  components: {
    Tag
  },
  mixins: [Emitter],
  directives: {
    loading: LoadingDirective
  },
  data() {
    return {
      options: [],
      visible: false,
      currentLabel: "",
      currentValue: "",
      currentTags: [],
      // 整个面板的高度
      panelHeight: "",
      hasOptions: true,
      currentPlaceholder: "",
      // 鼠标是否在父级元素上，该属性会影响清空按钮的显示
      onHover: false
    };
  },
  props: {
    // 当前的选中值
    value: {
      type: [Array, String, Number]
    },
    // 占位符
    placeholder: {
      type: String,
      default: "请选择"
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否可清空
    clearable: {
      type: Boolean,
      default: false
    },
    // 尺寸
    size: {
      validator(value) {
        return oneOf(value, ["mini", "small", "medium", "large"]);
      },
      default: "medium"
    },
    // 是否可搜索
    filterable: {
      type: Boolean,
      default: false
    },
    // 搜索的自定义回调
    filterMethod: {
      required: false,
      type: Function
    },
    // 远程搜索-是否加载中
    loading: {
      type: Boolean,
      default: false
    },
    // 是否为远程搜索
    remote: {
      type: Boolean,
      default: false
    },
    // 远程搜索回调
    remoteMethod: {
      required: false,
      type: Function
    },
    // 是否为多选
    multiple: {
      type: Boolean,
      default: false
    },
    multipleLimit: {
      type: Number,
      default: 0
    }
  },
  computed: {
    /**
     * @description 占位符显示文案
     */
    placeholderLabel() {
      let x = this.currentPlaceholder
        ? this.currentPlaceholder
        : this.placeholder;
      return x;
    }
  },
  watch: {
    "currentTags.length"(newVal) {
      this.$nextTick(() => {
        setTimeout(() => {
          const height = this.$refs.multiPanel.clientHeight;
          this.panelHeight = height;
        }, 10);
      });

      let values = this.currentTags.reduce((total, cell) => {
        if (cell.choose) {
          total.push(cell.value);
        }
        return total;
      }, []);

      this.$emit("input", values);
      this.$emit("change", values);
    },
    value: {
      handler(newVal) {
        this.syncValue(newVal);
      },
      immediate: true
    },
    visible(newVal) {
      this.$emit("visible-change", newVal);
    },
    multiple: {
      handler(value) {
        this.setMultiOptionStyle(value);
      },
      immediate: true
    }
  },
  created() {
    this.$on("on-option-add", child => {
      child && this.options.push(child);
      this.syncValue(this.value);
      this.setMultiOptionStyle(this.multiple);
    });

    this.$on("on-option-select", child => {
      if (this.multiple) {
        this.handleMultiChoose(child);
      } else {
        this.handleChoose(child);
      }
    });

    this.$on("on-option-remove", child => {
      this.options.splice(this.options.indexOf(child), 1);
    });
  },
  // 挂载时，绑定根元素点击事件
  mounted() {
    document.addEventListener("click", this.addCloseEvent);

    this.$refs.myInput.addEventListener("mouseenter", this.setHoverAttr);
    this.$refs.myInput.addEventListener("mouseleave", this.setHoverAttr);
  },
  // 移除时，删除根元素点击事件
  beforeDestroy() {
    document.removeEventListener("click", this.addCloseEvent);

    this.$refs.myInput.removeEventListener("mouseenter", this.setHoverAttr);
    this.$refs.myInput.removeEventListener("mouseleave", this.setHoverAttr);
  },
  methods: {
    /**
     * @description 多选面板操作
     */
    handleMultiClick() {
      if (this.disabled) return;
      this.visible = !this.visible;
      if (this.filterable && this.visible) {
        this.$nextTick(() => {
          this.$refs.multiInput.focus();
        });
      }
    },
    handleClick() {
      this.visible = !this.visible;
    },
    // 单项选择
    handleChoose(opt) {
      this.options.forEach(d => (d.selected = false));
      opt.selected = true;

      this.currentValue = opt.value;
      this.currentLabel = opt.label;
      this.visible = false;
      this.$emit("input", this.currentValue);
    },
    // 多选
    handleMultiChoose(opt) {
      if (
        this.multipleLimit > 0 &&
        this.currentTags.length >= this.multipleLimit &&
        !opt.choose
      )
        return;

      opt.choose = !opt.choose;

      // 多选且可搜索条件下，默认选中输入框
      if (this.filterable) {
        this.$refs.multiInput.focus();
      }

      if (opt.choose) {
        this.currentTags.push(opt);
      } else {
        this.currentTags.splice(this.currentTags.indexOf(opt), 1);
      }
    },
    // 判断是否关闭
    addCloseEvent(event) {
      // 点击目标若不是组件内元素时，关闭选项弹窗
      let target = event.path.find(d => d === this.$refs.mySelect);
      if (!target && this.visible) {
        this.visible = false;
      }
    },
    setHoverAttr(event) {
      this.onHover = event.type === "mouseenter";
    },
    handleClear() {
      this.currentLabel = "";
      this.currentValue = "";
      this.options.forEach(d => (d.selected = false));
      this.$emit("clear");
    },
    /**
     * @description 过滤-输入事件
     */
    handleInput(_e) {
      this.currentLabel = _e.target.value;
      debounce(
        () => {
          // 远程搜索
          if (this.remote && typeof this.remoteMethod === "function") {
            this.remoteMethod(_e.target.value);
          }
          // 自定义搜索
          else if (
            this.filterMethod &&
            typeof this.filterMethod === "function"
          ) {
            this.filterMethod(_e.target.value);
          }
          // 默认搜索
          else {
            this.filterOptionsByValue(_e.target.value);
          }
        },
        333,
        "my-select-input"
      );
    },
    /**
     * @description 根据输入值过滤出参数
     * @param { string } value 输入值
     */
    filterOptionsByValue(value) {
      this.options.forEach(cell => {
        cell.visible = cell.label.indexOf(value) > -1;
      });

      this.setNoDataVisible();
    },
    /**
     * @description 输入框触发focus事件
     */
    handleInputFocus(_e) {
      if (this.filterable) {
        this.currentPlaceholder = this.currentLabel;
        this.currentLabel = "";
      }
      this.$emit("focus", _e);
    },
    /**
     * @description 输入空触发blur事件
     */
    handleInputBlur(_e) {
      if (this.filterable) {
        this.currentLabel = this.currentPlaceholder;
        this.currentPlaceholder = "";
      }

      this.$emit("blur", _e);

      setTimeout(() => {
        if (this.visible) return;
        // if (this.filterable && _e.target.value) {
        //   _e.target.value = "";
        // }

        this.filterOptionsByValue("");
      }, 250);
    },
    /**
     * @description 没有选项时，显示暂无数据
     */
    setNoDataVisible() {
      let hasOptions = false;
      hasOptions = this.options.length > 0;
      if (this.filterable) {
        hasOptions = !!this.options.find(d => d.visible);
      }
      this.hasOptions = hasOptions;
    },
    /**
     * @description 多选模式下，选项的padding-right放大
     */
    setMultiOptionStyle(multi) {
      this.options.forEach(d => (d.multi = multi));
    },
    handleTagClose(opt) {
      if (this.disabled) return;
      opt.choose = false;
      this.$emit("remove-tag", opt.value);
      this.currentTags.splice(this.currentTags.indexOf(opt), 1);
      this.visible = this.visible;
    },
    /**
     * @description 同步选择值
     * @param {number|string} value 选择值
     */
    syncValue(value) {
      if (this.multiple) {
        this.__syncMultiValues(value);
      } else {
        this.__syncSimpleValue(value);
      }
    },
    /**
     * @description 同步单选的选择值
     */
    __syncSimpleValue(value) {
      this.options.forEach(d => {
        if (d.value === value) {
          d.selected = true;
        } else {
          d.selected = false;
        }
      });
    },
    /**
     * @description 同步多选的选择值
     */
    __syncMultiValues(values) {
      this.options.forEach(d => {
        if (values.includes(d.value)) {
          d.choose = true;

          if (!this.currentTags.find(tag => tag.value === d.value)) {
            this.currentTags.push(d);
          }
        } else {
          d.choose = false;
          if (this.currentTags.find(tag => tag.value === d.value)) {
            this.currentTags.splice(this.currentTags.indexOf(d), 1);
          }
        }
      });
    }
  }
};
</script>
