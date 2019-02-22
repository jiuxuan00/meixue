<template>
    <div class="good-header">
        <base-header>
            <div class="search" v-if="isSearch">
                <input class="ipt" @focus="onHanldeFocus" type="text" value="" placeholder="搜索">
                <div class="suggest" v-show="isSuggest">
                    <dl class="list" v-for="(item,index) in suggest" :key="index">
                        <dt>{{item.label}}</dt>
                        <dd>
                            <a class="link" v-for="(link,key) in item.data" :key="key" @click="onRedirect(link.id)">{{link.label}}</a>
                        </dd>
                    </dl>
                </div>
                <div class="mask" @click="onHanldeBlur" v-show="isSuggest"></div>
            </div>
            <div class="message"><span class="count">12</span></div>
            <slot></slot>
        </base-header>
    </div>
</template>

<script>
  import BaseHeader from "./BaseHeader";

  export default {
    name: "GoodHeader",
    props: {
      isSearch: {
        type: Boolean,
        default() {
          return true;
        }
      }
    },
    data() {
      return {
        isSuggest: false,
        suggest: [
          {
            label: "热门搜索",
            data: [
              { id: 1, label: "产品名称1" },
              { id: 2, label: "产品名称2" },
              { id: 3, label: "产品名称3" },
              { id: 4, label: "产品名称4" },
              { id: 5, label: "产品名称5" }
            ]
          },
          {
            label: "历史搜索",
            data: [
              { id: 1, label: "产品名称1" },
              { id: 2, label: "产品名称2" },
              { id: 3, label: "产品名称3" },
              { id: 4, label: "产品名称4" },
              { id: 5, label: "产品名称5" }
            ]
          }
        ]
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
      //跳转链接
      onRedirect(id) {
        this.$router.push({ path: `/good/detail/${id}` });
      }
    }
  };
</script>

<style lang="less">
    @import "./../../assets/less/good/header.less";
</style>
