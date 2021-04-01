import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getCount(state) {
      return state.count + 1
    }
  },
  mutations: {
    changeCount(state, payload) {
      state.count += payload 
    }
  },
  actions: {
    changeCount({ commit }, payload) {
      setTimeout(() => {
        commit('changeCount', payload)
      }, 1000)
    }
  },
  modules: {
  }
})
