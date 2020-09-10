import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('@/views/new')
  }
]

const router = new VueRouter({ routes })

export default router
