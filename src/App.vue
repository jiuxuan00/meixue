<template>
    <div id="app">
        <keep-alive>
            <router-view/>
        </keep-alive>
        <v-footer></v-footer>
    </div>
</template>

<script>
  import vFooter from "./components/Footer";

  export default {
    name: "app",
    components: {
      vFooter
    }
  };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
