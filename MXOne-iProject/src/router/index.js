import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetailVue from '../views/MovieDetailView.vue'
import LoginPage from '../views/LoginPage.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: MovieDetailVue
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("access_token") && to.name === 'home') router.push('/login')
  else if (localStorage.getItem('access_token') && to.name === 'LoginPage') router.push('/')
  else if (localStorage.getItem('access_token') && to.name === 'Register') router.push('/')
  else next()
})

export default router
