import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import AddOrderPage from "../views/AddOrderPage.vue";
import OrderPage from "../views/OrderPage.vue";

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
      path: "/orders",
      name: "order",
      component: OrderPage,
    },
    {
      path: "/orders/:itemId",
      name: "addOrder",
      component: AddOrderPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token");
  if (isAuthenticated && (to.name === "login")) {
    next({ name: "home" });
  } else if (!isAuthenticated && to.name === "home") {
    next({ name: "login" });
  } else next();
});

export default router;
