<template>
    <div class="footer">
        <router-link :to="item.href" tag="span" :class="item.className" class="item" v-for="(item,index) in tabs" :key="index">
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
        selected: "美学",
        tabs: [{
          label: "美学",
          href: "/index",
          className:'home'
        }, {
          label: "发现",
          href: "/find",
          className:'find'
        }, {
          label: "好物",
          href: "/good",
          className:'good'
        }, {
          label: "我的",
          href: "/my",
          className:'my'
        }]
      };
    },
    methods: {
      clickHandler(label) {
        console.log(label);
      }
    },
    mounted() {
      const name = window.location.href.split("/#")[1];
      switch (name) {
        case "/index":
          this.selectedLabelSlots = "美学";
          break;
        case "/index/find":
          this.selectedLabelSlots = "发现";
          break;
        case "/index/good":
          this.selectedLabelSlots = "好物";
          break;
        case "/index/my":
          this.selectedLabelSlots = "我的";
          break;
      }

    }
  };
</script>

<style lang="less">
    @import "./../assets/less/common/footer.less";
</style>
