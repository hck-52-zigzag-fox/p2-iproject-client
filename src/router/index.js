import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileEditView from "../views/ProfileEditView.vue";
import ChatVue from "../views/ChatVue.vue";
import ChatBefore from "../views/ChatBefore.vue";
import TwoFactor from "../views/TwoFactor.vue";
import NotFound404 from "../views/NotFound404.vue";
import RegisterView from "../views/RegisterView.vue";

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
    {
      path: "/register",
      name: "Register",
      component: RegisterView,
    },
  ],
});
router.beforeEach((to, from, next) => {
  //  protect all if dont have acces_token can just go login or register
  if (!localStorage.access_token && to.name == "Register") {
    next();
  }

  if (
    !localStorage.access_token &&
    to.name !== "Login" &&
    to.name !== "Register"
  ) {
    next({ name: "Login" });
    // cant go to all if localstorage isPass false
  } else if (localStorage.isPass === "false" && to.name !== "2FA") {
    next({ name: "2FA" });
    // cant go to 2FA if localstorage isPass true
  } else if (localStorage.isPass === "true" && to.name === "2FA") {
    next({ name: "home" });
    // cant go to login or register if localstorage acces_token true
  } else if (
    (localStorage.access_token && to.name == "Login") ||
    to.name == "Register"
  ) {
    next({ name: "home" });
  } else {
    next();
  }
});
export default router;
