import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";
export const useDataStore = defineStore("dataStore", {
  state: () => ({
    dataChat: [],
  }),
  getters: {},
  actions: {
    async handleLogin(value) {
      try {
        // console.log(value, "masuk state<<");
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/users/login`,
          data: value,
        });
        // console.log(data, "<<<<<");
        localStorage.setItem("access_token", data.access_token);
        this.router.push("/chat");
      } catch (error) {
        console.log(error);
      }
    },
    async fetchChat(receiverId) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/users/chat/${receiverId}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.dataChat = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
