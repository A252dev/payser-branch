import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import UserAgreement from '@/views/UserAgreement.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import DataProtection from '@/views/DataProtection.vue'
import Register from '@/views/user/Register.vue'
import Login from '@/views/user/Login.vue'
import CardBind from '@/views/more/CardBind.vue'
import Fundraising from '@/views/more/Fundraising.vue'
import Profile from '@/views/user/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/user_agreement',
      name: 'UserAgreement',
      component: UserAgreement
    },
    {
      path: '/privacy_policy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '/data_protection',
      name: 'DataProtection',
      component: DataProtection
    },
    {
      path: '/card_bind',
      name: 'CardBind',
      component: CardBind
    },
    {
      path: '/fundraising',
      name: 'Fundraising',
      component: Fundraising
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
