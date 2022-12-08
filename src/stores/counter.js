import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
    qr: {},
    keeprs: [],
    keepr: {},
    newss: [],
  }),
  actions: {
    async handleLogin(email, password) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/users/login`,
          data: {
            email,
            password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("userEmail", data.user.email);
        this.isLogin = true;
        this.router.push("/home");
      } catch (err) {
        console.log("err", err);
      }
    },
    async handleRegister(email, password, phoneNumber, address) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/users/register`,
          data: {
            email,
            password,
            phoneNumber,
            address,
          },
        });
        this.router.push("/login");
      } catch (err) {
        console.log("err", err);
      }
    },
    async showQrCode(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://codzz-qr-cods.p.rapidapi.com/getQrcode",
          params: { type: "url", value: `${baseUrl}/employees/${id}` },
          headers: {
            "X-RapidAPI-Key":
              "9601e56a7emsh069af09cf95f7d9p1a8750jsn9341f472c2e9",
            "X-RapidAPI-Host": "codzz-qr-cods.p.rapidapi.com",
          },
        });
        this.qr = data;
      } catch (err) {
        console.log("err", err);
      }
    },
    async fetchKeepr() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/employees`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.keeprs = data;
      } catch (err) {
        console.log("err", err);
      }
    },
    async detailKeepr(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/employees/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.keepr = data;
        this.showQrCode(id);
      } catch (err) {}
    },
    logOut() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/");
    },
    async googleLogin(response) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/users/googleLogin`,
          headers: {
            google_token: response,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("customerEmail", data.user.email);
        this.isLogin = true;
        this.router.push("/home");
      } catch (err) {
        console.log("err", err);
      }
    },

    async createTransaction(id) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/transactions/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
      } catch (err) {
        console.log("err", err);
      }
    },

    async handlePayment(id) {
      console.log("id", id);
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/transactions/payment/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        let transactions = this.createTransaction;
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            transactions(id);
          },
        });
      } catch (err) {
        console.log("err", err);
      }
    },

    async readNews() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/news`,
        });
        console.log(data.value);
        this.newss = data.value;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
});
