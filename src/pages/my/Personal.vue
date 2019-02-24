<template>
    <div class="my-personal">
        <base-header :data="header"></base-header>
        <!--//End-->
        <div class="base">
            <img class="avatar" src="/static/images/default/avatar-pink@3x.png" alt="">
            <div class="info">
                <span class="name">旧轩</span>
                <level :level="12"></level>
            </div>
        </div>
        <!--//End-->

        <div class="links">
            <v-cell :data="link" v-for="(link,index) in links" :key="index"></v-cell>
        </div>
        <!--//End-->
    </div>
</template>

<script>
  import BaseHeader from "../../components/header/BaseHeader";
  import Level from "./../../components/my/Level";
  import vCell from "./../../components/my/Cell";

  export default {
    name: "Personal",
    data() {
      return {
        header: {
          title: "个人中心"
        },
        links: [
          { label: "头像", href: "/my/avatar" },
          { label: "帐号", href: "/my/accounts" },
          { label: "昵称", text: "旧轩", href: "/my/name" },
          { label: "手机号", text: "TEL1231231231", href: "/my/phone" },
          { label: "生日", text: "1999年12月1日", href: "/my/birthday" },
          { label: "修改登录密码", href: "/my/password" },
          { label: "修改支付密码", href: "/my/password" }
        ]
      };
    },
    components: {
      BaseHeader,
      Level,
      vCell
    }

  };
</script>

<style lang="less">
    @import "./../../assets/less/my/personal.less";
</style>
