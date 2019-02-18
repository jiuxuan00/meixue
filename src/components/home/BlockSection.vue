<template>
    <div>
        <div class="title">
            <span class="text">{{title.text}}</span>
            <span class="icon" :class="title.className"></span>
        </div>
        <div class="banner">
            <slot name="banner"></slot>
        </div>
        <div class="list" v-if="list.length">
            <cube-scroll ref="scroll" direction="horizontal" class="horizontal">
                <ul class="list-wrapper">
                    <li v-for="(item, index) in list" class="item">
                        <img :src="item.picUrl" class="pic" alt="">
                        <div class="info">{{item.title}}</div>
                        <div class="icons">
                            <icon className="white like" :num="item.likeNum"></icon>
                            <icon className="white view" :num="item.viewNum"></icon>
                        </div>
                    </li>
                </ul>
                <div class="more"><span class="text">更多</span></div>
            </cube-scroll>
        </div>
    </div>
</template>

<script>
  import Icon from "./../icons/Icon";

  export default {
    name: "block-section",
    props: {
      title: {
        type: Object,
        default() {
          return {};
        }
      },
      list: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      Icon
    }
  };
</script>

<style lang="less">
    @import "./../../assets/less/home/section.less";
</style>
