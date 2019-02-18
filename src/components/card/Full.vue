<template>
    <div class="full-list">
        <div class="item">
            <img class="pic" :src="data.picUrl" alt="">
            <div class="main">
                <div class="text">{{data.title}}</div>
                <div class="desc">{{data.subTitle}}</div>
                <div class="icons">
                    <icon className="white like" :num="data.likeNum"></icon>
                    <icon className="white view" :num="data.viewNum"></icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from "./../icons/Icon";

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
      Icon
    }
  };
</script>

<style lang="less">
    @import "./../../assets/less/card/card_full.less";
</style>
