import axios from "axios";
import { defineStore } from "pinia";
const baseUrl = "http://localhost:3000";

export const useCustomerOrderStore = defineStore("customerOrder", {
  state() {
    return {
      token: "",
    };
  },
  actions: {
    async addOrder(input, id = 2) {
      try {
        console.log(input, id);
        const { data } = await axios({
          url: `${baseUrl}/customer-orders/${id}`,
          method: "post",
          data: input,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data, "dari balikan server");
        this.token = data;
      } catch (error) {
        console.log(error);
      }
    },
    async handlePayment(token) {
      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log(result,'sucess payment nya boss');
        },
        onPending: function (result) {
          console.log(result);
        },
        onError: function (result) {
          console.log(result);
        },
        onClose: function () {
          console.log("otomatis close");
        },
      });
    },
  },
  getters: {},
});
