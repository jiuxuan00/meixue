<template>
    <div class="footer" v-if="show">
        <router-link :to="item.href" tag="span" :class="item.className" class="item" v-for="(item,index) in tabs"
                     :key="index">
            <i class="icon"></i>
            <p class="text">{{item.label}}</p>
        </router-link>
    </div>
</template>

<script>

  export default {
    name: "LayoutFooter",
    data() {
      return {
        tabs: [
          { label: "美学", href: "/index", className: "home" },
          { label: "发现", href: "/find", className: "find" },
          { label: "好物", href: "/good", className: "good" },
          { label: "我的", href: "/my", className: "my" }
        ],
        show: true
      };
    },
    beforeMount() {
      this.show = this.$route.meta.footer ? true : false;
    },
    methods: {
      clickHandler(label) {
        console.log(label);
      }
    }
  };
</script>

<style lang="less">
    @import "./../assets/less/common/footer.less";
</style>
