import Vue from 'vue'
import Vuex from 'vuex'
import axios from './plugins/axios'

Vue.use(Vuex)

const urlInstrutores = 'api/instrutores/'
const urlCursos = 'api/cursos/'

export default new Vuex.Store({
  state: {
    instrutores: [],
    cursos: []
  },
  mutations: {
    SET_INSTRUTORES (state, instrutores) {
      state.instrutores = instrutores
    },
    SET_CURSOS (state, cursos) {
      state.cursos = cursos
    }
  },
  actions: {
    loadInstrutores: context => {
      return axios.get(urlInstrutores).then(
        res => {
          context.commit('SET_INSTRUTORES', res.data)
        }
      )
    },
    loadCursos: context => {
      return axios.get(urlCursos).then(
        res => {
          context.commit('SET_CURSOS', res.data)
        }
      )
    },

  }
})
