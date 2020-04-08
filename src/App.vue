<template>
  <div id="app">
    <html-facotry />
  </div>
</template>

<script>
import HtmlFacotry from "./components/html-factory/html-factory.vue";

export default {
  name: "App",
  components: {
    HtmlFacotry
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
