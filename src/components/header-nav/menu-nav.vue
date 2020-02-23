<template>
  <ul class="menu-nav">
    <li
      v-for="item in menus"
      :key="item.path"
      :class="item.active?'active':''"
      @click="activeItem(item)"
    >
      <span>{{item.name}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          active: true,
          path: "/",
          name: "首页"
        },
        {
          active: false,
          path: "/declare",
          name: "专项附加扣除"
        },
        {
          active: false,
          path: "/apply",
          name: "申报管理"
        },
        {
          active: false,
          path: "/search",
          name: "公众查询"
        }
      ]
    };
  },
  methods: {
    activeItem(item) {
      this.menus.forEach(menuItem => {
        menuItem.active = false;
      });
      item.active = true;
      this.$router.push(item.path);
    }
  }
};
</script>
<style lang="scss">
.menu-nav {
  li {
    float: left;
    color: white;
    padding: 20px 10px;
    opacity: 0.65;
  }

  li:hover {
    opacity: 1;
  }

  .active {
    opacity: 1;
  }
}
</style>


