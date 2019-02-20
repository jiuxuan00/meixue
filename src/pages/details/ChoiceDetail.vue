<template>
    <div class="choice-detail">
        <div class="header-black">
            <span class="back" @click="onHandleBack"></span>
            <img class="avatar" :src="detail.avatar" alt="">
            <div class="info">
                <p class="name">{{detail.username}}</p>
                <p class="time">{{detail.time}}</p>
            </div>
        </div>
        <!--//End-->

        <div class="content" style="background: #eee;" v-html="detail.content"></div>
        <!--//End -->

        <div class="shop" v-if="detail.shop">
            <img class="pic" :src="detail.shop.pic" alt="">
            <div class="info">
                <p class="name">{{detail.shop.title}}</p>
                <p class="serial">编号 {{detail.shop.serial}}</p>
            </div>
            <div class="link">立即购买</div>
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
  import Icon from "../../components/icons/Icon";
  import Comment from "../../components/card/Comment";

  //数据
  import detailsData from "../../../static/data/find/details";


  export default {
    name: "ChoiceDetail",
    data() {
      return {
        detail: detailsData["type1"]
      };
    },
    components: {
      Icon,
      Comment
    },
    mounted() {
      //获取用户名
      this.detail.username = this.$route.query.username;
    },
    methods: {
      //返回上一页
      onHandleBack() {
        this.$router.go(-1);
      },
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
