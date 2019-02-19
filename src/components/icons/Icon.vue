<template>
    <div class="icon" :class="data.className">
        <span class="num">{{data.count}}</span>
    </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {}
  };
</script>

<style lang="less">
    @import './../../assets/less/common/icon.less';
</style>
