<template>
    <div class="find-index">
        <tab :tabs="tabs"></tab>
    </div>
</template>

<script>
  import Tab from "./../../components/tab/Tab";
  import FindNews from "../../components/find/FindNews";
  import FindActivity from "./../../components/find/FindActivity";
  import findData from "../../../static/data/find/index.js";

  export default {
    computed: {
      tabs() {
        let tabData = findData;
        //处理tab精选
        tabData[0].map(item => item.href = "/details/news/" + item.id);
        tabData[1].map(item => item.href = "/details/news/" + item.id);
        tabData[2].map(item => item.href = "/details/news/" + item.id);
        tabData[3].map(item => item.href = "/details/activity/" + item.id);

        return [
          { label: "精选", component: FindNews, data: tabData[0] },
          { label: "大V", component: FindNews, data: tabData[1] },
          { label: "当下", component: FindNews, data: tabData[2] },
          { label: "活动", component: FindActivity, data: tabData[3] }
        ];
      }
    },
    components: {
      FindNews,
      Tab
    }
  };
</script>

<style lang="less">
    @import "./../../assets/less/pages/find.less";
</style>
