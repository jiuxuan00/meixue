<template>
    <div class="good-header">
        <base-header>
            <div class="search" v-if="data.search">
                <input class="ipt" @focus="onHanldeFocus" type="text" value="" placeholder="搜索">
                <div class="suggest" v-show="isSuggest">
                    <dl class="list" v-for="(item,index) in data.keywords" :key="index">
                        <dt>{{item.label}}</dt>
                        <dd>
                            <a class="link" v-for="(link,key) in item.data" :key="key" @click="onRedirectDetail(link.href)">{{link.label}}</a>
                        </dd>
                    </dl>
                </div>
                <div class="mask" @click="onHanldeBlur" v-show="isSuggest"></div>
            </div>
            <div class="message" v-if="data.message" @click="onRedirectMessage">
                <span class="count">{{data.messageCount ?data.messageCount:0}}</span>
            </div>
            <div class="title" v-if="data.title">{{data.title}}</div>
            <slot></slot>
        </base-header>
    </div>
</template>

<script>
  import BaseHeader from "./BaseHeader";

  export default {
    name: "GoodHeader",
    props: {
      data: {
        type: Object,
        default() {
          return {
            search: true, //搜索框
            message: true, //消息图标
            title: ""
          };
        },
        keywords: []
      }
    },
    data() {
      return {
        isSuggest: false
      };
    },
    components: {
      BaseHeader
    },
    watch: {
      $route(to, from) {
        this.isSuggest = false;
      }
    },
    methods: {
      //获取焦点
      onHanldeFocus() {
        this.isSuggest = true;
      },
      //失去焦点
      onHanldeBlur() {
        this.isSuggest = false;
      },
      //跳转至关键词详情链接
      onRedirectDetail(url) {
        this.$router.push({ path: url });
      },
      //
      onRedirectMessage(){
        this.$router.push({ path: '/my/message' });
      }
    }
  };
</script>

<style lang="less">
    @import "./../../assets/less/good/header.less";
</style>
