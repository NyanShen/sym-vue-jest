<template>
  <div class="login-pane">
    <div class="login-form" style="padding-bottom: 15px">
      <h2 class="login-title">扫码登录</h2>
      <div class="login-logo">
        <div class="login-tips" @click="switch_login('USERFORM')">
          <div class="tips-text">密码登录</div>
          <div class="tips-arrow"></div>
          <div class="tips-arrow arrow-cover"></div>
        </div>
        <img :src="switcher_user" width="32px" height="32px" @click="switch_login('USERFORM')">
      </div>
      <div class="login-code">
        <p class="code-title">
          打开
          <span>个人所得税APP</span>
          扫码登录
        </p>
        <div class="code-img">
          <img :src="login_code" alt="扫码登录" width="130px" height="130px">
        </div>
        <p class="code-link">手机端下载</p>
      </div>
    </div>
    <div class="login-footer">
      <router-link class="btn btn-second" to="/registration">立即注册</router-link>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import login_code from "@/images/login_code.png";
import switcher_user from "@/images/switcher_user.png";
export default {
  data() {
    return {
      login_code,
      switcher_user
    };
  },
  methods: {
    ...mapActions({switch_login: 'login/switch_login'})
  }
};
</script>


<style lang="scss" scoped>
@import "./index.scss";
.login-code {
  text-align: center;
  .code-title {
    margin: 20px 0 10px;
  }
  .code-link {
    font-size: 12px;
    color: $primary-color;
    margin-top: 8px;
  }
}
</style>
