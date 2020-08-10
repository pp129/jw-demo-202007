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
    meta: {
      title: '北斗智慧警务大脑'
    },
    name: 'Home',
    component: Home
  },
  {
    path: '/HonoraryAndCertificate',
    meta: {
      title: '北斗智慧警务大脑'
    },
    name: 'HonoraryAndCertificate',
    component: HonoraryAndCertificate
  },
  {
    path: '/ClassicCase',
    meta: {
      title: '北斗智慧警务大脑'
    },
    name: 'ClassicCase',
    component: ClassicCase
  },
  {
    path: '/GongAn',
    meta: {
      title: '北斗智慧警务公安'
    },
    name: 'GongAn',
    component: GongAn
  },
  {
    path: '/JiaoJing',
    meta: {
      title: '北斗智慧警务交警'
    },
    name: 'JiaoJing',
    component: JiaoJing
  },
  {
    path: '/AnFang',
    meta: {
      title: '北斗智慧警务司法'
    },
    name: 'AnFang',
    component: AnFang
  },
  {
    path: '/JunYing',
    meta: {
      title: '北斗智慧警务军营'
    },
    name: 'JunYing',
    component: JunYing
  },
  {
    path: '/pageAI',
    meta: {
      title: '警务大数据AI应用平台'
    },
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
