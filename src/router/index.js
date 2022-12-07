import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileEditView from "../views/ProfileEditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/profile/edit",
      name: "Edit Profile",
      component: ProfileEditView,
    },
  ],
});

export default router;
