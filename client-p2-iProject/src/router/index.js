import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import BookmarkPage from "../views/BookmarkPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterView from "../views/RegisterPage.vue";
import DetailProduct from "../views/DetailProduct.vue";
import AboutPage from "../views/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/bookmarks",
      name: "bookmarks",
      component: BookmarkPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/products/:id",
      name: "detailProduct",
      component: DetailProduct,
    },
    
  ],
});

router.beforeEach((to, from) => {
  if (!localStorage.getItem("access_token") && to.name === "bookmarks") {
    return { path: "/login" };
  } else if (localStorage.getItem("access_token") && to.name === "login") {
    return { path: "/" };
  } else if (localStorage.getItem("access_token") && to.name === "register") {
    return { path: "/" };
  }
});

export default router;
