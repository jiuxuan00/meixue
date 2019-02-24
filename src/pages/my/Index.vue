<template>
    <div class="my-index">
        <div class="base-info">
            <img :src="info.avatar" alt="" class="avatar">
            <div class="main">
                <p class="username">{{info.username}}</p>
                <level :level="info.level"></level>
            </div>
            <router-link tag="a" to="/my/personal" class="more"></router-link>
        </div>
        <!--//End-->

        <div class="integral">
            <span class="score">我的积分:</span>
            <span class="text">您还没有积分</span>
            <span class="link">去逛逛</span>
        </div>
        <!--//End-->

        <div class="order">
            <div class="order-title">我的订单</div>
            <div class="items">
                <router-link to="/my/order?type=0" tag="div" class="item"><i></i><p>待付款</p></router-link>
                <router-link to="/my/order?type=1" tag="div" class="item"><i></i><p>待收货</p></router-link>
                <router-link to="/my/order?type=2" tag="div" class="item"><i></i><p>待评价</p></router-link>
                <router-link to="/my/order?type=3" tag="div" class="item"><i></i><p>售后/退款</p></router-link>
                <router-link to="/my/order?type=4" tag="div" class="item"><i></i><p>全部订单</p></router-link>
            </div>
        </div>
        <!--//ENd-->

        <div class="release">
            <div class="order-title">我的发布<a class="more" href="">查看全部</a></div>
            <div class="items">
                <div class="item active"><span class="txt">发布最新动态</span></div>
                <div class="item"><img src="/static/pics/my/release1.jpg" alt=""></div>
                <div class="item"><img src="/static/pics/my/release2.jpg" alt=""></div>
                <div class="item"><img src="/static/pics/my/release3.jpg" alt=""></div>
            </div>
        </div>
        <!--//ENd-->

        <div class="release">
            <div class="order-title">我的喜欢<a class="more" href="">查看全部</a></div>
            <div class="items">
                <div class="item"><img src="/static/pics/my/release1.jpg" alt=""></div>
                <div class="item"><img src="/static/pics/my/release2.jpg" alt=""></div>
                <div class="item"><img src="/static/pics/my/release3.jpg" alt=""></div>
                <div class="item"><img src="/static/pics/my/release1.jpg" alt=""></div>
            </div>
        </div>
        <!--//ENd-->

        <div class="links">
            <v-cell :data="link" v-for="(link,index) in links" :key="index"></v-cell>
        </div>


    </div>
</template>

<script>
  import Level from "./../../components/my/Level";
  import vCell from "./../../components/my/Cell";
  import Router from "../details/Index";

  export default {
    name: "home",
    data() {
      return {
        //用户信息
        info: {
          username: "旧轩",
          avatar: "/static/images/default/avatar-pink@3x.png",
          level: 97
        },
        //
        links: [
          { label: "积分中心", iconUrl: "/static/images/my/links-1@3x.png", href: "/my/积分中心" },
          { label: "优惠券", iconUrl: "/static/images/my/links-2@3x.png", href: "/my/优惠券" },
          { label: "地址管理", iconUrl: "/static/images/my/links-3@3x.png", href: "/my/地址管理" },
          { label: "客服咨询", iconUrl: "/static/images/my/links-4@3x.png", href: "/my/客服咨询" }
        ]
      };
    },
    components: {
      Router,
      Level,
      vCell
    }
  };
</script>

<style lang="less">
    @import "./../../assets/less/my/index.less";
</style>
