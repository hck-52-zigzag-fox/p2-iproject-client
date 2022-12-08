import { createRouter, createWebHistory } from "vue-router";
import LandingPageView from "../views/LandingPageView.vue";
import LoginPageView from "../views/LoginPageView.vue";
import RegisterPageView from "../views/RegisterPageView.vue";
import HomePageView from "../views/HomePageView.vue";
import MyKeeprPageView from "../views/MyKeeprPageView.vue";
import DetailKeeprPageView from "../views/DetailKeeprPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: LandingPageView,
    },
    {
      path: "/login",
      name: "loginPage",
      component: LoginPageView,
    },
    {
      path: "/register",
      name: "registerPage",
      component: RegisterPageView,
    },
    {
      path: "/home",
      name: "homePage",
      component: HomePageView,
    },
    {
      path: "/myKeepr",
      name: "myKeepr",
      component: MyKeeprPageView,
    },
    {
      path: "/keepr/:id",
      name: "keeprDetail",
      component: DetailKeeprPageView,
    },
  ],
});
router.beforeEach(async (to, from) => {
  if (
    (!localStorage.access_token && to.name === "homePage") ||
    (!localStorage.access_token && to.name === "myKeepr") ||
    (!localStorage.access_token && to.name === "keeprDetail")
  ) {
    return { name: "loginPage" };
  } else if (
    (localStorage.access_token && to.name === "loginPage") ||
    (localStorage.access_token && to.name === "registerPage") ||
    (localStorage.access_token && to.name === "landingPage")
  ) {
    return { name: "homePage" };
  }
});

export default router;
