import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyGamesView from "../views/MyGamesView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import GameDetailView from "../views/GameDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mygames",
      name: "mygames",
      component: MyGamesView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/games/:id",
      name: "gameDetail",
      component: GameDetailView,
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (!localStorage.access_token && to.name === "mygames") {
    return { name: "login" };
  } else if (
    (localStorage.access_token && to.name === "login") ||
    (localStorage.access_token && to.name === "register")
  ) {
    return { name: "home" };
  }
});

export default router;
