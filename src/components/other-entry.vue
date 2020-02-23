<template>
  <div class="other-entries">
    <div class="entry-list">
      <div class="clearfix">
        <div class="common-header more-service-title">
          <span class="common-title">常用服务</span>
        </div>
        <div class="common-header more-service-title">
          <span class="common-title">深圳本地业务</span>
        </div>
      </div>
      <div class="entries clearfix">
        <div class="other-entry-item" v-for="entry in entries" :key="entry.itemTitle">
          <a href>
            <div class="item-thumb">
              <img :src="entry.itemThumb" alt width="40px" height="40px">
            </div>
            <div class="item-title">{{entry.itemTitle}}</div>
            <div class="item-desc">{{entry.itemDesc}}</div>
          </a>
        </div>
      </div>
    </div>
    <div class="related-policies">
      <div class="common-header">
        <span class="common-title">指导帮助</span>
      </div>
      <div class="policies">
        <div class="policy-item" v-for="policy in policies" :key="policy.itemTitle">
          <div class="item-thumb">
            <img :src="policy.itemThumb" :alt="policy.itemTitle" width="60px" height="60px">
          </div>
          <div class="item-title">
            <a href>{{policy.itemTitle}}</a>
          </div>
        </div>
        <div class="policy-more">
          <a href>更多</a>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import how_to_visit from "@/images/how_to_visit.png";
import out_to_pension from "@/images/out_to_pension.png";
import how_to_register from "@/images/how_to_register.png";
import platform_introduce from "@/images/platform_introduce.png";
import illness_cure from "@/images/illness_cure.png";
import keep_education from "@/images/keep_education.png";
import housing_rents from "@/images/housing_rents.png";
import housing_loans from "@/images/housing_loans.png";
import wait_for_pay from "@/images/wait_for_pay.png";
import old_people_icon from "@/images/old_people_icon.png";
import taxes_record from "@/images/taxes_record.png";
import tax_check_code from "@/images/tax_check_code.png";
import children_education from "@/images/children_education.png";
import children_education_output from "@/images/children_education_output.png";
export default {
  data() {
    return {
      entries: [
        {
          itemThumb: children_education,
          itemTitle: "子女教育",
          itemDesc:
            "子女处于学前教育阶段或者接受全日制学历教育的相关支出可定额扣除"
        },
        {
          itemThumb: keep_education,
          itemTitle: "继续教育",
          itemDesc:
            "本人接受学历（学位）继续教育和职业资格继续教育的支出可定额扣除"
        },
        {
          itemThumb: illness_cure,
          itemTitle: "大病医疗",
          itemDesc:
            "本人及配偶、未成年子女发生的大病医药费用支出可限额内据实扣除"
        },
        {
          itemThumb: housing_loans,
          itemTitle: "住房贷款利息",
          itemDesc: "本人或配偶发生的首套住房贷款利息支出可定额扣除"
        },
        {
          itemThumb: housing_rents,
          itemTitle: "住房租金",
          itemDesc: "本人发生的符合政策规定的住房租金支出可定额扣除"
        },
        {
          itemThumb: old_people_icon,
          itemTitle: "赡养老人",
          itemDesc: "本人赡养一位及以上被赡养人的赡养支出可按规定扣除"
        },
        {
          itemThumb: wait_for_pay,
          itemTitle: "待缴款清单",
          itemDesc: "提供已申报项目的待缴税查询及缴款服务。"
        },
        {
          itemThumb: taxes_record,
          itemTitle: "纳税记录开具",
          itemDesc:
            "提供《个人所得税纳税记录》开具服务。本功能暂未上线，敬请期待。"
        },
        {
          itemThumb: tax_check_code,
          itemTitle: "税收凭证查验",
          itemDesc: "提供税收票证、纳税记录等凭证查验服务。"
        }
      ],
      policies: [
        {
          itemThumb: platform_introduce,
          itemTitle: "平台功能简介"
        },
        {
          itemThumb: how_to_visit,
          itemTitle: "如何访问平台?"
        },
        {
          itemThumb: how_to_register,
          itemTitle: "新用户如何注册？"
        },
        {
          itemThumb: children_education_output,
          itemTitle: "子女教育支出"
        },
        {
          itemThumb: out_to_pension,
          itemTitle: "赡养老人支出"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.other-entries {
  position: relative;
  width: 1000px;
  margin: 20px auto;

  .common-header {
    position: relative;
    font-size: 18px;
    line-height: 24px;
    margin: 20px 0 12px;
    .common-title {
      padding-left: 12px;
    }
  }
  .common-header:after {
    content: " ";
    height: 0;
    clear: both;
    display: block;
    width: 4px;
    height: 20px;
    position: absolute;
    top: 2px;
    background-color: $primary-color;
    border-radius: 4px;
  }
  .more-service-title {
    float: left;
    margin-right: 12px;
  }
  .entry-list {
    float: left;
    width: 66%;
    .entries {
      background-color: white;
      box-shadow: 0 1px 6px 0 hsla(224, 8%, 54%, 0.45);
      border-radius: 3px;

      .other-entry-item {
        width: 32.5%;
        float: left;
        height: 183px;
        padding: 24px 0 16px 24px;

        .item-title {
          color: $title-color;
          line-height: 22px;
          margin-top: 8px;
          font-size: 16px;
        }
        .item-desc {
          color: $description-color;
          margin-top: 4px;
          line-height: 20px;
        }
      }
    }
  }
  .related-policies {
    float: right;
    width: 30%;

    .policies {
      padding: 4px 24px;
      background-color: white;
      box-shadow: 0 1px 6px 0 hsla(224, 8%, 54%, 0.45);
      border-radius: 3px;

      .policy-item {
        height: 82px;
        margin: 16px 0;
        border-bottom: 1px solid #e3e4e8;

        .item-thumb {
          float: left;
        }
        .item-title {
          float: right;
          height: 66px;
          width: 65%;
          padding-left: 6px;
          padding-top: 20px;
          a {
            color: $title-color;
            font-size: 16px;
          }
        }
      }
      .policy-more {
        margin-bottom: 16px;
        text-align: right;
        a {
          color: $primary-color;
        }
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .other-entries {
    width: 1200px;
  }
}
</style>

