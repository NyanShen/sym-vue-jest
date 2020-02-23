<template>
  <ul class="sym-step-wrapper clearfix">
    <li v-for="item in steps" :key="item.index" :class="getItemClass(item)">
      <div class="step-prefix"></div>
      <div class="step-sequence">
        <i class="fa fa-check" v-if="item.passed"></i>
        <span v-else>{{item.index+1}}</span>
      </div>
      <div class="step-content">{{item.name}}</div>
      <div class="step-sufix"></div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    steps: Array
  },
  methods: {
    getItemClass(item) {
      let itemClass = "step-item";
      if (item.index === 0) {
        itemClass = itemClass + " step-first";
      }
      if (this.steps.length - item.index === 1) {
        itemClass = itemClass + " step-last";
      }
      if (item.active) {
        itemClass = itemClass + " active";
      }
      if (item.passed) {
        itemClass = itemClass + " passed";
      }
      return itemClass;
    }
  }
};
</script>

<style lang="scss" scoped>
.sym-step-wrapper {
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.step-item.step-first {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  .step-prefix {
    visibility: hidden;
  }
}
.step-item.step-last {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-right: 0;
  .step-sufix {
    visibility: hidden;
  }
}
.step-item {
  position: relative;
  flex: 1;
  height: 38px;
  line-height: 38px;
  margin-right: 18px;
  text-align: center;
  background-color: white;
  .step-prefix {
    position: absolute;
    top: 0;
    left: -10px;
    width: 10px;
    border-top: 19px solid white;
    border-bottom: 19px solid white;
    border-left: 10px solid transparent;
  }
  .step-sufix {
    position: absolute;
    top: 0;
    right: -10px;
    width: 10px;
    border-top: 19px solid transparent;
    border-bottom: 19px solid transparent;
    border-left: 10px solid white;
  }
  .step-sequence {
    display: inline-block;
  }
  .step-content {
    display: inline-block;
  }
}

.step-item.active {
  background-color: $primary-color;
  .step-prefix {
    border-top: 19px solid $primary-color;
    border-bottom: 19px solid $primary-color;
  }
  .step-sufix {
    border-left: 10px solid $primary-color;
  }
  .step-sequence,
  .step-content {
    color: white;
  }
}
.step-item.passed {
  background-color: $primary-color-light;
  .step-prefix {
    border-top: 19px solid $primary-color-light;
    border-bottom: 19px solid $primary-color-light;
  }
  .step-sufix {
    border-left: 10px solid $primary-color-light;
  }
  .step-sequence,
  .step-content {
    color: $primary-color;
  }
}
</style>