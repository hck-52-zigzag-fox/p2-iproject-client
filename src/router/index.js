import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';
import DetailView from '../views/AnimeDetailView.vue';
import AnimeView from '../views/AllAnimeView.vue';
import RegisterView from '../views/RegisterView.vue';
import ProfilePageView from '../views/ProfilePageView.vue';

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
      name: 'Login',
      component: LoginView
    },
    {
      path: '/animes',
      name: 'Animes',
      component: AnimeView
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfilePageView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: DetailView
    }
  ]
})

export default router
