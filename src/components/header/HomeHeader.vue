<template>
    <div class="home-tabs">
        <span class="item" v-for="(item,index) in navs" :key="index"
              :class="{'active': selectedIndex===index}"
              @click="onHanlder(index)">{{item.label}}</span>
    </div>
</template>

<script>
  export default {
    name: "home-header",
    data() {
      return {
        selectedIndex: 0,
        navs: [
          { label: "首页" },
          { label: "推荐" }
        ]
      };
    },
    mounted() {
      this.onHanlder(this.selectedIndex);
    },
    methods: {
      onHanlder(index) {
        this.selectedIndex = index;
        this.$emit("tabSelected", index);
      }
    }
  };
</script>

<style lang="less">
    @import "../../assets/less/header/home.less";
</style>
