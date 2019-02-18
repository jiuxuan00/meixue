<template>
    <div class="home">
        <header-home @tabSelected="tabSelected"></header-home>
        <!--//End tab导航-->
        <focus-default :data="focus"></focus-default>
        <!--//End 轮播图-->
        <block-section class="home-section" :title="upgrade.title" :list="upgrade.data">
            <div slot="banner" class="single">
                <span class="txt">软装升级固定语段，此处编辑</span>
                <img class="pic" src="../../../static/images/home/upgrade-banner@3x.png" alt="">
            </div>
        </block-section>
        <!--//End 软件升级-->
        <block-section class="home-section" :title="life.title" :list="life.data">
            <div slot="banner" class="tab">
                <ul>
                    <li v-for="(item,index) in life.tabs" :key="index" :class="{active:life.currentIndex===index}"
                        @click="onSelectedLeft(index)">
                        <div class="text"><span class="zh">{{item.zh}}</span><span class="en">{{item.en}}</span></div>
                        <img :src="item.picUrl" alt="">
                    </li>
                </ul>
            </div>
        </block-section>
        <!--//End 品质生活-->
        <block-section class="home-section" :title="beautiful.title">
            <div class="beautiful" slot="banner">
                <card-full :data="item" v-for="(item,index) in beautiful.data" :key="index"></card-full>
            </div>
        </block-section>
        <!--//End 美在当下-->

    </div>
</template>

<script>
  import HeaderHome from "../../components/header/HomeHeader";
  import pageHome from "../../components/home/Home";


  import FocusDefault from "../../components/focus/FocusDefault";
  import BlockSection from "../../components/home/BlockSection";
  import CardFull from "../../components/card/Full";

  //模拟数据
  import dataList from "./../../../static/data/home/index";

  export default {
    name: "Index",
    data() {
      return {
        focus: dataList["focus"],
        upgrade: {
          title: { text: "- 软装升级 -", className: "upgrade" },
          data: dataList[0]
        },
        life: {
          title: { text: "- 品质生活 -", className: "life" },
          currentIndex: 0,
          tabs: [
            { zh: "乐享起居", en: "Enioy living", picUrl: "../../../static/images/home/life-left.png" },
            { zh: "美学精选", en: "High qualite life", picUrl: "../../../static/images/home/life-right.png" }
          ],
          data: dataList[1][0]
        },
        beautiful: {
          title: { text: "- 美在当下 -", className: "beautiful" },
          data: [
            {
              picUrl: "./../../../static/pics/home/beautiful.jpg",
              title: "我是标题文字啊啊啊啊啊",
              subTitle: "我是副标题文字啊大大多所",
              likeNum: 111,
              viewNum: 2222
            }
          ]
        }
      };
    },
    components: {
      HeaderHome,
      pageHome,

      FocusDefault,
      BlockSection,
      CardFull
    },
    methods: {
      //顶部tab
      tabSelected(tabIndex) {
        console.log("tabIndex->", tabIndex);
      },
      //  品质生活tab
      onSelectedLeft(index) {
        this.life.currentIndex = index;
        this.life.data = dataList[1][index];
        console.log("品质生活tab索引", index);
      }
    }
  };
</script>

<style lang="less">
    @import "../../assets/less/home/home.less";
</style>
