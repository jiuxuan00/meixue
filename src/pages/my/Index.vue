<template>
    <div class="my-index">
        <div class="base-info">
            <img :src="info.avatar" alt="" class="avatar">
            <div class="main">
                <p class="username">{{info.username}}</p>
                <div class="level"><span>Lv.{{info.level}}</span></div>
            </div>
            <router-link tag="a" to="/my" class="more"></router-link>
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
                <div class="item"><i></i>
                    <p>待付款</p></div>
                <div class="item"><i></i>
                    <p>待收货</p></div>
                <div class="item"><i></i>
                    <p>待评价</p></div>
                <div class="item"><i></i>
                    <p>售后/退款</p></div>
                <div class="item"><i></i>
                    <p>全部订单</p></div>
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
            <div class="link"><span>积分中心</span></div>
            <div class="link"><span>优惠券</span></div>
            <div class="link"><span>地址管理</span></div>
            <div class="link"><span>客服咨询</span></div>
        </div>



    </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        info: {
          username: "旧轩",
          avatar: "/static/images/default/avatar-pink@3x.png",
          level: 10
        },


        contentList: [
          { name: "我的活动", path: "/personal/activity" },
          { name: "浏览历史", path: "/personal/history" },
          { name: "积分中心", path: "/personal/integral" },
          { name: "优惠券", path: "/personal/coupon" },
          { name: "地址管理", path: "/personal/address" },
          { name: "客服咨询", path: "/personal/service" }
        ]
      };
    }
  };
</script>

<style lang="less">
    @import "./../../assets/less/my/index.less";
</style>
