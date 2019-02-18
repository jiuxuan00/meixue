<template>
    <div class="tab-home">
        <v-scroll>
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
        </v-scroll>
    </div>
</template>

<script>
  import vScroll from "../../components/base/Scroll";
  import FocusDefault from "../../components/focus/FocusDefault";
  import BlockSection from "../../components/home/BlockSection";
  import CardFull from "../../components/card/Full";

  //模拟数据
  import dataList from "./../../../static/data/home/index";

  export default {
    name: "Home",
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
          data: dataList[2]
        }
      };
    },
    components: {
      FocusDefault,
      BlockSection,
      CardFull,
      vScroll
    },
    methods: {
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
