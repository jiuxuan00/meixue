<template>
    <div class="card-average">
        <div class="head"><img :src="data.avatar" alt=""><span>{{data.username}}</span></div>
        <!--<div>-->
        <router-link tag="div" class="item" :to="{path:data.href}">
            <img :src="data.pic" alt="">
            <div class="main">
                <div class="title">{{data.title}}</div>
                <div class="handles">
                    <div v-for="(icon,index) in icons" :key="index" :icon="icon"
                         @click="onHandleIcon(icon.className, data.id)">
                        <icon :icon="icon"/>
                    </div>
                </div>
            </div>
        </router-link>
        <!--</div>-->
    </div>
</template>

<script>
  import Icon from "./../icons/Icon";

  export default {
    props: {
      data: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        icons: [
          { className: "share" },
          { className: "comment", num: 0 },
          { className: "zan", num: 0 }
        ]
      };
    },
    components: {
      Icon
    },
    methods: {
      onHandleIcon(name, id) {
        switch (name) {
          case "share":
            alert("我是分享" + id);
            break;
          case "comment":
            alert("我是评论");
            break;
          case "zan":
            alert("我是点赞");
            break;
          default:
            break;
        }
      }
    }
  };
</script>

<style lang="less">
    @import '../../assets/less/card/card_average.less';
</style>
