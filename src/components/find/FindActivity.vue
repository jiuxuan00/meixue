<template>
    <cube-scroll ref="scroll" :data="matchList" :options="options" @pulling-down="onPullingDown"
                 @pulling-up="onPullingUp">
        <card-activity :data="item" v-for="(item, index) in matchList" :key="index"></card-activity>
    </cube-scroll>
</template>

<script>
  import CardActivity from "../card/Activity1";

  const DOWN = "down";
  const UP = "up";

  export default {
    name: "find-index",
    props: ["data"],
    data() {
      return {
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
    computed: {
      matchList() {
        return this.data;
      }
    },
    components: {
      CardActivity
    },
    created() {
    },
    mounted() {
    },
    methods: {
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
    .card-average:nth-child(2n) {
        margin-right: 0;
    }
</style>
