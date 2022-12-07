import axios from 'axios'
import { defineStore } from 'pinia'

const baseUrl = "http://localhost:3000"

export const useCounterStore = defineStore('counter', {
  state: () => ({
    isLogin: false,
    teams: [],
    players: []
  }),
  actions: {
    async register(email, password) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/register`,
          data: { email, password }
        })
        this.router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },

    async login(email, password) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/login`,
          data: { email, password }
        })
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    async logout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/");
    },

    async showTeam() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/teams`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        this.teams = data
      } catch (err) {
        console.log(err);
      }
    },

    async showPlayer() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/players`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        this.players = data
      } catch (err) {
        console.log(err);
      }
    }
  }
})
