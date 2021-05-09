import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  mutations: { // utilizado com o metodo commit
    decreaseCounter (state) {
      state.counter--
    },
    increaseCounter (state, randonNumber) {
      state.counter += randonNumber
    },
    setColorCode (state, newValue) {
      state.colorCode = newValue
    }
  },
  actions: { // utilizados como dispatch executam tanto a action quanto a mutation equivalente
    increaseCounter ({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')
        .then(response => {
          commit('increaseCounter', response.data)
        })
    }
  },
  getters: {
    counterSquared (state) {
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
