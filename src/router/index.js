import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Prueba from '@/components/Prueba.vue';
import Contactenos from '@/components/Contactenos.vue';
import NosotrosView from '@/views/NosotrosView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: NosotrosView
  },
  {
    path: '/prueba',
    name: 'prueba',
    component: Prueba
  },
  {
    path: '/contactenos',
    name: 'contactenos',
    component: Contactenos
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
