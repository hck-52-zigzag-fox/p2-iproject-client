import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:3000";

export const useStore = defineStore("index", {
  state() {
    return {
      registered: false,
      isLogin: false,
    };
  },
  actions: {
    async register(input) {
      try {
        await axios({
          url: `${baseUrl}/register`,
          method: "post",
          data: input,
        });

        console.log(input);
        this.router.push("/login");
        this.registered = true;
        Swal.fire({
          icon: "success",
          title: "Congrats...",
          text: "Register Success! You have been able to Login",
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.msg,
        });
      }
    },
    async postLogin(input) {
      try {
        const { data } = await axios({
          url: `${baseUrl}/login`,
          method: "post",
          data: input,
        });

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("CustomerId", data.data.id);
        this.isLogin = true;
        Swal.fire({
          icon: "success",
          title: "Congrats...",
          text: "Login Success!",
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.msg,
        });
      }
    },
  },
  getters: {},
});
