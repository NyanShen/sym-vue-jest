<template>
  <div class="flex-ct-x">
    <form class="sym-form-wrapper">
      <div class="sym-form-item">
        <label class="sym-form-label">
          <span>我的手机号码</span>
          <i class="fa fa-question-circle-o"></i>
        </label>
        <div class="sym-form-edit">
          <input class="sym-form-control" type="text" placeholder="请输入手机号码" disabled />
        </div>
      </div>
      <div class="sym-form-item">
        <label class="sym-form-label">我的电子邮箱</label>
        <div class="sym-form-edit">
          <input
            class="sym-form-control"
            type="text"
            placeholder="请输入邮箱"
            pattern="^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$"
          />
          <div class="sym-form-error">邮箱格式不正确</div>
        </div>
      </div>
      <div class="sym-form-item">
        <label class="sym-form-label">
          <span>我的联系地址</span>
        </label>
        <div class="sym-form-edit">
          <input class="sym-form-control" type="text" placeholder="请输入联系地址" />
        </div>
      </div>
      <div class="sym-form-item">
        <label class="sym-form-label"></label>
        <div class="sym-form-edit">
          <input class="sym-form-control" type="text" placeholder="请填写小区、楼栋、单元室等" />
          <i class="sym-form-icon sym-form-icon-delete"></i>
          <i class="sym-form-icon sym-form-icon-check"></i>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import addressService from "@/service/address-service/index";
export default {
  mounted() {
    this._getProvince();
  },
  methods: {
    _getProvince() {
      addressService.fetchProvinces().then(res => {
        console.log(res);
      });
    }
  }
};
</script>