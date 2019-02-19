<template>
    <div class="find-index">
        <tab :tabs="tabs"></tab>
    </div>
</template>

<script>
  import Tab from "./../../components/tab/Tab";
  import FindAverage from "../../components/find/FindChoice";
  import FindActivity from "./../../components/find/FindActivity";
  import findData from "../../../static/data/find/index.js";

  export default {
    data() {
      return {
        tabs: [
          { label: "精选", component: FindAverage, data: findData[0] },
          { label: "大V", component: FindAverage, data: findData[1] },
          { label: "当下", component: FindAverage, data: findData[2] },
          { label: "活动", component: FindActivity, data: findData[3] }
        ]
      };
    },
    components: {
      FindAverage,
      Tab
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
