<template>
    <router-link tag="div" :to="{path:data.href}" class="cell" :class="{pl24:!data.iconUrl}">
        <span class="icon"><img :src="data.iconUrl" alt=""></span>
        <span>{{data.label}}</span>
        <span class="go">{{data.text}}</span>
    </router-link>
</template>

<script>
  export default {
    name: "CellList",
    props: {
      data: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  };
</script>

<style lang="less">
    @import "./../../assets/less/base/index.less";

    .cell {
        width: 100%;
        padding-left: 53px;
        line-height: 50px;
        border-bottom: 1px solid rgba(216, 216, 216, .3);
        float: left;
        position: relative;

        .icon {
            width: 24px;
            height: 24px;
            position: absolute;
            top: 50%;
            left: 23px;
            margin-top: -12px;
            img {
                width: 100%;
                float: left;
            }
        }

        .go {
            height: 24px;
            line-height: 24px;
            position: absolute;
            top: 50%;
            right: 15px;
            margin-top: -12px;
            font-size: 14px;
            color: @grayColor;
            &:after {
                content: '';
                .icon24('./../../images/my/links-more@3x.png');
                float: right;
                margin-left: 10px;
            }
        }

        &.pl24 {
            padding-left: 24px;
        }
    }
</style>
