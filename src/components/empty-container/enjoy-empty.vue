<template>
  <div class="flex-ct-y empty-container">
    <img :src="enjoy_empty" alt width="140px" height="140px"/>
    <h3>暂无可享税收优惠情形</h3>
    <p>如果有残疾、孤老和烈属等情形，登记后在年度综合申报时可享受税收优惠</p>
    <a class="sym-btn sym-btn-primary">立即添加</a>
  </div>
</template>
<script>
import enjoy_empty from "@/images/enjoy_empty.png";
export default {
  data() {
    return {
      enjoy_empty
    };
  }
};
</script>