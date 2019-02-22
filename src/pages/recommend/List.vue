<template>
    <div class="recommend-list">
        <base-header :data="header"></base-header>
        <div class="tabs">
            <cube-scroll
                    ref="scroll"
                    direction="horizontal"
                    class="horizontal">
                <ul class="list-wrapper">
                    <li v-for="item in tabs" class="list-item"
                        :class="{active:currentTab==item.channelId}"
                        @click="onHanldeSelected(item)">{{ item.label }}
                    </li>
                </ul>
            </cube-scroll>
        </div>

        <div class="main">
            <cube-scroll ref="scroll" :data="[]"
                         :options="options"
                         @pulling-down="onPullingDown"
                         @pulling-up="onPullingUp">
                <card-activity :data="item" v-for="(item,index) in items" :key="index">
                    <div slot="icons" class="handles">
                        <icon className="white like" :count="item.like_count"/>
                        <icon className="white view" :count="item.view_count"/>
                    </div>
                </card-activity>
            </cube-scroll>
        </div>
    </div>
</template>

<script>
  import BaseHeader from "../../components/header/BaseHeader";
  import CardActivity from "./../../components/card/CardActiviryMask";
  import Icon from "./../../components/base/icons/Icon";

  const DOWN = "down";
  const UP = "up";

  export default {
    name: "RecommendList",
    data() {
      return {
        header: {
          message: true,
          search: true
        },
        currentTab: 1,
        tabs: [
          { label: "推荐1", channelId: 1 },
          { label: "推荐2", channelId: 2 },
          { label: "推荐3", channelId: 3 },
          { label: "推荐4", channelId: 4 },
          { label: "推荐5", channelId: 5 },
          { label: "推荐6", channelId: 6 },
          { label: "推荐7", channelId: 7 },
          { label: "推荐8", channelId: 8 },
          { label: "推荐9", channelId: 9 },
          { label: "推荐10", channelId: 10 },
          { label: "推荐11", channelId: 11 },
          { label: "推荐12", channelId: 12 }
        ],
        items: [
          {
            picUrl: "/static/pics/index/beautiful.jpg",
            title: "我是标题文字啊啊啊啊啊",
            subTitle: "我是副标题文字啊大大多所",
            like_count: 111,
            view_count: 2222
          },
          {
            picUrl: "/static/pics/index/beautiful.jpg",
            title: "我是标题文字啊啊啊啊啊",
            subTitle: "我是副标题文字啊大大多所",
            like_count: 111,
            view_count: 2222
          },
          {
            picUrl: "/static/pics/index/beautiful.jpg",
            title: "我是标题文字啊啊啊啊啊",
            subTitle: "我是副标题文字啊大大多所",
            like_count: 111,
            view_count: 2222
          },
          {
            picUrl: "/static/pics/index/beautiful.jpg",
            title: "我是标题文字啊啊啊啊啊",
            subTitle: "我是副标题文字啊大大多所",
            like_count: 111,
            view_count: 2222
          },
          {
            picUrl: "/static/pics/index/beautiful.jpg",
            title: "我是标题文字啊啊啊啊啊",
            subTitle: "我是副标题文字啊大大多所",
            like_count: 111,
            view_count: 2222
          },
          {
            picUrl: "/static/pics/index/beautiful.jpg",
            title: "我是标题文字啊啊啊啊啊",
            subTitle: "我是副标题文字啊大大多所",
            like_count: 111,
            view_count: 2222
          }
        ]
      };
    },
    computed: {
      options() {
        return {
          scrollbar: { fade: true },
          pullDownRefresh: { threshold: 90, stop: 50, txt: "刷新成功" },
          pullUpLoad: { threshold: 0, txt: { more: "加载更多", noMore: "没有数据了" } },
          click: false
        };
      }
    },
    components: {
      CardActivity,
      BaseHeader,
      Icon
    },
    methods: {
      //tab导航
      onHanldeSelected(data) {
        this.currentTab = data.channelId;
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
    @import "./../../assets/less/pages/recommend.less";
</style>
