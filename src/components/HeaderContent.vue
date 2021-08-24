<template>
  <div class="header-content">Olá {{ user.name }}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>

<style scoped>
.header-content {
  margin: 10px 0;
  padding: 10px;
  border: #c2c2c2 solid 1px;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
}
</style>
