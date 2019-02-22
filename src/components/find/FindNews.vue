<template>
    <cube-scroll ref="scroll" :data="matchList"
                 :options="options"
                 @pulling-down="onPullingDown"
                 @pulling-up="onPullingUp">
        <card-news :data="item" v-for="(item, index) in matchList" :key="index"></card-news>
    </cube-scroll>
</template>

<script>
  import CardNews from "../card/CardNews";

  const DOWN = "down";
  const UP = "up";

  export default {
    name: "find-index",
    props: ["data"],
    data() {
      return {
        currentPage: 1,
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
      CardNews
    },
    created() {
    },
    mounted() {
    },
    methods: {
      clickItem(item) {
        // console.log(`click: ${item.hostTeamName} vs ${item.guestTeamName}`)
      },
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
