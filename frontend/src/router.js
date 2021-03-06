import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Institutions from './views/Institutions.vue'
import Institution from './views/Institution.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {   
      path: '/institutions',
      name: 'institutions',
      component: Institutions,
    },
    {
      path: '/institution/:id',
      name: 'institution',
      component: Institution
    }
  ]
})
