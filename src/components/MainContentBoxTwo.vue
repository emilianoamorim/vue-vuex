<template>
  <div class="box-two">
    <div>
      <input type="text" v-model="name" placeholder="Atualizar nome" />
    </div>
    <div>
      <button type="button" @click="[saveUserName()]">Salvar</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    name: "",
  }),
  methods: {
    saveUserName() {
      // Invalido
      // this.user.name = this.name;
      // Valido

      this.MUTATION_USER({
        name: this.name,
      });

      this.name = "";
    },
    ...mapMutations(["MUTATION_USER"]),
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>

<style scoped>
.box-two {
  width: 49%;
  background: green;
  border-radius: 4px;
  color: white;
  padding: 10px;
  box-sizing: border-box;
}
input {
  width: 90%;
  padding: 7px;
  margin: 10px 0;
}
</style>
