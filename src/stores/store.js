import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useStore = defineStore("index", {
  state() {
    return {
      registered: false,
    };
  },
  actions: {
    async register(value) {
      try {
        await axios({
          url: `${baseUrl}/register`,
          method: "post",
          data: value,
        });

        console.log(value);
        this.router.push("/login");
        this.registered = true;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});
