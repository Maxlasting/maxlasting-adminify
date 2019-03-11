import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "admin" */ '../views/admin.vue'),
      children: [
        {
          path: 'index',
          component: () => import(/* webpackChunkName: "index" */ '../views/index.vue')
        },
        {
          path: 'slider',
          component: () => import(/* webpackChunkName: "slider" */ '../views/slider.vue')
        },
        {
          path: 'notes',
          component: () => import(/* webpackChunkName: "notes" */ '../views/notes.vue')
        },
        {
          path: 'extends',
          component: () => import(/* webpackChunkName: "extends" */ '../views/extends.vue')
        },
        {
          path: '',
          redirect: 'index'
        }
      ]
    }
  ]
})
