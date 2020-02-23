<template>
  <div class="flex-ct-x">
    <form class="sym-form-wrapper">
      <div class="sym-form-item">
        <label class="sym-form-label">
          <span class="required-star">*</span>证件类型
        </label>
        <div class="sym-form-edit">
          <div class="sym-select">
            <div class="sym-select-label" @click="onSelectClick()">
              <input
                class="sym-form-control sym-input-with-icon"
                type="text"
                placeholder="居民身份证"
                readonly
                :value="identity.name"
              />
              <i class="sym-select-icon fa fa-angle-down icon-down"></i>
            </div>
            <ul :class="getItemClass()">
              <li
                :class="item.value === identity.value&&'active'"
                v-for="item in identities"
                :key="item.value"
                @click="OnSelectChange(item)"
              >{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import commonService from "@/service/common/identities.js";
export default {
  data() {
    return {
      identities: [],
      showOptions: false,
      identity: { value: "201", name: "居民身份证" }
    };
  },
  mounted() {
    this.getIdentities();
  },
  methods: {
    getIdentities() {
      commonService.fetchIdentityItems().then(res => {
        this.identities = res;
      });
    },
    OnSelectChange(item) {
      this.identity = item;
      this.showOptions = false;
    },
    onSelectClick() {
        this.showOptions = !this.showOptions;
    },
    getItemClass() {
      return this.showOptions
        ? "sym-select-options dropdown-show"
        : "sym-select-options";
    }
  }
};
</script>

<style lang="scss" scoped>
.sym-select {
  position: relative;
  z-index: 300;
  width: 282px;
  height: 34px;
  border: $border;
  border-radius: 4px;
  .sym-select-label {
    display: inline-block;
    width: 280px;
    padding-right: 24px;
    .sym-input-with-icon {
      border: none;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sym-select-icon {
      position: absolute;
      top: 6px;
      right: 6px;
      font-size: 20px;
    }
    .icon-down {
      transform: rotate(180deg);
      transition: transform 0.1s;
    }
  }
  .sym-select-options {
    display: none;
    margin: 2px 0;
    max-height: 216px;
    overflow-y: auto;
    border: $border;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 1px 6px 0 hsla(224, 8%, 54%, 0.45);
    li {
      padding: 8px;
      line-height: 20px;
      cursor: pointer;

      &:hover {
        background-color: $body-bg-color;
      }
      &.active {
        color: $primary-color;
      }
    }
    &.dropdown-show {
      display: block;
    }
  }
}
</style>