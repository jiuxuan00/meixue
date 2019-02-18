<template>
    <div class="card-through">
        <img class="pic" :src="data.pic" alt="">
        <div class="main">
            <div class="name"><span>{{data.name}}</span></div>
            <div class="desc">{{data.desc}}</div>
            <div class="icons">
                <icon className="gray collection" :num="data.likeNum"></icon>
                <icon className="gray view" :num="data.viewNum"></icon>
            </div>
            <div class="time">{{data.time}}</div>
        </div>
    </div>
</template>

<script>
  import Icon from "./../../components/icons/Icon";

  export default {
    props: {
      data: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    components: {
      Icon
    }
  };
</script>

<style lang="less">
    @import '../../assets/less/card/card_through.less';
</style>
