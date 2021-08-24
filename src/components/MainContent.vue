<template>
  <div class="main-content">
    <p>Main</p>
    <div class="components">
      <MainContentBoxOne />
      <MainContentBoxTwo />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MainContentBoxOne: () => import("./MainContentBoxOne.vue"),
    MainContentBoxTwo: () => import("./MainContentBoxTwo.vue"),
  },
};
</script>

<style scoped>
.main-content {
  margin: 10px 0;
  border: #c2c2c2 solid 1px;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
}
.main-content p {
  margin: 10px;
}
.components {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
