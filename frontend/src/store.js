import Vue from 'vue'
import Vuex from 'vuex'
import { set, load, save, remove, http, parseHttpError, httpToken } from './utils/vuex'

Vue.use(Vuex)

const urlInstrutores = 'api/instrutores/'
const urlCursos = 'api/cursos/'
const urlConteudos = 'api/conteudos/'

export default new Vuex.Store({
  state: {
    instrutores: [],
    cursos: [],
    conteudos: [],
    token: null,
    usuario: null
  },
  getters: {
    estaLogado: state => state.token !== null
  },
  mutations: {
    SET_INSTRUTORES: set('instrutores'),
    SET_CURSOS: set('cursos'),
    SET_CONTEUDOS: set('conteudos'),
    SET_TOKEN (state, token) {
      state.token = token
      localStorage.setItem('token', token)
      httpToken(http, token)
    },
    SET_USUARIO: set('usuario')
  },
  actions: {
    authLogin: ({ commit }, credenciais) => http.post('rest-auth/login/', credenciais)
      .then(res => commit('SET_TOKEN', res.data.key))
      .catch(err => parseHttpError(err)),

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
