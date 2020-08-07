import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import vuexCache from 'vuex-cache'

Vue.use(Vuex)
Vue.use(vuexCache)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    items: []
  },
  actions: {
    getItems ({ commit }) {
      Vue.prototype.$http.get('/items').then(response => {
        console.log(response)
        commit('GET_ITEMS', response.data)
      })
    }
  },
  mutations: {
    GET_ITEMS: (state, items) => {
      state.items = items
    }
  },
  plugins: [
    vuexCache({ timeout: 10000 }),
    createPersistedState()
  ],
  modules: {}
})

export default store
