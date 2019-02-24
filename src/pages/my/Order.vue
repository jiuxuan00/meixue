<template>
    <div class="my-order">
        <base-header :data="header"></base-header>
        <!--//End-->

        <div class="tabs">
            <div class="tab active"><span>全部订单</span></div>
            <div class="tab"><span>待付款</span></div>
            <div class="tab"><span>待收货</span></div>
            <div class="tab"><span>待评价</span></div>
            <div class="tab"><span>退换/售后</span></div>
        </div>

        <div class="container">
            <div class="content">
                <div class="empty">
                    <img class="icon" src="/static/images/my/icon-cart@3x.png" alt="">
                    <div class="text">
                        <p class="t1">您还没有相关的订单</p>
                        <p class="t2">可以去看看有哪些想买的</p>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
  import BaseHeader from "../../components/header/BaseHeader";

  export default {
    name: "Order",
    data(){
      return {
        header:{
          title:'我的订单'
        }
      }
    },
    components:{
      BaseHeader
    },
    mounted() {
      console.log(this.$route.query.type)
    }
  };
</script>

<style lang="less">
@import "./../../assets/less/my/order.less";
</style>
