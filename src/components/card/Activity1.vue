<template>
    <div class="card-through">
        <img class="pic" :src="data.pic" alt="">
        <div class="main">
            <div class="name"><span>{{data.name}}</span></div>
            <div class="desc">{{data.desc}}</div>
            <div class="handles">评论 分享</div>
            <div class="time">{{data.time}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    props:{
      data:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang="less">
    @import '../../assets/less/card/card_through.less';
</style>
