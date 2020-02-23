<template>
  <div class="pane-container">
    <div class="content" :class="collapsed? 'person-nav-collapse':''">
      <div class="sider">
        <div class="menu">
          <i class="fa fa-th-list fa-lg" @click="toggle"></i>
        </div>
        <div class="picture">
          <img :src="user_thumb" alt>
        </div>
        <div class="name">
          <span>Nyan Shen</span>
        </div>
        <div class="person-nav-menu">
          <ul>
            <li v-for="item in personMenu" :key="item.path" :class="item.active ? 'current':''" @click="activeItem(item)">
              <div class="menu-item"> 
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import user_thumb from "@/images/user_thumb.png";
export default {
  data() {
    return {
      user_thumb,
      collapsed: false,
      personMenu: [
        {
          active: true,
          path: "/information",
          icon: "fa fa-user-o",
          name: "个人信息"
        },
        {
          path: "/employee",
          icon: "fa fa-user-circle-o",
          name: "任职受雇信息"
        },
        {
          path: "/family",
          icon: "fa fa-users",
          name: "家庭成员信息"
        },
        {
          path: "/credit_card",
          icon: "fa fa-credit-card",
          name: "银行卡"
        },
        {
          path: "/my_apply",
          icon: "fa fa-files-o",
          name: "我的申诉"
        },
        {
          path: "/security",
          icon: "fa fa-envelope-open-o",
          name: "安全中心"
        }
      ]
    };
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    },
    activeItem(item) {
      this.$router.push(item.path);
      this.personMenu.forEach(item => {
        if (item.path === this.$route.path) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.content {
  position: relative;
  clear: both;

  .sider {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: white;
    width: 24%;
    .menu {
      text-align: right;
      margin: 16px 20px 0 0;
      cursor: pointer;
    }
    .picture {
      img {
        width: 80px;
        height: 80px;
      }
      text-align: center;
      margin: 32px 0 20px;
    }
    .name {
      text-align: center;
      font-size: 16px;
      color: $title-color;
      margin-bottom: 40px;
    }
    .person-nav-menu {
      .current {
        border-left: 3px solid $primary-color;
        background-color: $primary-background-color;
        .menu-item {
          color: $primary-color;
        }
      }
      ul li {
        height: 52px;
        cursor: pointer;
        line-height: 52px;

        .menu-item {
          color: $text-color;
          font-size: 14px;
          padding-left: 20px;
        }
        .fa {
          padding-right: 12px;
        }
      }

      li:hover {
        background-color: $primary-background-color;
        .menu-item {
          color: $primary-color;
        }
      }
    }
  }

  .wrapper {
    margin-left: 26%;
    background: white;
    width: 74%;
    min-height: 700px;
  }
}
.person-nav-collapse {
  .sider {
    width: 52px;
    .menu {
      margin: 16px 16px 0 0;
    }
    .picture {
      img {
        width: 28px;
        height: 28px;
      }
    }
    .name {
      display: none;
    }
    .person-nav-menu {
      .current {
        border-left: none;
      }
      li {
        span {
          display: none;
        }
      }
    }
  }
  .wrapper {
    margin-left: 6%;
    width: 94%;
  }
}
</style>

