<template>
    <div class="level">
        <span>Lv.{{level}}</span>
    </div>
</template>

<script>
  export default {
    props: {
      level: {
        type: Number,
        default() {
          return 0;
        }
      }
    },
    name: "Level"
  };
</script>

<style lang="less">
@import "./../../assets/less/base/index.less";
.level {
    width: 35px;
    height: 13px;
    .linearGradient(#BA0000, #F76E1D);
    .border-radius(2px);
    text-align: center;
    line-height: 13px;
    margin-top: 7px;
    display: inline-block;

    span {
        color: @white;
        font-size: 9px;
    }
}
</style>
