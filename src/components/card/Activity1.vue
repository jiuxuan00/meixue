<template>
    <div class="card-through">
        <router-link tag="a" :to="{path:data.href}">
            <img class="pic" :src="data.pic" alt="">
        </router-link>
        <div class="main">
            <div class="name"><span>{{data.username}}</span></div>
            <div class="desc">{{data.desc}}</div>
            <div class="handles">
                <div class="con" v-for="(item,index) in icons" :key="index" @click="onHandleIcon(data, item.type)">
                    <icon :data="item"/>
                </div>
            </div>
            <div class="time">{{data.time}}</div>
        </div>
    </div>
</template>

<script>
  import Icon from "./../../components/icons/Icon";

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
          { className: "gray collection", count: 0, type: "collection" },
          { className: "gray view", count: 0, type: "view" }
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
          case "collection":
            alert("我是收藏" + '---' + data.name);
            break;
          case "view":
            alert("我是浏览" + '---' + data.name);
            break;
        }
      }
    }
  };
</script>

<style lang="less">
    @import '../../assets/less/card/card_through.less';
</style>
