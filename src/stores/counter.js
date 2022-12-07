import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";
const baseUrl = "http://localhost:3000/";

export const useStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
    products: [],
    product: {},
    cities: [],
    cost: "",
    orders: [],
  }),
  actions: {
    async postLogin(value) {
      try {
        const { data } = await axios({
          url: baseUrl + "users/login",
          method: "POST",
          data: value,
        });
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/");
        Swal.fire({
          icon: "success",
          text: "Success Login",
        });
      } catch (error) {
        // console.log(error);
        Swal.fire({
          icon: "error",
          text: error.response.data.message,
        });
      }
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
      Swal.fire({
        icon: "success",
        text: "Success Logout",
      });
    },
    async fetchProduct() {
      try {
        const { data } = await axios({
          url: baseUrl + "products",
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.products = data;
      } catch (error) {
        console.log(error);
      }
    },
    async productById(id) {
      try {
        const { data } = await axios({
          url: baseUrl + `products/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.product = data;
        // console.log(this.product);
      } catch (error) {
        console.log(error);
      }
    },
    async getCity() {
      try {
        const { data } = await axios({
          url: baseUrl + "orders/city",
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.cities = data.rajaongkir.results;
        // console.log(this.cities);
      } catch (error) {
        console.log(error);
      }
    },
    async ongkir(value) {
      try {
        const { data } = await axios({
          url: baseUrl + "orders/cost",
          method: "POST",
          data: {
            origin: 23,
            destination: value.destination,
            weight: 2000,
            courier: "jne",
          },
        });
        this.cost = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addOrderById(id, input) {
      try {
        const { data } = await axios({
          url: baseUrl + `orders/cost`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            origin: 22,
            destination: input.destination,
            weight: 2000,
            courier: "jne",
          },
        });

        await axios({
          url: baseUrl + `orders/${id}`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            size: input.size,
            destination: data.destinationName,
            price: data.price + input.productPrice,
          },
        });
        this.router.push("/orders");
      } catch (error) {
        console.log(error);
      }
    },
    async getOrderById() {
      try {
        const { data } = await axios({
          url: baseUrl + "orders",
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.orders = data;
        console.log(this.orders);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteOrder(id) {
      try {
        const { data } = await axios({
          url: baseUrl + `orders/${id}`,
          method: "DELETE",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.getOrderById();
        Swal.fire({
          icon: "success",
          text: data.message,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async patchById(id) {
      try {
        const { data } = await axios({
          url: baseUrl + `orders/${id}`,
          method: "PATCH",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data,
        });
      } catch (error) {}
    },
    async midtrans() {
      try {
        // console.log("kesini");
        const { data } = await axios({
          method: "POST",
          url: baseUrl + `orders/midtrans`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        window.snap.pay(data.token, {
          onSuccess: async function (result) {
            //   const { data } = await axios({
            //     url: baseUrl + `orders/${id}`,
            //     method: "PATCH",
            //     headers: {
            //       access_token: localStorage.getItem("access_token"),
            //     },
            //     data,
            //   });
            console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here /
            alert("wating your payment!");
          },
          onError: function (result) {
            / You may add your own implementation here /
            alert("payment failed!");
          },
          onClose: function () {
            / You may add your own implementation here */
            alert("you closed the popup without finishing the payment");
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
