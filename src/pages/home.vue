<template>
  <div class="main-container">
    <div class="seize-seat"></div>
    <div class="background-banner"></div>
    <div class="login-banner">
      <div class="banner-inner">
        <img class="inner-text" :src="banner_text" alt="人人为我，我为人人">
        <login-pane></login-pane>
      </div>
    </div>
    <div class="index-container">
      <div class="index-content">
        <main-entry></main-entry>
        <other-entry></other-entry>
      </div>
    </div>
  </div>
</template>

<script>
import LoginPane from "@/components/login-pane";
import MainEntry from "@/components/main-entry";
import OtherEntry from "@/components/other-entry";
import banner_text from "@/images/banner_text.png";
export default {
  components: { LoginPane, MainEntry, OtherEntry },
  data() {
    return {
      banner_text
    };
  }
};
</script>


<style lang="scss" scoped>
.main-container {
  position: relative;
  margin-bottom: 40px;
  .seize-seat {
    /*给login-banner做绝对定位*/
    height: 660px;
  }
  .background-banner {
    position: absolute;
    top: -60px;
    width: 100%;
    height: 600px;
    min-width: $body-min-width;
    z-index: -10;
    background-color: $primary-color;
    background-size: cover;
    background-position: 50%;
    background-image: url("../images/content_background.jpg");
    background-image: image-set(
      url("../images/content_background.jpg") 1x,
      url("../images/content_background.jpg") 2x
    );
  }
}

.login-banner {
  position: absolute;
  top: 0;
  width: 100%;
  height: 600px;
  min-width: $body-min-width;
  .banner-inner {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    .inner-text {
      width: 436px;
      height: 193px;
      position: absolute;
      left: 0;
      top: 100px;
    }
  }
}

.index-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: block;
}
</style>

