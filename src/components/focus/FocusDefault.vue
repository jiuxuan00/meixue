<template>
    <cube-slide ref="slide" :data="focus" @change="changePage" :auto-play="autoPlay" class="focus-default">
        <cube-slide-item v-for="(item, index) in focus" :key="index" @click.native="clickHandler(item, index)">
            <router-link tag="a" to="item.href" class="cube-slide-item-img">
                <img :src="item.picUrl">
            </router-link>
        </cube-slide-item>
    </cube-slide>
</template>
<script>
  export default {
    name: "banner",
    props: {
      data: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        autoPlay: false
      };
    },
    computed: {
      focus() {
        return this.data;
      }
    },
    methods: {
      changePage(current) {
        console.log("当前轮播图序号为:" + current);
      },
      clickHandler(item, index) {
        console.log(item, index);
      }
    }
  };
</script>
<style lang="less">
    @import "../../assets/less/common/focus.less";
</style>
