import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
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
      console.log("err", err)
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
      console.log("err", err)
      }
    },
  }
});
