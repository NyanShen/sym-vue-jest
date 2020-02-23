<template>
  <div class="sym-breadcrumb-wrapper">
    <ol class="sym-breadcrumb sym-breadcrumb-primary">
      <li class="disabled">{{nav}}</li>
      <li>
        <router-link class="active" :to="sectionState">{{section}}</router-link>
      </li>
      <li>{{description}}</li>
    </ol>
  </div>
</template>
<script>
export default {
  props: {
    nav: String,
    section: String,
    sectionState: {
      type: String,
      default: "/",
      required: false
    },
    description: String
  }
};
</script>
<style lang="scss" scoped>
.sym-breadcrumb-wrapper {
  border-bottom: $border;
  .sym-breadcrumb {
    font-size: 16px;
    line-height: 32px;
    padding-left: 0;
    margin: 12px 0;
    .disabled {
      color: #999;
    }
    li {
      display: inline-block;
      .active {
        color: $primary-color;
      }
      .active:hover {
        color: $primary-color-dark;
      }
    }
    li + li:before {
      content: "\f105";
      padding: 0 12px;
      font-family: "FontAwesome";
      color: $description-color;
      font-size: 18px;
    }
  }
}
</style>