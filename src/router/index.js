import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GongAn from '../views/GongAn.vue'
import JiaoJing from '../views/JiaoJing.vue'
import AnFang from '../views/AnFang.vue'
import JunYing from '../views/JunYing.vue'
import HonoraryAndCertificate from '../views/HonoraryAndCertificate'
import ClassicCase from '../views/ClassicCase'
import pageAI from '../views/pageAI'

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
    path: '/ClassicCase',
    name: 'ClassicCase',
    component: ClassicCase
  },
  {
    path: '/GongAn',
    name: 'GongAn',
    component: GongAn
  },
  {
    path: '/JiaoJing',
    name: 'JiaoJing',
    component: JiaoJing
  },
  {
    path: '/AnFang',
    name: 'AnFang',
    component: AnFang
  },
  {
    path: '/JunYing',
    name: 'JunYing',
    component: JunYing
  },
  {
    path: '/pageAI',
    name: 'pageAI',
    component: pageAI
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
