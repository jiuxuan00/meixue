<template>
    <div class="card-through">
        <router-link tag="a" :to="{path:data.href}">
            <img class="pic" :src="data.pic" alt="">
        </router-link>
        <div class="main">
            <div class="name">{{data.title}}</div>
            <div class="desc">{{data.desc}}</div>
            <div class="handles">
                <icon className="gray collection" :count="data.collection_count"/>
                <icon className="gray view" :count="data.view_count"/>
            </div>
            <div class="time">{{data.time}}</div>
        </div>
    </div>
</template>

<script>
  import Icon from "../base/icons/Icon";

  export default {
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
