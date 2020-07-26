import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GongAn from '../views/GongAn.vue'
import HonoraryAndCertificate from '../views/HonoraryAndCertificate'

Vue.use(VueRouter)

const routes = [
  { path: '*', name: '*', redirect: '/', meta: {} },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/HonoraryAndCertificate',
    name: 'HonoraryAndCertificate',
    component: HonoraryAndCertificate
  },
  {
    path: '/GongAn',
    name: 'GongAn',
    component: GongAn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
