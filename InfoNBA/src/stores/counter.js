import axios from 'axios'
import { defineStore } from 'pinia'
import Toastify from 'toastify-js'

const baseUrl = "http://localhost:3000"

export const useCounterStore = defineStore('counter', {
  state: () => ({
    isLogin: false,
    status: "",
    teams: [],
    players: [],
    matches: []
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
        Toastify({
          text: "Succes Register",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000
        }).showToast();
      } catch (err) {
        Toastify({
          text: `${err.response.data.message[0]}`,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000
        }).showToast();
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
        localStorage.setItem("status", data.status);
        this.status = localStorage.getItem("status");
        this.isLogin = true;
        this.router.push("/");
        Toastify({
          text: "Succes Login",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000
        }).showToast();
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000
        }).showToast();
      }
    },

    async loginGoogle(response) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/login-google`,
          headers: {
            google_token: response.credential,
          }
        })
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("status", data.status);
        this.status = localStorage.getItem("status");
        this.isLogin = true;
        this.router.push("/");
        Toastify({
          text: "Succes Login",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000
        }).showToast();
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000
        }).showToast();
      }
    },

    async logout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/");
      Toastify({
        text: "Succes Logout",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        duration: 3000
      }).showToast();
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
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000
        }).showToast();
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
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000
        }).showToast();
      }
    },

    async showMatch() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/matches`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        this.matches = data
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000
        }).showToast();
      }
    }
  }
})
