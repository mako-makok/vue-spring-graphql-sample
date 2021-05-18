import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Calendar from '../pages/Calendar.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Calendar',
    component: Calendar,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
