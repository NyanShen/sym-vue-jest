<template>
  <footer>
    <div class="footer-container">
      <div class="site-logoes">
        <img :src="political_agency" alt="政党机关">
        <img :src="find_error" alt="政府找错">
      </div>
      <div class="site-contract">
        <div class="contract">
          <p>国家税务总局主办</p>
          <p>版权所有：国家税务总局</p>
          <p>粤ICP11010473号</p>
        </div>
        <div class="contract">
          <p>
            纳税服务热线：
            <span style="color: #666">0755-12366</span>
          </p>
          <p>地址：北京市海淀区羊坊店西路5号</p>
          <p>邮编：100038</p>
        </div>
        <div class="contract">
          <a style="color: #999" href="#">网站声明</a>
        </div>
      </div>
      <div class="site-code">
        <div class="code-box">
          <div class="code-logo"></div>
          <div class="code-img">
            <img :src="scan_code" alt="手机APP" width="74px" height="70px">
          </div>
          <div class="code-note">手机APP</div>
        </div>
        <div class="code-box">
          <div class="code-logo"></div>
          <div class="code-img">
            <img :src="scan_code" alt="微信公众号" width="74px" height="70px">
          </div>
          <div class="code-note">微信公众号</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import scan_code from "../images/scan_code.png";
import find_error from "../images/find_error.png";
import political_agency from "../images/political_agency.png";
export default {
  data() {
    return {
      scan_code,
      find_error,
      political_agency
    };
  }
};
</script>

<style lang="scss" scoped>
footer {
  height: 162px;
  background-color: white;
  width: 100%;
  min-width: $body-min-width;
}
.footer-container {
  margin: 0 auto;
  padding: 32px 0;
  width: $body-width;
  min-width: $body-min-width;
}
.site-logoes {
  float: left;
  img {
    height: 80px;
    margin-right: 12px;
    vertical-align: middle;
  }

  img:nth-child(1) {
    width: 54px;
  }

  img:nth-child(2) {
    width: 120px;
  }
}
.site-contract {
  float: left;
  .contract {
    float: left;
    padding-left: 24px;
    padding-top: 12px;
    p {
      color: $description-color;
      margin: 0 0 8px;
    }
  }
}

.site-code {
  float: right;

  .code-box {
    float: left;
    width: 74px;
    position: relative;
    margin-left: 20px;

    .code-logo {
      position: absolute;
      z-index: 10;
      width: 20px;
      height: 20px;
      top: 27px;
      left: 27px;
      background-image: url("../images/tax_icon.png");
      background-image: image-set(
        url("../images/tax_icon.png") 1x,
        url("../images/tax_icon_big.png") 2x
      );
    }

    .code-note {
      color: white;
      text-align: center;
      font-size: 12px;
      background-color: $primary-color;
    }
  }
}
</style>