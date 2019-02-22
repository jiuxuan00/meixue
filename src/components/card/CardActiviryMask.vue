<template>
    <div class="activity-mask">
        <div class="item">
            <img class="pic" :src="data.picUrl" alt="">
            <div class="main">
                <div class="text">{{data.title}}</div>
                <div class="desc">{{data.subTitle}}</div>
                <slot name="icons"></slot>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "FullList",
    props: {
      data: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    components:{
    }
  };
</script>

<style lang="less">
    @import "../../assets/less/card/card_activity_mask.less";
</style>
