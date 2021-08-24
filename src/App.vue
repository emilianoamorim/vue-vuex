<template>
  <div id="app">
    <HeaderContent />
    <MainContent />
  </div>
</template>

<script>
import MainContent from "./components/MainContent.vue";
import HeaderContent from "./components/HeaderContent.vue";

export default {
  name: "App",
  components: {
    MainContent,
    HeaderContent,
  },
};
</script>

<style>
#app {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
