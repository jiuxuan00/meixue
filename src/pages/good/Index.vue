<template>
    <div class="good">
        <good-header></good-header>
        <!--//End-->

        <div class="sidebar">
            <div class="item" v-for="(item,index) in tabs" :key="index"
                 @click="onSelectedTab(item.id)"
                 :class="{active:currentTabId == item.id}">{{item.label}}
            </div>
        </div>
        <!--//End sidebar-->

        <div class="container">
            <v-scroll>
                <focus-default class="focus" :data="focus"></focus-default>
                <!--//End-->
                <div class="recommend">
                    <div class="title">推荐专区</div>
                    <ul class="items">
                        <li class="item" v-for="(item,index) in recommend" :key="index">
                            <img class="pic" :src="item.picUrl" alt="">
                            <p class="txt">{{item.title}}</p>
                        </li>
                    </ul>
                </div>
                <!--//End-->

                <div class="products">
                    <div class="title">新上单品</div>
                    <card-recommend :data="item" v-for="(item,index) in products" :key="index"></card-recommend>
                </div>
                <!--//End-->
            </v-scroll>
        </div>
        <!--//End sidebar-->

    </div>
</template>

<script>
  import GoodHeader from "../../components/header/GoodHeader";
  import vScroll from "../../components/base/Scroll";
  import FocusDefault from "../../components/focus/FocusDefault";
  import CardRecommend from "../../components/card/CardRecommend";

  export default {
    name: "GoodIndex",
    data() {
      return {
        currentTabId: 0,
        //左侧导航
        tabs: [
          { label: "分类专区1", id: 1 },
          { label: "分类专区2", id: 2 },
          { label: "分类专区3", id: 3 },
          { label: "分类专区4", id: 4 },
          { label: "分类专区5", id: 5 },
          { label: "分类专区5", id: 6 },
          { label: "分类专区6", id: 7 },
          { label: "分类专区7", id: 8 },
          { label: "分类专区8", id: 9 },
          { label: "分类专区9", id: 10 },
          { label: "分类专区10", id: 11 },
          { label: "分类专区11", id: 12 },
          { label: "分类专区11", id: 13 },
          { label: "分类专区11", id: 14 }
        ],
        //轮播图
        focus: [
          { picUrl: "/static/pics/home/focus1.jpg", href: "" },
          { picUrl: "/static/pics/home/focus1.jpg", href: "" },
          { picUrl: "/static/pics/home/focus1.jpg", href: "" },
          { picUrl: "/static/pics/home/focus1.jpg", href: "" }
        ],
        //推荐专区
        recommend: [
          { picUrl: "/static/pics/good/recommend1.jpg", title: "生活套装1" },
          { picUrl: "/static/pics/good/recommend1.jpg", title: "生活套装2" },
          { picUrl: "/static/pics/good/recommend1.jpg", title: "生活套装3" },
          { picUrl: "/static/pics/good/recommend1.jpg", title: "生活套装4" },
          { picUrl: "/static/pics/good/recommend1.jpg", title: "生活套装5" },
          { picUrl: "/static/pics/good/recommend1.jpg", title: "生活套装6" }
        ],
        //新上单品
        products: [
          {
            id: 1,
            title: "我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题11111111",
            desc: "我是描述文字111",
            picUrl: "/static/pics/good/products1.jpg",
            type: "product",
            href: ""
          },
          {
            id: 2,
            title: "我是标题11111111",
            desc: "我是描述文字111",
            picUrl: "/static/pics/good/products1.jpg",
            type: "product"
          },
          {
            title: "我是标题11111111",
            desc: "我是描述文字111",
            picUrl: "/static/pics/good/products1.jpg",
            type: "product"
          },
          {
            title: "我是标题11111111",
            desc: "我是描述文字111",
            picUrl: "/static/pics/good/products1.jpg",
            type: "product"
          }
        ]
      };
    },
    components: {
      vScroll,
      FocusDefault,
      CardRecommend,
      GoodHeader
    },
    watch: {
      $route(to, from) {
        this._getIdByUrl();
      }
    },
    beforeMount() {
      this._getIdByUrl();
    },
    mounted() {
    },
    methods: {
      _getIdByUrl() {
        if (!this.$route.query.id) {
          this.currentTabId = 1;
        } else {
          this.currentTabId = this.$route.query.id;
        }
      },
      onSelectedTab(id) {
        this.$router.push({ path: "/good", query: { categoryId: id } });
      }
    }
  };
</script>

<style lang="less">
    @import "../../assets/less/good/good.less";
</style>
