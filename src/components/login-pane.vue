<template>
  <div>
    <login-code v-if="loginStatus === 'QRCODE'"></login-code>
    <login-form v-if="loginStatus === 'USERFORM'"></login-form>
    <login-success v-if="loginStatus === 'SUCCESS'"></login-success>
  </div>
</template>

<script>
import LoginCode from "@/components/login-pane/login-code";
import LoginForm from "@/components/login-pane/login-form";
import LoginSuccess from "@/components/login-pane/login-success";
export default {
  components: { LoginForm, LoginCode, LoginSuccess },
  data() {
    return {};
  },
  computed: {
    loginStatus() {
      const storeLoginStatus = this.$store.state.login.loginStatus;
      const storageLoginStatus = this.$store.getters["login/loginStatus"];
      return storageLoginStatus || storeLoginStatus;
    }
  }
};
</script>
