<template>
  <div class="pane-container">
    <div class="content">
      <div class="tabs-container">
        <ul class="tab-header clearfix">
          <li class="tab-title" v-for="item in tabItems" :key="item.key">
            <a :class="item.active?'active':''" @click="handleClickItem(item)">{{item.title}}</a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="content-pane" v-if="tabIndex === '0'">
            <apply-item></apply-item>
          </div>
          <div class="content-pane" v-if="tabIndex === '1'">
            <apply-search></apply-search>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { activeTabItem } from "../../common/steps";
import ApplyItem from "@/pages/apply/apply-item";
import ApplySearch from "@/pages/apply/apply-search";
export default {
  components: { ApplyItem, ApplySearch },
  data() {
    return {
      tabIndex: "0",
      tabItems: [
        {
          key: "0",
          title: "可申报",
          active: true
        },
        {
          key: "1",
          title: "已申报",
          active: false
        }
      ]
    };
  },
  methods: {
    handleClickItem(item) {
      this.tabIndex = activeTabItem(item, this.tabItems);
    }
  }
};
</script>
