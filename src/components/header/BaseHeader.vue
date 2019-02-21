<template>
    <div class="header">
        <span class="back" @click="onHandleBack"></span>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "BaseHeader",
    methods:{
      onHandleBack(){
        this.$router.back(-1)
      }
    }
  };
</script>

<style lang="less">
    @import "../../assets/less/common/header.less";
</style>
