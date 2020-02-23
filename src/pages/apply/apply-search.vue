<template>
  <div class="apply-search-container">
    <div class="search-header">
      <ul class="clearfix">
        <li
          :class="card.active&&'active'"
          v-for="card in cards"
          :key="card.index"
          @click="activeCard(card)"
        >{{card.title}}</li>
      </ul>
    </div>
    <div class="search-summary">
      <div class="summary summary-left">
        <dl>
          <div>待缴税款</div>
          <dt>
            <span class="money">0.00</span>
            <span>元</span>
            <a class="sym-btn sym-btn-default">立即缴款</a>
          </dt>
        </dl>
      </div>
      <div class="summary summary-right">
        <dl>
          <div>可退税款</div>
          <dt>
            <span class="money">0.00</span>
            <span>元</span>
            <a class="sym-btn sym-btn-default">申请退抵税</a>
          </dt>
        </dl>
      </div>
    </div>
    <div class="search-table"></div>
  </div>
</template>

<script>
import { activeTabItem } from "../../common/steps";
export default {
  data() {
    return {
      currentIndex: 0,
      cards: [
        {
          index: 0,
          title: "未完成",
          active: true
        },
        {
          index: 1,
          title: "已完成",
          active: false
        },
        {
          index: 2,
          title: "已作废",
          active: false
        }
      ]
    };
  },
  methods: {
    activeCard(card) {
      this.currentIndex = activeTabItem(card, this.cards);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-header {
  padding: 10px 0 20px 0;
  ul {
    li {
      float: left;
      padding: 6px 16px;
      border: $border;
      border-right: none;
      cursor: pointer;
    }
    li.active {
      background-color: $primary-color;
      color: white;
    }
    li:first-child {
      border-radius: 3px 0 0 3px;
    }

    li:last-child {
      border-radius: 0 3px 3px 0;
      border-right: $border;
    }
  }
}
.search-summary {
  padding: 24px;
  border: $border;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 hsla(224, 8%, 54%, 0.2);
  .summary {
    display: inline-block;
    width: 49.5%;
    span {
      font-size: 18px;
    }
    .money {
      color: $count-color;
    }
    dl {
      margin-left: 210px;
      div {
        line-height: 32px;
      }
    }
  }
  .summary-left {
    border-right: $border;
  }
}
</style>
