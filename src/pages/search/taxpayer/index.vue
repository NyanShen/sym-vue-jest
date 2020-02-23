<template>
  <div class="pane-container business-pane">
    <div class="item-content">
      <Breadcrumb
        v-bind:nav="nav"
        v-bind:section="section"
        v-bind:description="description"
        v-bind:sectionState="sectionState"
      ></Breadcrumb>
      <div class="pane pane-body">
        <div class="pane-title">
          <span>请填写纳税人识别号信息</span>
        </div>
        <div class="pane-content">
          <TaxpayerSearchForm></TaxpayerSearchForm>
        </div>
      </div>
    </div>
      <div class="fixed-bar-component-container" ref="searchBtn">
        <div class="btn-group">
          <a class="sym-btn sym-btn-cancel">取消</a>
          <a class="sym-btn sym-btn-primary">立即查询</a>
        </div>
      </div>
  </div>
</template>

<script>
import { calculateBottomPosition } from "@/common/dom.js";
import Breadcrumb from "@/components/breadcrumb/index.vue";
import TaxpayerSearchForm from "@/pages/search/taxpayer/search-form.vue";
export default {
  components: { Breadcrumb, TaxpayerSearchForm },
  data() {
    return {
      footerHeight: 162,
      nav: "公众查询",
      section: "可查询",
      description: "纳税人识别号查询",
      sectionState: "/search"
    };
  },
  mounted() {
    this.calculateBottom();
    window.addEventListener("resize", this.calculateBottom);
    window.addEventListener("scroll", this.calculateBottom);
  },
  methods: {
    calculateBottom() {
      let bottom = calculateBottomPosition(this.footerHeight);
      if (bottom >= 0) {
        this.$refs.searchBtn.style.bottom = bottom + "px";
      } else {
        this.$refs.searchBtn.style.bottom = 0;
      }
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.calculateBottom);
    window.removeEventListener("scroll", this.calculateBottom);
  }
};
</script>