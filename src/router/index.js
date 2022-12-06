import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
  ],
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem("access_token");
//   if (isAuthenticated && (to.name === "login" || to.name === "register")) {
//     next({ name: "products" });
//   } else if (!isAuthenticated && to.name === "favorites") {
//     Swal.fire("Please login first")
//     next({ name: "login" });
//   } else next();
// });

export default router;