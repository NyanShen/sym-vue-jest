<template>
  <div class="login-pane">
    <div class="login-form logined-pane">
      <div class="user-info">
        <div class="user-thumb">
          <img :src="user_thumb" alt="头像" width="64px" height="64px">
        </div>
        <div class="user-detail">
          <h3>Hi, 沈艳美</h3>
          <p>账号： NyanShen</p>
        </div>
      </div>
      <div class="welcome-notice">
        <p>您是今年访问的第</p>
        <p style="color: #f90; font-size:28px">363,380,251</p>
        <p>位纳税人</p>
      </div>
      <div class="personal-edit">
        <el-button style="width:100%" type="primary" size="small" plain @click="toPerson">完善个人信息</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import user_thumb from "@/images/user_thumb.png";
export default {
  data() {
    return { user_thumb, currentUser: {} };
  },
  methods: {
    toPerson() {
      this.$router.push({path: "/information"});
    }
  },
  mounted() {
    //console.info(this.$store.state);
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
.logined-pane {
  min-height: 84px;
  text-align: center;
  background: url("../../images/login_success.png") no-repeat;

  .user-info {
    position: relative;
    min-height: 80px;
    margin-bottom: 20px;

    .user-thumb {
      position: absolute;
      top: 0;
      left: 12px;
    }
    .user-detail {
      padding-top: 12px;
      color: white;
    }
  }

  .welcome-notice {
    color: #666;
    margin-bottom: 20px;
    line-height: 28px;
  }
}
</style>
