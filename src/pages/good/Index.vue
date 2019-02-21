<template>
    <div class="good-index">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>


  export default {
    name: "GoodIndex",
    data() {
      return {};
    }
  };
</script>

<style lang="less">
    @import "../../assets/less/good/good.less";
</style>
