import { createRouter, createWebHistory } from "vue-router";
import HomepageView from "../views/HomepageView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import RentView from "../views/RentView.vue";
import DetailRentView from "../views/DetailRentView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomepageView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
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
      path: "/rent",
      name: "rent",
      component: RentView,
    },
    {
      path: "/rent/detail/:id/:price/:trxcode",
      name: "rent-detail",
      component: DetailRentView,
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (!localStorage.access_token && to.name === "rent-detail") {
    return { name: "login" };
  } else if (
    (localStorage.access_token && to.name === "login") ||
    (localStorage.access_token && to.name === "register")
  ) {
    return { name: "home" };
  }
});

export default router;
