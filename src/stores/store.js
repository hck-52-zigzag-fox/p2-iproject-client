import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:3000";

export const useStore = defineStore("index", {
  state() {
    return {
      registered: false,
      isLogin: false,
      products: [],
      product: {},
      loading: true,
    };
  },
  actions: {
    async register(input) {
      try {
        await axios.post(`${baseUrl}/register`, input);

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
    async login(input) {
      try {
        const { data } = await axios.post(`${baseUrl}/login`, input);

        this.isLogin = true;
        this.router.push("/");
        localStorage.setItem("access_token", data.access_token);
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
    async readProducts() {
      try {
        const { data } = await axios.get(`${baseUrl}/products`);

        this.loading = false;
        this.products = data;
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error Fetch Data!",
        });
      }
    },
    async readDetailProduct(productCode) {
      try {
        this.product = this.products.filter((el) => {
          if (el.articles[0].code === productCode) {
            return el;
          }
        });

        this.router.push(`/products/${productCode}`);
        this.loading = false;
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error Fetch Data!",
        });
      }
    },
  },
  getters: {},
});
