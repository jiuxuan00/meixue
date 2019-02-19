<template>
    <div class="choice-detail">
        <div class="header-black">
            <span class="back" @click="onHandleBack"></span>
            <img class="avatar" :src="detailData.avatar" alt="">
            <div class="info">
                <p class="name">{{detailData.username}}</p>
                <p class="time">{{detailData.time}}</p>
            </div>
        </div>
        <!--//End-->

        <div class="content" style="background: #eee;" v-html="detailData.content"></div>
        <!--//End -->

        <div class="shop">
            <img class="pic" :src="detailData.shop.pic" alt="">
            <div class="info">
                <p class="name">{{detailData.shop.title}}</p>
                <p class="serial">编号 {{detailData.shop.serial}}</p>
            </div>
            <div class="link">立即购买</div>
        </div>
        <!--//End -->

        <div class="handles">
            <icon className="gray share"/>
            <icon className="gray comment" :count="detailData.comment_count"/>
            <icon className="gray like" :count="detailData.like_count"/>
        </div>
        <!--//End -->


    </div>
</template>

<script>
  import Icon from "../../components/icons/Icon";
  import Comment from "../../components/base/Comment";

  export default {
    name: "ChoiceDetail",
    data() {
      return {
        detailData: {
          avatar: "/static/images/default/avatar-pink@3x.png",
          username: "",
          time: "Type发表时间",
          comment_count: 1222,
          like_count: 2222,
          shop: {
            pic: "/static/images/default/default-thumb.png",
            title: "空气层美棉提花四件套空气层美棉提花四件套空气层美棉提花四件套空气层美棉提花四件套",
            serial: "2213"
          },
          content: "我是富文本颜色是为了区别下，有数据可以把样式去掉我是富文本颜色是为了区别下，有数据可以把样式去掉我是富文本颜色是为了区别下，有数据可以把样式去掉"
        }
      };
    },
    components: {
      Icon,
      Comment
    },
    mounted() {
      //获取用户名
      this.detailData.username = this.$route.query.username;
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
