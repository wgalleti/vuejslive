import Vue from 'vue'
import Vuex from 'vuex'
import { set, load, save, remove } from './utils/vuex'

Vue.use(Vuex)

const urlInstrutores = 'api/instrutores/'
const urlCursos = 'api/cursos/'

export default new Vuex.Store({
  state: {
    instrutores: [],
    cursos: []
  },
  mutations: {
    SET_INSTRUTORES: set('instrutores'),
    SET_CURSOS: set('cursos')
  },
  actions: {
    loadInstrutores: load(urlInstrutores, 'SET_INSTRUTORES'),
    salvarInstrutor: save(urlInstrutores),
    removerInstrutor: remove(urlInstrutores),

    loadCursos: load(urlCursos, 'SET_CURSOS'),
    salvarCurso: save(urlCursos),
    removerCurso: remove(urlCursos)
  }
})
