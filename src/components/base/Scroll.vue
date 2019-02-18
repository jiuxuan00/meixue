<template>
    <cube-scroll ref="scroll" :options="options">
        <slot></slot>
    </cube-scroll>
</template>

<script>
  export default {
    name: "Scroll",
    props: {
      options: {
        click: {
          type: Boolean,
          default() {
            return true;
          }
        },
        scrollbar: {
          type: Boolean,
          default() {
            return true;
          }
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.$nextTick(() => {
          //重置内容高度
          this.$refs.scroll.refresh();
          //重置滑动的高度
          this.$refs.scroll.scrollTo(0, 0);
        });
      }, 200);
    }

  };
</script>

<style lang="less">

</style>
