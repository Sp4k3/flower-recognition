import { createWebHistory, createRouter } from 'vue-router'

const Prediction = () => import('../components/Prediction.vue')
const TrainModel = () => import('../components/TrainModel.vue')

const routes = [
  {
    path: '/',
    name: 'Prediction',
    component: Prediction,
  },
  {
    path: '/trainModel',
    name: 'TrainModel',
    component: TrainModel,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes,
})

export default router
