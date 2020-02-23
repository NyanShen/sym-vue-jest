<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      test: "Hello Vue"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>


