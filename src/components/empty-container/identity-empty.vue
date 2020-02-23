<template>
  <div class="flex-ct-y empty-container">
    <img :src="identity_empty" alt />
    <h3>暂无其他身份信息哦</h3>
    <p>添加其他身份证件后，您可以持其他身份证件到办税服务大厅办理业务，更方便</p>
    <a class="sym-btn sym-btn-primary">立即添加</a>
  </div>
</template>
<script>
import identity_empty from "@/images/identity_empty.png";
export default {
  data() {
    return {
      identity_empty
    };
  }
};
</script>