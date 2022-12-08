import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CourseView from "../views/CourseView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import RegisterView from "../views/RegisterView.vue";
import MyVideoView from "../views/MyVideoView.vue";
import UploadView from "../views/UploadView.vue";

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
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/courses/:id",
      name: "courses",
      component: CourseView,
    },
    {
      path: "/checkout/:courseId",
      name: "checkout",
      component: CheckoutView,
    },
    {
      path: "/my-video",
      name: "myvideo",
      component: MyVideoView,
    },
    {
      path: "/upload",
      name: "upload",
      component: UploadView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem("token");

  if (to.name === "login" && isAuthenticated) next({ name: "home" });
  else if (to.name === "register" && isAuthenticated) next({ name: "home" });
  else if (to.name === "checkout" && !isAuthenticated) next({ name: "login" });
  else if (to.name === "myvideo" && !isAuthenticated) next({ name: "login" });
  else if (to.name === "upload" && !isAuthenticated) next({ name: "login" });
  else next();
});

export default router;
