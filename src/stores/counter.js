import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = `http://localhost:9090`;

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      isLogin: false,
      motorcycles: [],
      motorcycle: {},
    };
  },
  actions: {
    async handleRegister(payload) {
      try {
        await axios({
          method: "POST",
          url: `${BASE_URL}/users/register`,
          data: payload,
        });
        this.router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
    async handleLogin(payload) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${BASE_URL}/users/login`,
          data: payload,
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/rent");
      } catch (err) {
        console.log(err);
      }
    },
    async handleGoogleLogin(response) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${BASE_URL}/users/googleLogin`,
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/rent");
      } catch (err) {
        console.log(err);
      }
    },
    async handlePayment(price, trxcode) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${BASE_URL}/rents/payment/${price}/${trxcode}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            console.log('test bayar');
            
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
    handleLogout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/login");
    },
    async fetchMotorcycles() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${BASE_URL}/motorcycles`,
        });
        this.motorcycles = data;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchDetailMotorcycle(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${BASE_URL}/motorcycles/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.motorcycle = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
