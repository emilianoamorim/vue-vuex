<template>
  <div id="app">
    <HeaderContent />
    <MainContent />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    MainContent: () => import("./components/MainContent.vue"),
    HeaderContent: () => import("./components/HeaderContent.vue"),
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
