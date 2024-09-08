import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: 'home',
    component: () => import('../views/manage/listHome.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/manage/listHome.vue')
  },
  {
    path: '/hlife',
    name: 'hlife',
    component: () => import('../views/manage/listLife.vue')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/manage/listPerson.vue')
  },
  {
    path: '/custom',
    name: 'custom',
    component: () => import('../views/manage/listCustom.vue')
  },
  {
    path: '/tabbar',
    name: 'tabbar',
    component: () => import('../views/manage/listTabbar.vue')
  },
  {
    path: '/advert',
    name: 'advert',
    component: () => import('../views/manage/listAdvert.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/fragments/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router