<template>
  <div class="apply-item-container clearfix">
    <div class="item" v-for="item in applyItems" :key="item.key">
      <p class="title">{{item.title}}</p>
      <p class="description">{{item.description}}</p>
      <div class="btn-box">
        <router-link to="/declare/children_education">{{item.btnText}}</router-link>
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
          title: "子女教育",
          description:
            "子女处于学前教育阶段或者接受全日制学历教育的相关支出可定额扣除",
          btnText: "立即填报"
        },
        {
          key: "1",
          title: "继续教育",
          description:
            "本人在中国境内接受学历（学位）继续教育和职业资格继续教育的支出可定额扣除",
          btnText: "立即填报"
        },
        {
          key: "2",
          title: "大病医药费用",
          description:
            "本人及配偶、未成年子女发生的大病医药费用支出可限额内据实扣除",
          btnText: "立即填报"
        },
        {
          key: "3",
          title: "住房贷款利息",
          description: "本人或配偶符合规定的住房贷款利息支出，或本人符合规定的支出可按规定扣除",
          btnText: "立即填报"
        },
        {
          key: "4",
          title: "住房租金",
          description: "本人在主要工作城市没有自有住房而发生的住房租金支出可定额扣除",
          btnText: "立即填报"
        },
        {
          key: "5",
          title: "赡养老人",
          description: "本人赡养年满60岁（含）的父母或者子女均已去世的年满60岁的祖父母可按规定扣除",
          btnText: "立即填报"
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

