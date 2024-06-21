import { createRouter, createWebHistory } from 'vue-router'

import { isAuthenticated } from '../service/auth/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/pages/DashboardView.vue')
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: () => import('../views/pages/LoginView.vue')
    }
  ]
})


router.beforeEach(async (to, from) => {
  if (
    !isAuthenticated() &&
    to.name !== 'Login'
  ) {
    return { name: 'Login' }
  }
  
  else if(
    to.name == 'Login'
  ) {
    return { name: 'home' }
  }
})

export default router
