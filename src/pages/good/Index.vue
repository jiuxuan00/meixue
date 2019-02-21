<template>
    <div class="good-index">
        <good-header></good-header>
        <!--//End-->
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
  import GoodHeader from "../../components/header/GoodHeader";

  export default {
    name: "GoodIndex",
    data() {
      return {};
    },
    components: {
      GoodHeader
    }
  };
</script>

<style lang="less">
    @import "../../assets/less/good/good.less";
</style>
