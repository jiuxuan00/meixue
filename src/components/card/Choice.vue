<template>
    <div class="card-average">
        <div class="head"><img :src="data.avatar" alt=""><span>{{data.username}}</span></div>
        <div class="item">
            <router-link tag="a" :to="{path:data.href}">
                <img :src="data.pic" alt="">
            </router-link>
            <div class="main">
                <div class="title">{{data.title}}</div>
                <div class="handles">
                    <div class="con" v-for="(item,index) in icons" :key="index" @click="onHandleIcon(data, item.type)">
                        <icon :data="item"/>
                    </div>
                </div>
            </div>
        </div>
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
          { className: "gray share", type: "share" },
          { className: "gray comment", count: 0, type: "comment" },
          { className: "gray like", count: 0, type: "like" }
        ]
      };
    },
    components: {
      Icon
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
          case "share":
            alert("我是分享" + "---" + data.title);
            break;
          case "comment":
            alert("我是评论" + "---" + data.title);
            break;
          case "like":
            alert("我是喜欢" + "---" + data.title);
            break;
        }
      }
    }
  };
</script>

<style lang="less">
    @import '../../assets/less/card/card_average.less';
</style>
