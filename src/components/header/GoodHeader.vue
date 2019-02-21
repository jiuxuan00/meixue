<template>
    <div class="good-header">
        <base-header>
            <div class="search">
                <input class="ipt" type="text" value="" placeholder="搜索">
            </div>

            <div class="message"><span class="count">12</span></div>
        </base-header>
    </div>
</template>

<script>
  import BaseHeader from "./BaseHeader";

  export default {
    name: "GoodHeader",
    components: {
      BaseHeader
    }
  };
</script>

<style lang="less">
@import "./../../assets/less/good/header.less";
</style>
