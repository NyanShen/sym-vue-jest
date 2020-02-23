<template>
  <div class="login-pane">
    <div class="login-form">
      <h2 class="login-title">密码登录</h2>
      <div class="login-logo">
        <div class="login-tips" @click="switch_login('QRCODE')">
          <div class="tips-text">扫码登录</div>
          <div class="tips-arrow"></div>
          <div class="tips-arrow arrow-cover"></div>
        </div>
        <img :src="switcher_code" width="32px" height="32px" @click="switch_login('QRCODE')">
      </div>
      <form id="loginForm" class="login-body">
        <div class="login-error"></div>
        <div class="username">
          <div class="login-input">
            <el-input size="small" placeholder="手机号/登录名/证件号" v-model="login.username"></el-input>
          </div>
        </div>
        <div class="password">
          <div class="login-input">
            <el-input size="small" placeholder="密码" v-model="login.password" show-password></el-input>
          </div>
        </div>
        <div class="verify">
          <div class="login-input login-input-verify">
            <el-input size="small" placeholder="验证码" v-model="login.verifyCode"></el-input>
          </div>
          <img class="verify-img" :src="verifyImg" alt="验证码">
        </div>
        <div class="btn-submit">
          <el-button type="primary" style="width: 100%" size="small" @click="loginIn">登录</el-button>
        </div>
      </form>
    </div>
    <div class="login-footer">
      <router-link class="btn btn-first" to="/password">忘记密码</router-link>
      <span class="split-line"></span>
      <router-link class="btn btn-second" to="/registration">立即注册</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import switcher_code from "@/images/switcher_code.png";
import codeService from "@/service/login-service/code-service";
import loginService from "@/service/login-service/login-service";
export default {
  data() {
    return {
      switcher_code,
      login: {
        username: "",
        password: "",
        verifyCode: ""
      },
      verifyImg: ""
    };
  },
  methods: {
    ...mapActions({
      switch_login: "login/switch_login",
      set_current_user: "login/set_current_user"
    }),
    getVerifyCode() {
      codeService.getVerifyCode().then(res => {
        this.verifyImg = "data:image/jpeg;base64," + res.content;
      });
    },
    loginIn() {
      loginService.loginIn(this.login).then(res => {
        this.set_current_user(res.user);
        this.switch_login("SUCCESS");
      });
    }
  },
  mounted() {
    this.getVerifyCode();
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
.login-body {
  .login-error {
    min-height: 20px;
    line-height: 20px;
    color: #fc5541;
    margin-top: 8px;
  }
  .login-input {
    margin-bottom: 20px;
  }
  .verify {
    position: relative;
    .login-input-verify {
      width: 180px;
      height: 36px;
    }
    .verify-img {
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 32px;
      border-radius: 3px;
      border: 1px solid #d1d3d8;
    }
  }
}
</style>