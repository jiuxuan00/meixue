<template>
    <div class="choice-detail">
        <div class="header-black">
            <img class="avatar" src="../../../static/images/default/avatar-pink@3x.png" alt="">
            <div class="info">
                <p class="name">Type用户ID</p>
                <p class="time">Type发表时间</p>
            </div>
        </div>
        <!--//End-->

        <div class="content" style="background: #eee;">我是富文本颜色是为了区别下，有数据可以把样式去掉</div>
        <!--//End -->

        <div class="shop">
            <img class="pic" src="../../../static/images/default/default-thumb.png" alt="">
            <div class="info">
                <p class="name">空气层美棉提花四件套空气层美棉提花四件套空气层美棉提花四件套空气层美棉提花四件套</p>
                <p class="serial">编号 2213</p>
            </div>
            <div class="link">立即购买</div>
        </div>
        <!--//End -->

        <div class="handles">
            <div v-for="(icon,index) in icons"
                 :key="index"
                 :icon="icon"
                 @click="onHandleIcon(icon.className, data.id)">
                <icon :icon="icon"/>
            </div>
        </div>

    </div>
</template>

<script>
  import Icon from "../../components/icons/Icon";

  export default {
    name: "ChoiceDetail",
    data() {
      return {};
    },
    components: {
      Icon
    },
    methods: {}
  };
</script>

<style lang="less">
    @import "./../../assets/less/details/choice.less";
</style>
