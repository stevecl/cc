import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/hooks',
    name: 'hooks',
    component: () => import('../views/hook/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router