import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import TeamsView from '../views/TeamsView.vue'
import PlayersView from '../views/PlayersView.vue'
import MatchesView from '../views/MatchesView.vue'
import Highlights from '../views/HighlightsView.vue'

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
      path: '/teams',
      name: 'teams',
      component: TeamsView
    },
    {
      path: '/players',
      name: 'players',
      component: PlayersView
    },
    {
      path: '/matches',
      name: 'matches',
      component: MatchesView
    },
    {
      path: '/highlights',
      name: 'highlights',
      component: Highlights
    }
  ]
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token");
  const status = localStorage.getItem("status")
  if (to.name == "login" && isAuthenticated) next({ name: "home" });
  else if (to.name == "register" && isAuthenticated) next({ name: "home" });
  else if (to.name == "teams" && !isAuthenticated) next({ name: "home" });
  else if (to.name == "players" && !isAuthenticated) next({ name: "home" });
  else if (to.name == "matches" && !isAuthenticated) next({ name: "home" });
  else if (to.name == "matches" && status !== "VIP") next({ name: "home" });
  else if (to.name == "highlights" && !isAuthenticated) next({ name: "home" });
  else if (to.name == "highlights" && status !== "VIP") next({ name: "home" });
  else next();
});
export default router
