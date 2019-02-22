<template>
    <div class="card-list" :class="data.type">
        <router-link :to="{path:data.href}">
            <img class="pic" :src="data.picUrl" alt="">

            <!--资讯类-->
            <div class="main" v-if="data.type==='news'">
                <div class="title">{{data.title}}</div>
                <div class="icons">
                    <icon className="white like" :num="data.likeNum"></icon>
                    <icon className="white view" :num="data.viewNum"></icon>
                </div>
            </div>

            <!--产品类-->
            <template v-if="data.type==='product'">
                <div class="main">
                    <div class="title">{{data.title}}</div>
                    <div class="desc">{{data.desc}}</div>
                    <div class="price">
                        <span class="p1">¥ 2,899</span>
                        <span class="p2">¥ 3,899</span>
                    </div>
                </div>
                <div class="flag">
                    <span class="flag-opacity">精品推荐</span>
                    <span class="flag-pink">精品推荐</span>
                </div>
            </template>

        </router-link>
    </div>
</template>

<script>
  import Icon from "./../../components/icons/Icon";

  export default {
    name: "recommend",
    props: {
      data: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    components: {
      Icon
    }
  };
</script>

<style lang="less">
    @import "../../assets/less/home/recommend.less";
</style>
