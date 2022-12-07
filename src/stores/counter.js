import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = `http://localhost:9090`;

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      isLogin: false,
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
  },
  async handleLogin(payload) {
    
  }
});
