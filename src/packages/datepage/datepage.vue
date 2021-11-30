<template>
  <div class="my-datepage">
    <date-cell ref="dateCell_1" @dateSelect="handleSelect" :value="value" />
  </div>
</template>

<script>
import { oneOf } from "../../utils/assist";

import DateCell from "./dateCell.vue";
import Emitter from "../../mixins/emitter";

export default {
  name: "myDatePage",
  mixins: [Emitter],
  components: {
    DateCell
  },
  data() {
    return {
      value: ""
    };
  },
  props: {
    type: {
      validator(value) {
        return oneOf(value, ["date", "daterange"]);
      },
      default: "date"
    }
  },
  methods: {
    handleSelect(date) {
      if (this.type === "date") {
        this.value = date.value;
        this.$emit("change", date);
      }
    }
  }
};
</script>
