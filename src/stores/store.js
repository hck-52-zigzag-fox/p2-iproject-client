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
        localStorage.setItem("CustomerId", data.data.id);
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
        const { data } = await axios({
          method: "GET",
          url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
          params: {
            country: "us",
            lang: "en",
            currentpage: "0",
            pagesize: "30",
            categories: "men_all",
            concepts: "H&M MAN",
          },
          headers: {
            "X-RapidAPI-Key":
              "2e41e92258mshf64252ade8a6ebfp1bff9ajsn9a879d0f9dc4",
            "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          },
        });

        this.loading = false;
        this.products = data.results;
        console.log(this.products);
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
