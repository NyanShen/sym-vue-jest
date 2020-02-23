<template>
  <div class="tabs-container person-information">
    <ul class="tab-header clearfix">
      <li class="tab-title" v-for="item in tabItems" :key="item.key">
        <a :class="item.active?'active':''" @click="handleClickItem(item)">{{item.title}}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="content-pane" v-if="tabIndex === '0'"></div>
      <div class="content-pane" v-if="tabIndex === '1'">
        <identity-empty></identity-empty>
      </div>
      <div class="content-pane" v-if="tabIndex === '2'">
        <enjoy-empty></enjoy-empty>
      </div>
    </div>
  </div>
</template>
<script>
import { activeTabItem } from "../../common/steps";
import IdentityEmpty from "@/components/empty-container/identity-empty";
import EnjoyEmpty from "@/components/empty-container/enjoy-empty";
export default {
  components: { IdentityEmpty, EnjoyEmpty },
  data() {
    return {
      tabIndex: "0",
      tabItems: [
        {
          key: "0",
          title: "基础信息",
          active: true
        },
        {
          key: "1",
          title: "其他身份信息",
          active: false
        },
        {
          key: "2",
          title: "可享税收优惠情形",
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

<style lang="scss" scoped>
.person-information {
  padding-top: 12px;
}
</style>
