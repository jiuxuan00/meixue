<template>
    <div class="my-message">
        <good-header :data="header"></good-header>
        <!--//End-->
        <div class="main">
            <div class="list" id="list">
                <ul class="ul" ref="scrollPics">
                    <li v-for="(item, index) in newsData" :key="index" class="item" :class="{active: item.type == 2}">
                        <img class="avatar" :src="item.avatar" alt="">
                        <div class="text">{{item.text}}</div>
                    </li>
                </ul>
            </div>

            <div class="send">
                <input type="text" class="ipt" placeholder="对话输入框...">

                <cube-upload
                        action="http://jsonplaceholder.typicode.com/photos/"
                        :simultaneous-uploads="1"
                        @files-added="filesAdded" />
            </div>

        </div>
    </div>
</template>

<script>
  import GoodHeader from "../../components/header/GoodHeader";

  export default {
    name: "Message",
    data() {
      return {
        header: {
          search: false,
          title: "消息"
        },
        newsData: [
          {
            type: 1,
            avatar: "/static/images/default/avatar_message@3x.png",
            text: "您好，我是美学共和的小M，请问有什么可以帮助到您？"
          },
          {
            type: 2,
            avatar: "/static/images/default/avatar_message@3x.png",
            text: "您好，我是XXXXXXXXX"
          },
          {
            type: 1,
            avatar: "/static/images/default/avatar_message@3x.png",
            text: "您好，我是美学共和的小M，请问有什么可以帮助到您？"
          },
          {
            type: 1,
            avatar: "/static/images/default/avatar_message@3x.png",
            text: "您好，我是美学共和的小M，请问有什么可以帮助到您？"
          },
          {
            type: 2,
            avatar: "/static/images/default/avatar_message@3x.png",
            text: "您好，我是XXXXXXXXX"
          },
          {
            type: 2,
            avatar: "/static/images/default/avatar_message@3x.png",
            text: "您好，我是XXXXXXXXX"
          },
          {
            type: 1,
            avatar: "/static/images/default/avatar_message@3x.png",
            text: "您好，我是美学共和的小M，请问有什么可以帮助到您？"
          },
          {
            type: 2,
            avatar: "/static/images/default/avatar_message@3x.png",
            text: "您好，我是XXXXXXXXX"
          },
          {
            type: 1,
            avatar: "/static/images/default/avatar_message@3x.png",
            text: "您好，我是美学共和的小M，请问有什么可以帮助到您？"
          }
        ]
      };
    },
    components: {
      GoodHeader
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
    @import "./../../assets/less/my/message.less";
</style>
