import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";
export const useChatStore = defineStore("chat", {
  state() {
    return {
      chats: [],
    };
  },
  actions: {
    async myChat(id) {
      try {
        const { data } = await axios({
          url: `${baseUrl}/chats/${id}`,
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.chats = data;
      } catch (error) {
        console.log(error);
      }
    },
    async saveChat(input, id) {
      try {
        console.log(input, id, "dari chat store");
        await axios({
          url: `${baseUrl}/chats/${id}`,
          data: {
            text: input,
          },
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.myChat();
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
});
