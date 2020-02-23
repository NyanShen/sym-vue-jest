<template>
  <div class="pane-container">
    <div class="content">
      <div class="tabs-container">
        <ul class="tab-header clearfix">
          <li class="tab-title" v-for="item in tabItems" :key="item.key">
            <a :class="item.active?'active':''" @click="activeTabItem(item)">{{item.title}}</a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="content-pane" v-if="tabIndex === '0'">
            <search-item></search-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchItem from "@/pages/search/search-item";
export default {
  components: { SearchItem },
  data() {
    return {
      tabIndex: "0",
      tabItems: [
        {
          key: "0",
          title: "可查询",
          active: true
        }
      ]
    };
  },
  methods: {
    activeTabItem(item) {
      this.tabIndex = item.key;
      this.tabItems.forEach(function(tabItem) {
        tabItem.active = false;
      });
      item.active = true;
    }
  }
};
</script>


<style lang="scss" scoped>
.tabs-container {
  .tab-header {
    padding: 12px 12px 12px 20px;
    border-bottom: 1px solid #eee;
    .tab-title {
      position: relative;
      float: left;

      a {
        padding: 4px 12px 11px;
      }

      .active {
        color: $primary-color;
        border-bottom: 2px solid $primary-color;
      }

      a:hover {
        color: $primary-color;
      }
    }
  }
  .tab-content {
    padding: 12px 12px 12px 20px;
    .content-pane {
      margin-bottom: 25px;
    }
  }
}
</style>

