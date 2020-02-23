<template>
  <div class="pane-container business-pane">
    <div class="item-content">
      <Breadcrumb
        v-bind:nav="nav"
        v-bind:section="section"
        v-bind:description="description"
        v-bind:sectionState="sectionState"
      ></Breadcrumb>
      <Step :steps="steps"></Step>
      <div class="pane">
        <div class="pane-title">
          <span>{{steps[currentIndex].title}}</span>
        </div>
        <div class="pane-content">
          <BasicInformation v-show="currentIndex === 0"></BasicInformation>
        </div>
      </div>
    </div>
      <div class="fixed-bar-component-container" ref="stepBtn">
        <div class="btn-group">
          <el-button size="small">取消</el-button>
          <el-button
            type="primary"
            plain
            size="small"
            v-if="currentIndex !== 0"
            @click="preStep()"
          >上一步</el-button>
          <el-button
            type="primary"
            size="small"
            v-if="currentIndex < steps.length - 1"
            @click="nextStep()"
          >下一步</el-button>
          <el-button
            type="primary"
            size="small"
            v-if="currentIndex === steps.length - 1"
            @click="sumbitForm()"
          >提交</el-button>
        </div>
      </div>
  </div>
</template>

<script>
import { calculateBottomPosition } from "@/common/dom.js";
import Step from "@/components/step/index.vue";
import Breadcrumb from "@/components/breadcrumb/index.vue";
import BasicInformation from "@/components/step-form/basic-information.vue";
export default {
  components: { Breadcrumb, Step, BasicInformation },
  data() {
    return {
      stepBtnHeight: 162,
      nav: "专项附加扣除",
      section: "可填报",
      description: "子女教育",
      sectionState: "/declare",
      currentIndex: 0,
      steps: [
        {
          index: 0,
          name: "录入基本信息",
          passed: false,
          active: true,
          title: "请录入基本信息"
        },
        {
          index: 1,
          name: "录入子女信息",
          passed: false,
          active: false,
          title: "请录入子女受教育信息"
        },
        {
          index: 2,
          name: "设置扣除比例",
          passed: false,
          active: false,
          title: "请设置扣除比例"
        },
        {
          index: 3,
          name: "选择申报方式",
          passed: false,
          active: false,
          title: "请选择申报方式"
        }
      ]
    };
  },
  mounted() {
    this.calculateBottom();
    window.addEventListener("resize", this.calculateBottom);
    window.addEventListener("scroll", this.calculateBottom);
  },
  methods: {
    preStep() {
      if (this.currentIndex >= 0) {
        this.currentIndex = this.currentIndex - 1;
        this.updateSteps();
      }
    },
    nextStep() {
      this.currentIndex = this.currentIndex + 1;
      this.updateSteps();
    },
    updateSteps() {
      this.steps.forEach(item => {
        if (item.index === this.currentIndex) {
          item.active = true;
          item.passed = false;
        } else if (item.index < this.currentIndex) {
          item.active = false;
          item.passed = true;
        } else {
          item.active = false;
          item.passed = false;
        }
      });
    },
    calculateBottom() {
      let bottom = calculateBottomPosition(this.stepBtnHeight);
      if (bottom >= 0) {
        this.$refs.stepBtn.style.bottom = bottom + "px";
      } else {
        this.$refs.stepBtn.style.bottom = 0;
      }
    }
  },
  destroyed() {
    //离开该页面需要移除这个监听的事件
    window.removeEventListener("resize", this.calculateBottom);
    window.removeEventListener("scroll", this.calculateBottom);
  }
};
</script>

