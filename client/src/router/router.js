import { createWebHistory, createRouter } from 'vue-router'

const Prediction = () => import('../components/Prediction.vue')
const About = () => import('../components/About.vue')

const routes = [
  {
    path: '/',
    name: 'Prediction',
    component: Prediction,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes,
})

export default router
