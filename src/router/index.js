import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import LoginPage from "../views/LoginPage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsPage,
    },
    {
      path: "/products/:productCode",
      name: "productDetail",
      component: ProductDetailPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFoundPage,
    },
  ],
});

export default router;
