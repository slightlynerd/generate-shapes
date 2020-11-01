import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    shapes: []
  },
  getters: {
    shapes: state => state.shapes
  },
  mutations: {
    addShape (state, payload) {
      state.shapes.push(payload)
    }
  },
  plugins: [vuexLocal.plugin]
})
