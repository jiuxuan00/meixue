<template>
    <div class="my-order">
        <base-header :data="header"></base-header>
        <!--//End-->

        <div class="tabs">
            <div class="tab" :class="{active:currentTab == index}" v-for="(item,index) in tabs"
                 :key="index"
                 @click="onSelectedTab(index)"><span>{{item.label}}</span>
            </div>
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
                <!--//ENd-->

                <div class="may-like">
                    <div class="title"><span>你可能喜欢</span></div>
                    <div class="list">
                        <card-recommend :data="item" v-for="(item,index) in products[currentTab]"
                                        :key="index"></card-recommend>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  import BaseHeader from "../../components/header/BaseHeader";
  import CardRecommend from "../../components/card/CardRecommend";


  export default {
    name: "Order",
    data() {
      return {
        header: {
          title: "我的订单"
        },
        currentTab: 0,
        tabs: [
          { label: "全部订单" },
          { label: "待付款" },
          { label: "待收货" },
          { label: "待评价" },
          { label: "退换/售后" }
        ],
        //新上单品
        products: {
          0: [
            {
              id: 1,
              title: "我是全部订单的数据",
              desc: "我是描述文字111",
              picUrl: "/static/pics/good/products1.jpg",
              type: "product",
              href: "/details/shop/1"
            },
            {
              id: 2,
              title: "我是全部订单的数据",
              desc: "我是描述文字111",
              picUrl: "/static/pics/good/products1.jpg",
              type: "product",
              href: "/details/shop/2"
            }
          ],
          1: [
            {
              id: 1,
              title: "我是待付款的数据",
              desc: "我是描述文字111",
              picUrl: "/static/pics/good/products1.jpg",
              type: "product",
              href: "/details/shop/1"
            }
          ],
          2: [
            {
              id: 1,
              title: "待收货的数据",
              desc: "我是描述文字111",
              picUrl: "/static/pics/good/products1.jpg",
              type: "product",
              href: "/details/shop/1"
            }
          ],
          3: [
            {
              id: 1,
              title: "待评价的数据",
              desc: "我是描述文字111",
              picUrl: "/static/pics/good/products1.jpg",
              type: "product",
              href: "/details/shop/1"
            }
          ],
          4: [
            {
              id: 1,
              title: "退货/售后的数据",
              desc: "我是描述文字111",
              picUrl: "/static/pics/good/products1.jpg",
              type: "product",
              href: "/details/shop/1"
            }
          ]
        }
      };
    },
    components: {
      BaseHeader,
      CardRecommend
    },
    beforeMount() {
      this.currentTab = this.$route.query.type;
    },
    mounted() {

    },
    methods: {
      onSelectedTab(index) {
        this.currentTab = index;
      }
    }
  };
</script>

<style lang="less">
    @import "./../../assets/less/my/order.less";
</style>
