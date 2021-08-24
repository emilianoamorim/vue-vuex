import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Emiliano',
      skills: [
        { skill: 'js', use: true },
        { skill: 'php', use: false },
        { skill: 'css', use: true },
        { skill: 'react', use: false },
      ]
    }
  },
  mutations: {
    MUTATION_USER(state, val) {
      state.user = {
        ...state.user,
        ...val
      }
    }
  },
  getters: {
    skills: state => {
      return state.user.skills.filter(skill => skill.use === true)
    }
  },
  actions: {
    // https://vuex.vuejs.org/guide/actions.html#dispatching-actions
  },
  modules: {}
})
