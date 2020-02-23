<template>
  <div class="nav login-nav">
    <a href>手机App</a>
    <i class="split-line"></i>
    <a href>帮助中心</a>
    <div class="user-bar" v-if="loginStatus!=='SUCCESS'">
      <i class="split-line"></i>
      <a href @click="loginOut">登陆</a>
      <a class="btn btn-ghost" href>注册</a>
    </div>
    <div class="user-thumb-bar" style="width:60px" v-if="loginStatus==='SUCCESS'">
      <i class="split-line"></i>
      <img class="user-thumb" :src="user_thumb">
      <div class="popover-wrapper">
        <div class="popover-arrow"></div>
        <div class="popover-content">
          <ul>
            <li>
              <router-link to="/information">个人信息管理</router-link>
            </li>
            <li>
              <a href @click="loginOut">退出登录</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import storage from "@/common/storage";
import user_thumb from "@/images/user_thumb.png";
export default {
  data() {
    return {
      user_thumb
    };
  },
  computed: {
    loginStatus() {
      const storeLoginStatus = this.$store.state.login.loginStatus;
      const storageLoginStatus = this.$store.getters["login/loginStatus"];
      return storageLoginStatus || storeLoginStatus;
    }
  },
  methods: {
    loginOut() {
      storage.clearAllItems();
    }
  }
};
</script>

<style lang="scss">
.login-nav {
  float: right;
  line-height: 60px;
  margin-right: 6px;

  a {
    color: white;
  }
  .user-bar {
    position: relative;
    display: inline-block;
  }

  .user-thumb-bar {
    position: relative;
    display: inline-block;
    .user-thumb {
      position: absolute;
      width: 40px;
      height: 40px;
      top: 10px;
    }
  }

  .user-thumb-bar:hover {
    .popover-wrapper {
      display: block;
    }
  }

  .popover-wrapper {
    display: none;
    .popover-arrow {
      position: absolute;
      z-index: 15;
      width: 0;
      height: 0;
      top: 46px;
      left: 36px;
      border: 8px solid transparent;
      border-bottom-color: white;
    }
    .popover-content {
      position: absolute;
      left: -60px;
      background-color: white;
      border-radius: 3px;
      width: 125px;
      z-index: 12;
      border: 1px solid #e3e4e8;
      box-shadow: 0 1px 6px 0 hsla(224,8%,54%,.45);

      ul {
        list-style: none;
        height: 82px;
        li {
          line-height: 40px;
          a {
            color: $title-color;
            font-size: 12px;
            padding: 10px 15px;
          }
        }
        li:hover {
          border-radius: 3px;
          background-color: #fafafa;
        }
      }
    }
  }

  .btn-ghost {
    padding: 3px 12px;
    margin-left: 12px;
    border: 1px solid white;
    border-radius: 3px;
  }
  .btn-ghost:hover {
    color: $primary-color;
    background-color: white;
  }
}
.split-line {
  margin: 0 12px;
  border-left: 1px solid #ced0d1;
}
</style>
