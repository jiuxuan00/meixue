<template>
    <div class="choice-detail">
        <good-header :data="header">
            <img class="avatar" :src="detail.avatar" alt="">
            <div class="info">
                <p class="name">{{detail.username}}</p>
                <p class="time">{{detail.time}}</p>
            </div>
        </good-header>
        <!--//End-->

        <div class="content" style="background: #eee;" v-html="detail.content"></div>
        <!--//End -->

        <div class="shop" v-if="detail.shop">
            <img class="pic" :src="detail.shop.pic" alt="">
            <div class="info">
                <p class="name">{{detail.shop.title}}</p>
                <p class="serial">编号 {{detail.shop.serial}}</p>
            </div>
            <router-link tag="div" :to="{path:detail.shop.href}" class="link">立即购买</router-link>
        </div>
        <!--//End -->

        <div class="handles">
            <icon className="gray share"/>
            <icon className="gray comment" :count="detail.comment_count"/>
            <icon className="gray like" :count="detail.like_count"/>
        </div>
        <!--//End -->

        <comment :data="detail.comment"></comment>
    </div>
</template>

<script>
  import GoodHeader from "../../components/header/GoodHeader";
  import Icon from "../../components/base/icons/Icon";
  import Comment from "../../components/card/Comment";

  //数据
  import detailsData from "../../../static/data/find/details";


  export default {
    name: "ChoiceDetail",
    data() {
      return {
        header: {
          search: false
        },
        detail: detailsData["type1"]
      };
    },
    components: {
      Icon,
      Comment,
      GoodHeader
    },
    mounted() {
    },
    methods: {
      /**
       * 事件分享、评论、喜欢
       * @param data 当前数据
       * @param type 当前点击的类型
       */
      onHandleIcon(data, type) {
        console.log(type);
        switch (type) {
          case "collection":
            alert("我是收藏" + "---" + data.name);
            break;
          case "view":
            alert("我是浏览" + "---" + data.name);
            break;
        }
      }
    }
  };
</script>

<style lang="less">
    @import "./../../assets/less/details/choice.less";
</style>
