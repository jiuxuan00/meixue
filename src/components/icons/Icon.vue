<template>
    <div class="icon" :class="className">
        <span class="num">{{num}}</span>
    </div>
</template>

<script>
  export default {
    props: {
      className: {
        type: String,
        default() {
          return "";
        }
      },
      num: {
        type: Number,
        default() {
          return 0;
        }
      }
    }
  };
</script>

<style lang="less">
    @import './../../assets/less/common/icon.less';
</style>
