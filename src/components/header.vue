<template>
  <header :class="isHome?'':'set-background'">
    <div class="header-container">
      <a class="header-logo" href="#">
        <div class="logo"></div>
        <span class="title">个人所得税</span>
      </a>
      <menu-nav></menu-nav>
      <login-nav></login-nav>
    </div>
  </header>
</template>
<script>
import MenuNav from "./header-nav/menu-nav";
import LoginNav from "./header-nav/login-nav";
export default {
  components: {
    MenuNav,
    LoginNav
  },
  computed: {
    isHome() {
      return this.$route.name === 'home';
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  width: 100%;
  min-width: $body-min-width;
}
.set-background {
  background-color: $primary-color;
}
.header-container {
  margin: 0 auto;
  width: $body-width;
  min-width: $body-min-width;
  .header-logo {
    position: relative;
    .logo {
      float: left;
      width: 36px;
      height: 60px;
      margin-right: 6px;
      background: no-repeat 50%;
      background-image: url("../images/logo_mini.png");
      background-image: -webkit-image-set(
        url("../images/logo_mini.png") 1x,
        url("../images/logo.png") 2x
      );
    }
    .title {
      float: left;
      color: white;
      font-size: 20px;
      line-height: 60px;
      margin-right: 50px;
    }
  }
}
</style>
