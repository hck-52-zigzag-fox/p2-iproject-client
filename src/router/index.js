import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileEditView from "../views/ProfileEditView.vue";
import ChatVue from "../views/ChatVue.vue";
import ChatBefore from "../views/ChatBefore.vue";
import TwoFactor from "../views/TwoFactor.vue";
import NotFound404 from "../views/NotFound404.vue";

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
      name: "EditProfile",
      component: ProfileEditView,
    },
    {
      path: "/chat",
      name: "chat",
      component: ChatBefore,
    },
    {
      path: "/chat/:ReceiverId",
      name: "chatReciver",
      component: ChatVue,
    },
    {
      path: "/2FA",
      name: "2FA",
      component: TwoFactor,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound404,
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.name != "Login" && !localStorage.getItem("access_token"))
    next({ name: "Login" });
  if (to.name == "Login" && localStorage.getItem("access_token"))
    next({ name: "home" });
  if (to.name != "2FA" && localStorage.getItem("isPass") == "false")
    next({ name: "2FA" });
  if (to.name == "2FA" && localStorage.getItem("isPass") == "true")
    next({ name: "home" });
  else next();
});
export default router;
