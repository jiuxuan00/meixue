<template>
    <div class="find-index">
        <find-list :data="findData"/>
    </div>
</template>

<script>
  import FindList from "./../../components/find/FindList";
  import findData from "../../../static/data/find/index.js";

  export default {
    data() {
      return {
        findData
      };
    },
    components: {
      FindList
    }
  };
</script>

<style lang="less">
    .find-index {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

</style>
