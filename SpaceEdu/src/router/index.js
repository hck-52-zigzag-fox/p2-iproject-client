import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SolarSystemView from "../views/SolarSystemView.vue"
import ObjectDetailView from "../views/ObjectDetailView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/solarsystem",
      name: "solarSystem",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:SolarSystemView,
    },
    {
      path: "/object/:name",
      name: "objectDetail",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:ObjectDetailView,
    },
  ],
});

export default router;
