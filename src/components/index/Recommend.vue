<template>
    <div class="tab-recommend">
        <cube-scroll ref="scroll" :data="recommend"
                     :options="options"
                     @pulling-down="onPullingDown"
                     @pulling-up="onPullingUp">
            <card-recommend :data="item" v-for="(item,index) in recommend" :key="index"></card-recommend>
        </cube-scroll>
    </div>
</template>

<script>
  import vScroll from "./../../components/base/Scroll";
  import CardRecommend from "./../../components/card/CardRecommend";

  //获取数据
  import dataList from './../../../static/data/home/recommend';

  const DOWN = "down";
  const UP = "up";
  export default {
    name: "recommend",
    data() {
      return {
        recommend: dataList.data,
        options: {
          scrollbar: {
            fade: true
          },
          pullDownRefresh: {
            threshold: 90,
            stop: 50,
            txt: "刷新成功"
          },
          pullUpLoad: {
            threshold: 0,
            txt: {
              more: "加载更多",
              noMore: "没有数据了"
            }
          },
          click: false
        }
      };
    },
    components: {
      vScroll,
      CardRecommend
    },
    methods:{
      onPullingDown() {
        this.loadMatch("down");
      },
      onPullingUp() {
        this.loadMatch("up");
      },
      loadMatch(type) {
        setTimeout(() => {
          if (type === DOWN) {
            console.log("down");
          } else if (type === UP) {
            console.log("up");
          }
          this.$refs.scroll.forceUpdate();
        }, 1000);
      }
    }
  };
</script>


<style lang="less">
    @import "../../assets/less/index/recommend.less";
</style>
