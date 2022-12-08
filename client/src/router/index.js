import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePageView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import SearchView from '../views/SearchView.vue'
import UpgradeView from '../views/upgradeView.vue'
import FoodLogsView from '../views/FoodLogsView.vue'
import CalculatorView from '../views/CalculatorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginView
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchView
    },
    {
      path: '/upgrade',
      name: 'UpgradePage',
      component: UpgradeView
    },
    {
      path: '/logs',
      name: 'FoodLogsView',
      component: FoodLogsView
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorView
    }
  ]
})

export default router
