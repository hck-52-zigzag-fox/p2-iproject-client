import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProductView from '../views/ProductView.vue'
import OrderView from '../views/OrderView.vue'
import CheckoutView from '../views/CheckoutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    }
  ]
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token")
  if (to.name == 'order' && !isAuthenticated) next({ name: 'login' })
  else if (to.name == 'checkout' && !isAuthenticated) next({ name: 'login' })
  else if (to.name == 'product' && !isAuthenticated) next({ name: 'login' })
  else if (to.name == 'login' && isAuthenticated || to.name == 'register' && isAuthenticated) next({ name: 'home' })
  else next()
})
export default router
