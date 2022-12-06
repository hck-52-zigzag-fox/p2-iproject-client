import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaymentView from "../views/PaymentView.vue"
import RoomChat from '../views/RoomChat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/payment',
      name:'payment',
      component : PaymentView
    },
    {
      path:'/chat',
      name:'roomChat',
      component : RoomChat
    }
  ]
})

export default router
