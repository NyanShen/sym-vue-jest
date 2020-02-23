<template>
  <div class="apply-search-container">
    <div class="search-header">
      <div class="search-group clearfix">
        <div class="search-item">
          <span class="search-label">申报项目</span>
          <el-select v-model="declareProject" placeholder="请选择" @change="optionChange">
            <el-option
              v-for="item in optionItems"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            >{{item.name}}</el-option>
          </el-select>
        </div>
        <div class="search-item">
          <span class="search-label">扣除年度</span>
          <el-date-picker v-model="declareYear" type="year" placeholder="选择年"></el-date-picker>
        </div>
      </div>
    </div>
    <div class="search-result">
      <div v-if="!isDeclaredItemsEmpty">
        <div class="search-items clearfix" v-for="item in declaredItems" :key="item.projectNo">
          <div class="item-left">
            <div class="title">{{item.projectName}}</div>
            <div class="text" v-for="subItem in item.projectMap" :key="subItem.fieldIndex">
              <span>{{subItem.fieldName}}：</span>
              <span>{{subItem.fieldValue}}</span>
            </div>
            <div class="text">
              <span>填报来源：</span>
              <span>{{item.origin}}</span>
            </div>
            <div class="text">
              <span>扣除年度：</span>
              <span>{{item.year}}</span>
            </div>
          </div>
          <div class="item-right">
            <div class="time">
              <span>最后修改时间：</span>
              <span>{{item.latestChangeTime}}</span>
            </div>
            <div class="btn">
              <a class="btn-look">查看</a>
            </div>
          </div>
        </div>
      </div>
      <div class="search-empty" v-if="isDeclaredItemsEmpty">
        <div class="empty-icon"></div>
        <span>暂无数据可展示</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as _ from "lodash";
import declareService from "@/service/declare-service.js";
export default {
  data() {
    return {
      declareProject: "0000",
      declareYear: "2019",
      declaredItems: [],
      optionItems: [
        { value: "0000", name: "全部" },
        { value: "1001", name: "子女教育" },
        { value: "1002", name: "继续教育" },
        { value: "1003", name: "大病医药费用" },
        { value: "1004", name: "住房贷款利息" },
        { value: "1005", name: "住房租金" },
        { value: "1006", name: "赡养老人" }
      ]
    };
  },
  mounted() {
    this.getDeclaredItems({
      project: this.declareProject,
      year: this.declareYear
    });
  },
  methods: {
    optionChange(item) {
      this.getDeclaredItems({
        project: item,
        year: this.declareYear
      });
    },
    getDeclaredItems(params) {
      declareService.fetchDeclaredItems(params).then(res => {
        this.declaredItems = res;
      });
    }
  },
  computed: {
    isDeclaredItemsEmpty() {
      return _.isEmpty(this.declaredItems);
    }
  }
};
</script>


<style lang="scss" scoped>
.apply-search-container {
  .search-header {
    border-bottom: $border;
  }
  .search-items {
    position: relative;
    border-bottom: $border;
    padding: 26px 36px;
    .item-left {
      float: left;
      .title {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .text {
        line-height: 2;
        color: $text-color;
      }
    }
    .item-right {
      float: right;
      .time {
        margin-bottom: 20px;
        color: $description-color;
      }
      .btn {
        text-align: right;
        .btn-look {
          border: $border;
          border-radius: 3px;
          padding: 3px 10px;
          color: $primary-color;
          border-color: $primary-color;
        }
      }
    }
  }
  .search-items:hover {
    cursor: pointer;
    background-color: $body-bg-color;
    .btn {
      .btn-look {
        color: white;
        background-color: $primary-color;
      }
    }
  }

  .search-empty {
    text-align: center;
    padding-top: 40px;
    color: $description-color;
    .empty-icon {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      background-image: url("../../images/empty-icon.png");
    }
  }
}
</style>

