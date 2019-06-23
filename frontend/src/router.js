import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/instrutores',
      name: 'Instrutores',
      component: () => import('./views/Instrutores.vue')
    },
    {
      path: '/cursos',
      name: 'Cursos',
      component: () => import('./views/Cursos.vue')
    },
    {
      path: '/conteudos',
      name: 'Conteudos',
      component: () => import('./views/Conteudos.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.getters['estaLogado']) {
    next()
  } else {
    if (to.path !== '/') {
      next('/')
    }
    next()
  }
})

export default router
