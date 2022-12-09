import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProfilUserPage from "../views/ProfilUserPage.vue";
import AddProfilePage from "../views/AddProfilPage.vue";
import GamesPage from "../views/GamesPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/profiles/:id",
      name: "profiles",
      component: ProfilUserPage,
    },
    {
      path: "/addProfile",
      name: "addProfile",
      component: AddProfilePage,
    },
    {
      path: "/games",
      name: "games",
      component: GamesPage,
    },
  ],
});

router.beforeEach((to, from) => {
  let isAuthenticate = localStorage.getItem("access_token");

  if (!isAuthenticate && to.fullPath === "/") {
    return { name: "login" };
  } else if (!isAuthenticate && to.fullPath === "/games") {
    return { name: "login" };
  } else if (!isAuthenticate && to.fullPath === "/addProfile") {
    return { name: "login" };
  } else if (!isAuthenticate && to.fullPath === "/profiles/:id") {
    return { name: "login" };
  } else if (isAuthenticate && to.fullPath === "/login") {
    return { name: "home" };
  } else if (isAuthenticate && to.fullPath === "/register") {
    return { name: "home" };
  }
});

export default router;
