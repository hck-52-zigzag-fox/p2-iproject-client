import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = 'http://localhost:3000'

export const useGirlfriendStore = defineStore("girlfriend", {
  state() {
    return {
      girlfriends: [],
    };
  },
  actions: {
    async fetchGirlfriends() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/profile-girlfriends`,
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.girlfriends = data;
      } catch (error) {
        console.log(error)
      }
    },
  },
  getters: {},
});
