<template>
    <div class="home">
        <header-home @tabSelected="tabSelected"></header-home>
        <!--//End tab导航-->
        <page-home v-if="currentTab===0"></page-home>
        <page-recommend v-if="currentTab===1"></page-recommend>
    </div>
</template>

<script>
  import vScroll from "../../components/base/Scroll";
  import HeaderHome from "../../components/header/HomeHeader";
  import PageHome from "../../components/home/Home";
  import PageRecommend from "../../components/home/Recommend";

  export default {
    name: "Index",
    data() {
      return {
        currentTab: 0
      };
    },
    components: {
      vScroll,
      HeaderHome,
      PageHome,
      PageRecommend
    },
    methods: {
      //顶部tab
      tabSelected(tabIndex) {
        this.currentTab = tabIndex;
        console.log("tabIndex->", tabIndex);
      }
    }
  };
</script>

<style lang="less">
    @import "../../assets/less/home/home.less";
</style>
