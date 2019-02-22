<template>
    <div class="icon" :class="className">
        <span class="num">{{count}}</span>
    </div>
</template>

<script>
  export default {
    props: ["className", "count"],
    methods: {}
  };
</script>

<style lang="less">
    @import '../../../assets/less/common/icon.less';
</style>
