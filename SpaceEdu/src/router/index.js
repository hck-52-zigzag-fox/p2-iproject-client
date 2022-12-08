import { createRouter, createWebHistory } from "vue-router";
import SolarSystemView from "../views/SolarSystemView.vue"
import ObjectDetailView from "../views/ObjectDetailView.vue"
import LoginView from "../views/LoginView.vue"
import CreateObject from "../views/CreateObjectView.vue"
import CustomObjectsView from "../views/CustomObjectsView.vue"
import ExploreView from "../views/ExploreView.vue"
import RegisterView from "../views/RegisterView.vue"
import WeatherView from "../views/weatherView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/",
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
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:LoginView,
    },
    {
      path: "/create",
      name: "create",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:CreateObject,
    },
    {
      path: "/creatorssystem",
      name: "creatorsSystem",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:CustomObjectsView,
    },
    {
      path: "/explore",
      name: "explore",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:ExploreView,
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:RegisterView,
    },
    {
      path: "/weather",
      name: "weather",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:WeatherView,
    },

  ],
});

router.beforeEach(async (to,from)=>{
  if(!localStorage.getItem("access_token") && to.name == "create"){
    return {name:"home"}
  }
})
export default router;
