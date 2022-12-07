import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

// const baseUrl = "https://zigzag-fox-nadya.up.railway.app/";
const baseUrl = "http://localhost:3000";

export const useStore = defineStore("store", {
  state: () => ({
    isLogin: false,
    currentUser: {},
    items: [],
    orders: [],
  }),
  actions: {
    async handleLogin(login) {
      try {
        const { data } = await axios({
          method: "POST",
          url: baseUrl + "/customers/login",
          data: login,
        });

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("role", data.role);
        localStorage.setItem("id", data.id);
        this.isLogin = true;
        Swal.fire(`Welcome ${this.username}`);
      } catch (err) {
        Swal.fire(err.response.data.message || "Internal server error");
      }
    },
    handleLogout() {
      localStorage.clear();
      this.isLogin = false;
      Swal.fire("Logout success");
      this.router.push("/login");
    },
    getCurrentUser() {
      this.currentUser = {
        id: localStorage.id,
        name: localStorage.email.split("@")[0],
        email: localStorage.email,
        photoUrl:
          "https://www.clipartmax.com/png/middle/434-4349876_profile-icon-vector-png.png",
        role: localStorage.role,
      };
    },
    async fetchItems() {
      try {
        const { data } = await axios({
          method: "GET",
          url: baseUrl + "/items",
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.items = data;
      } catch (err) {
        Swal.fire(err.response.data.message || "Internal server error");
      }
    },
    async fetchOrders() {
      try {
        const { data } = await axios({
          method: "GET",
          url: baseUrl + "/orders",
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.orders = data;
      } catch (err) {
        Swal.fire(err.response.data.message || "Internal server error");
      }
    },
  },
  getters: {
    username() {
      return localStorage.email ? localStorage.email.split("@")[0] : "";
    },
  },
});
