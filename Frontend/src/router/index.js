// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import ChatInterface from '../components/ChatInterface.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatInterface,
    meta: { transition: 'fade' }
  }
]

const router = createRouter({
  history: createWebHistory('/Frontend/'), // Update this line
  routes
})
export default router

