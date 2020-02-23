<template>
  <div class="apply-item-container clearfix">
    <div class="item" v-for="item in searchItems" :key="item.key">
      <p class="title">{{item.title}}</p>
      <p class="description">{{item.description}}</p>
      <div class="btn-box">
        <router-link :to="item.searchState">{{item.btnText}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchItems: [
        {
          key: "0",
          title: "纳税人识别号查询",
          description: "您可以在此查询自然人纳税人识别号",
          btnText: "立即查询",
          searchState: "/search/taxpayer"
        },
        {
          key: "1",
          title: "票证查验",
          description:
            "支持税票号码以“6”开头的税收缴款书（税务收现专用）、税收缴款书（银行经收专用）、税收完税证明（表格式）和个人所得税纳税记录的验伪查询。",
          btnText: "立即查询",
          searchState: "/search/ticket"
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
    width: 96%;
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
    box-shadow: 0 2px 12px 0 rgba($color: $description-color, $alpha: 0.8);
    .btn-box {
      a {
        background-color: $primary-color;
        color: white;
      }
    }
  }
}
</style>

