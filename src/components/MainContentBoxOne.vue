<template>
  <div class="box-one">
    <strong>Skills</strong>
    <ul>
      <li v-for="skill in skills" :key="skill.skill">{{ skill.skill }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    skills() {
      return this.$store.getters.skills;
    },
  },
};
</script>

<style scoped>
.box-one {
  width: 49%;
  background: green;
  border-radius: 4px;
  color: white;
  padding: 10px;
  box-sizing: border-box;
}
</style>
