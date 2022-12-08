import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProfilUserPage from "../views/ProfilUserPage.vue";
import AddProfilePage from "../views/AddProfilPage.vue";
import EditProfilePage from "../views/EditProfilPage.vue";

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
      path: "/editProfile",
      name: "editProfile",
      component: EditProfilePage,
    },
  ],
});

export default router;
