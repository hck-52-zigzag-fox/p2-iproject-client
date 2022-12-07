import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import DetailProductPage from "../views/DetailProductPage.vue";
import OrderPage from "../views/OrderPage.vue";
import FormPage from "../views/FormPage.vue";
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
      path: "/products/:id",
      name: "detailPage",
      component: DetailProductPage,
    },
    {
      path: "/orders",
      name: "detailOrder",
      component: OrderPage,
    },
    {
      path: "/addorders/:id",
      name: "addOrder",
      component: FormPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFoundPage,
    },
  ],
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token");
  if (to.name == "login" && isAuthenticated) next({ name: "home" });
  else if (to.name == "register" && isAuthenticated) next({ name: "home" });
  else if (to.name == "home" && !isAuthenticated) next({ name: "login" });
  else if (to.name == "detailPage" && !isAuthenticated) next({ name: "login" });
  else next();
});

export default router;
