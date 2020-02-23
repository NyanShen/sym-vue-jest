<template>
  <div class="apply-item-container clearfix">
    <div class="item" v-for="item in applyItems" :key="item.key">
      <p class="title">{{item.title}}</p>
      <p class="description">{{item.description}}</p>
      <div class="btn-box">
        <a href>{{item.btnText}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applyItems: [
        {
          key: "0",
          title: "经营所得个人所得税月（季）度申报（A表）",
          description:
            "取得经营所得，在月度或季度终了后十五日内可由此办理预缴纳税申报",
          btnText: "立即申报"
        },
        {
          key: "1",
          title: "经营所得个人所得税年度申报（B表）",
          description:
            "取得经营所得，在取得所得的次年3月31日前可由此办理汇算清缴申报",
          btnText: "立即申报"
        },
        {
          key: "2",
          title: "多处经营所得个人所得税汇总年度申报（C表）",
          description:
            "取得两处以上经营所得的，选择向其中一处经营管理所在地主管税务机关办理年度汇算清缴",
          btnText: "立即申报"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.apply-item-container {
    .item {
      position: relative;
      float: left;
      width: 46%;
      border: $border;
      border-radius: 3px;
      padding: 20px;
      margin: 28px 14px 0 23px;

      .description {
        margin-top: 5px;
        padding-right: 116px;
        color: $description-color;
      }
      .btn-box {
        position: absolute;
        right: 30px;
        top: 40%;
        a {
          border: 1px solid $primary-color;
          border-radius: 3px;
          color: $primary-color;
          padding: 4px 12px;
        }
        a:hover {
          background-color: $primary-color;
          color: white;
        }
      }
    }
    .item:hover {
        box-shadow: 0 2px 12px 0 rgba($color: $description-color, $alpha: .8);
      .btn-box {
        a {
          background-color: $primary-color;
          color: white;
        }
      }
    }
}
</style>

