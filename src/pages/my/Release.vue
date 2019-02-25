<template>
    <div class="my-release">
        <base-header :data="header"></base-header>
        <!--//End-->

        <div class="main">
            <textarea class="content" name="" id="" placeholder="我想说…."></textarea>
            <div class="item upload">
                <cube-upload action="//jsonplaceholder.typicode.com/photos/"
                             :simultaneous-uploads="1"
                             @files-added="filesAdded" />
            </div>


        </div>
        <!--//End-->

        <div class="publish">发布</div>

    </div>
</template>

<script>
  import BaseHeader from "../../components/header/BaseHeader";

  export default {
    name: "Release",
    data() {
      return {
        header: {
          search: false,
          title:'发布新动态'
        }
      };
    },
    components: {
      BaseHeader
    },
    methods: {
      filesAdded(files) {
        let hasIgnore = false
        const maxSize = 1 * 1024 * 1024 // 1M
        for (let k in files) {
          const file = files[k]
          if (file.size > maxSize) {
            file.ignore = true
            hasIgnore = true
          }
        }
        hasIgnore && this.$createToast({
          type: 'warn',
          time: 1000,
          txt: 'You selected >1M files'
        }).show()
      }
    }
  };
</script>

<style lang="less">
@import "./../../assets/less/my/release.less";
</style>
