<template>
    <div class="card-comment">
        <div class="title">全部评论</div>
        <div class="list">
            <div class="item" v-for="(item,index) in data" :key="index">
                <img :src="item.picUrl" alt="" class="avatar">
                <div class="name">{{item.name}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="time">{{item.time}}</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Comment",
    props: {
      data: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  };
</script>

<style lang="less">
    @import "../../assets/less/common/comment.less";
</style>
