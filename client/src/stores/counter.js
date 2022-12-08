import { defineStore } from "pinia";
import axios from "axios";

const baseURL = `https://rz-card-shop.up.railway.app`;

export const useRzStore = defineStore("rz", {
  state: () => ({
    checkLogin: false,
    email: localStorage.getItem("email"),
  }),
  actions: {
    async logout() {
      localStorage.clear();
      this.checkLogin = false;
      this.router.push("/login");
    },
    async loginToSite(email, password) {
      try {
        let { data } = await axios.post(`${baseURL}/pub/login`, {
          email,
          password,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("id", data.id);
        Swal.fire("Login", "Login Success", "success");
        this.email = data.email;
        this.checkLogin = true;
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    async register(user) {
      try {
        await axios.post(`${baseURL}/pub/register`, user);
        this.checkLogin = false;
        this.router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
  },
});
