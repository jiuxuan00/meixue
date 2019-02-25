<template>
    <div class="my-release">
        <base-header :data="header"></base-header>
        <!--//End-->

        <div class="item" v-for="(item,index) in result" :key="index">
            <input class="ipt" v-model="item.title" type="text" placeholder="添加标题...">
            <div class="content">
                <cube-upload
                        action="//jsonplaceholder.typicode.com/photos/"
                        :simultaneous-uploads="1"
                        @files-added="filesAdded"/>
                <!--//End-->
                <textarea class="text" v-model="item.content" name="" id="" placeholder="我想说…."></textarea>
                <i class="icon-edit"></i>
            </div>
        </div>
        <!--//End-->

        <div class="add">添加标识单品</div>
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
          title: "发布新动态"
        },
        result: [
          { title: "", picUrl: "", content: "" },
          { title: "", picUrl: "", content: "" },
        ]
      };
    },
    components: {
      BaseHeader
    },
    methods: {
      filesAdded(files) {
        console.log(files);
      }
    }
  };
</script>

<style lang="less">
    @import "./../../assets/less/my/release.less";
</style>
