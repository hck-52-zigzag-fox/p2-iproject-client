import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
    qr: {},
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
    async showQrCode() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://codzz-qr-cods.p.rapidapi.com/getQrcode",
          params: { type: "url", value: baseUrl },
          headers: {
            "X-RapidAPI-Key":
              "9601e56a7emsh069af09cf95f7d9p1a8750jsn9341f472c2e9",
            "X-RapidAPI-Host": "codzz-qr-cods.p.rapidapi.com",
          },
        });
        this.qr = data;
        console.log("data", data);
      } catch (err) {
        console.log("err", err);
      }
    },
  },
});
