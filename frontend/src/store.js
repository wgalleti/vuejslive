import Vue from 'vue'
import Vuex from 'vuex'
import { set, load, save, remove } from './utils/vuex'

Vue.use(Vuex)

const urlInstrutores = 'api/instrutores/'
const urlCursos = 'api/cursos/'
const urlConteudos = 'api/conteudos/'

export default new Vuex.Store({
  state: {
    instrutores: [],
    cursos: [],
    conteudos: []
  },
  mutations: {
    SET_INSTRUTORES: set('instrutores'),
    SET_CURSOS: set('cursos'),
    SET_CONTEUDOS: set('conteudos')
  },
  actions: {
    loadInstrutores: load(urlInstrutores, 'SET_INSTRUTORES'),
    salvarInstrutor: save(urlInstrutores),
    removerInstrutor: remove(urlInstrutores),

    loadCursos: load(urlCursos, 'SET_CURSOS'),
    salvarCurso: save(urlCursos),
    removerCurso: remove(urlCursos),

    loadConteudos: load(urlConteudos, 'SET_CONTEUDOS'),
    salvarConteudo: save(urlConteudos),
    removerConteudo: remove(urlConteudos)
  }
})
