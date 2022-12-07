import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import Swal from 'sweetalert2'

const base_url = "http://localhost:3000/pub";
export const useCustomerStore = defineStore("customer", {
  state: () => ({
    isLogin: false,
    googleOn: "buttonDiv"
  }),
  actions: {
    async login(dataCustomer) {
      try {
        let data = await axios.post(`${base_url}/login`, dataCustomer);
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("UserId", data.data.id);
        localStorage.setItem("username", data.data.username);
        localStorage.setItem("role", data.data.role);
        // localStorage.setItem("email", data.data.email);
        this.isLogin = true;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/")
      } catch (error) {
        console.log(error);
      }
    },
    async register(dataCustomer) {
      try {
        let { data } = await axios.post(`${base_url}/register`, dataCustomer);
        this.product = data;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Success",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/login");
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: `${error.response.data.msg}`,
          icon: 'error',
          confirmButtonText: 'ok'
        })
      }
    },
    async logout() {
      localStorage.clear();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logout",
        showConfirmButton: false,
        timer: 1500,
      });
      this.isLogin = false;
      router.push("/");
      //NOTIF LOGOUT
    },
    async googleLogin(response) {
      try {
        let { data } = await axios({
          url: base_url + "/googleLogin",
          method: "post",
          headers: {
            access_token_google: response.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("UserId", data.id);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
        localStorage.setItem("email", data.email);
        this.isLogin = true;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
