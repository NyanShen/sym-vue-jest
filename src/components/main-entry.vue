<template>
  <div class="main-entry">
    <div class="entry-item">
      <div class="item-icon">
        <img :src="tax_record" alt="专项附加扣除填报" width="80px" height="80px">
      </div>
      <span class="item-title">专项附加扣除填报</span>
      <p class="item-desc">进行子女教育、继续教育、大病医疗、赡养老人等专项附加扣除填报</p>
      <el-button type="primary" size="small" plain @click="toDeclare">立即填报</el-button>
      <div class="entry-line"></div>
    </div>
    <div class="entry-item">
      <div class="item-icon">
        <img :src="tax_apply" alt="纳税申报" width="80px" height="80px">
      </div>
      <span class="item-title">纳税申报</span>
      <p class="item-desc">进行个人各项应税所得申报并可在线缴纳税款或申请退税</p>
      <el-button type="primary" size="small" plain>立即申报</el-button>
      <div class="entry-line"></div>
    </div>
    <div class="entry-item">
      <div class="item-icon">
        <img :src="tax_record_title" alt="纳税记录" width="80px" height="80px">
      </div>
      <span class="item-title">纳税记录</span>
      <p class="item-desc">进行个人所得税纳税记录的在线查询、下载和打印</p>
      <el-button type="primary" size="small" plain>功能介绍</el-button>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import tax_record from "@/images/tax_record.png";
import tax_apply from "@/images/tax_apply.png";
import tax_record_title from "@/images/tax_record_title.png";
export default {
  data() {
    return {
      tax_record,
      tax_apply,
      tax_record_title
    };
  },
  methods: {
    toDeclare() {
      this.$router.push('/declare');
    }
  }
};
</script>

<style lang="scss" scoped>
.main-entry {
  position: relative;
  width: 1000px;
  margin: -184px auto 0;
  background-color: white;
  border-radius: 3px;
  padding: 8px 0;
  box-shadow: 0 1px 6px 0 hsla(224, 8%, 54%, 0.45);

  .entry-item {
    position: relative;
    float: left;
    text-align: center;
    width: 33.333333%;
    padding: 32px 20px;

    .item-title {
      color: $title-color;
      line-height: 36px;
      font-size: 16px;
      margin-top: 8px;
    }
    .item-desc {
      color: $description-color;
      height: 72px;
      margin: 6 auto 0;
      max-width: 270px;
    }
    .entry-line {
      position: absolute;
      right: 0;
      top: 70px;
      width: 1px;
      height: 160px;
      background-color: #e3e4e8;
    }
  }
}

@media screen and (min-width: 1200px) {
  .main-entry {
    width: 1200px;
  }
}
</style>



