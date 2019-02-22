<template>
    <div class="good-list">
        <base-header :data="header"></base-header>
        <!--//End-->

        <div class="product-list">
            <cube-scroll ref="scroll" :data="[]"
                         :options="options"
                         @pulling-down="onPullingDown"
                         @pulling-up="onPullingUp">
                <card-recommend :data="item" v-for="(item,index) in products" :key="index"></card-recommend>
            </cube-scroll>
        </div>
    </div>
</template>

<script>
  import BaseHeader from "../../components/header/BaseHeader";
  import CardRecommend from "../../components/card/CardRecommend";

  const DOWN = "down";
  const UP = "up";


  export default {
    name: "List",
    data() {
      return {
        header: {
          title: "日用单品",
          search: false,
          message: true,
          messageCount: 11
        },
        products: [
          {
            id: 1,
            title: "我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题11111111",
            desc: "我是描述文字111",
            picUrl: "/static/pics/good/products2.jpg",
            type: "product",
            href: "/details/shop/1"
          },
          {
            id: 2,
            title: "我是标题11111111",
            desc: "我是描述文字111",
            picUrl: "/static/pics/good/products2.jpg",
            type: "product",
            href: "/details/shop/2"
          },
          {
            id: 3,
            title: "我是标题11111111",
            desc: "我是描述文字111",
            picUrl: "/static/pics/good/products2.jpg",
            type: "product",
            href: "/details/shop/3"
          },
          {
            id: 4,
            title: "我是标题11111111",
            desc: "我是描述文字111",
            picUrl: "/static/pics/good/products2.jpg",
            type: "product",
            href: "/details/shop/4"
          },
          {
            id: 5,
            title: "我是标题11111111",
            desc: "我是描述文字111",
            picUrl: "/static/pics/good/products2.jpg",
            type: "product",
            href: "/details/shop/5"
          },
          {
            id: 6,
            title: "我是标题11111111",
            desc: "我是描述文字111",
            picUrl: "/static/pics/good/products2.jpg",
            type: "product",
            href: "/details/shop/6"
          },
          {
            id: 7,
            title: "我是标题11111111",
            desc: "我是描述文字111",
            picUrl: "/static/pics/good/products2.jpg",
            type: "product",
            href: "/details/shop/7"
          },
          {
            id: 8,
            title: "我是标题11111111",
            desc: "我是描述文字111",
            picUrl: "/static/pics/good/products2.jpg",
            type: "product",
            href: "/details/shop/8"
          }
        ]
      };
    },
    computed: {
      options() {
        return {
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
          click: true
        };
      }
    },
    components: {
      BaseHeader,
      CardRecommend
    },
    mounted() {
      console.log(this.$route);
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
    @import "../../assets/less/good/good_list.less";
</style>

