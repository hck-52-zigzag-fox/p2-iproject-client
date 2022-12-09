import { defineStore } from "pinia";
import axios from "axios";

const baseURL = `https://rz-gaming-production.up.railway.app`;

export const useRzStore = defineStore("rz", {
  state: () => ({
    checkLogin: false,
    profile: {
      imgUrl: "",
      gender: "",
      dateOfBirth: "",
      location: "",
      games: "",
    },
    id: localStorage.getItem("id"),
    username: localStorage.getItem("username"),
    posts: [],
    games: [],
  }),
  getters: {},
  actions: {
    async logout() {
      localStorage.clear();
      this.checkLogin = false;
      this.router.push("/login");
    },
    async loginToSite(email, password) {
      try {
        let { data } = await axios.post(`${baseURL}/login`, {
          email,
          password,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
        Swal.fire("Login", "Login Success", "success");
        this.id = data.id;
        this.username = data.username;
        this.checkLogin = true;
        this.router.push("/");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.response.data.message,
        });
      }
    },

    async googleLogin(response) {
      try {
        const { data } = await axios.post(
          `${baseURL}/google-sign-in`,
          {},
          {
            headers: {
              google_token: response.credential,
            },
          }
        );
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);

        this.id = data.id;
        this.username = data.username;
        this.checkLogin = true;
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    async register(user) {
      try {
        await axios.post(`${baseURL}/register`, user);
        Swal.fire("Register", "Register Success, please login", "success");
        this.checkLogin = false;
        this.router.push("/login");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Register Failed",
          text: err.response.data.message,
        });
      }
    },

    async addProfile() {
      try {
        const bodyFormData = new FormData();
        bodyFormData.append("imgUrl", this.profile.imgUrl);
        bodyFormData.append("gender", this.profile.gender);
        bodyFormData.append("dateOfBirth", this.profile.dateOfBirth);
        bodyFormData.append("location", this.profile.location);
        bodyFormData.append("games", this.profile.games);

        const { data } = await axios({
          method: "POST",
          url: `${baseURL}/profiles`,
          data: bodyFormData,
          headers: {
            "Content-Type": "multipart/form-data",
            access_token: localStorage.getItem("access_token"),
          },
        });
        Swal.fire("Add Profile", "New Profile, has been added", "success");
        this.router.push("/");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Register Failed",
          text: err.response.data.message,
        });
      }
    },

    async fetchProfileById(id) {
      try {
        let { data } = await axios.get(`${baseURL}/profiles/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.profile = data;
      } catch (err) {
        console.log(err);
      }
    },

    async addPost(content) {
      try {
        await axios.post(
          `${baseURL}/posts`,
          {
            content: content,
            UserId: localStorage.getItem("id"),
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.router.push("/");
        this.fetchPosts();
        content = "";
      } catch (err) {
        console.log(err);
      }
    },

    async fetchPosts() {
      try {
        const { data } = await axios.get(`${baseURL}/posts`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.posts = data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchGames() {
      try {
        const { data } = await axios.get(`${baseURL}/games`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.games = data.slice(0, 8);
      } catch (err) {
        console.log(err);
      }
    },

    getFormattedDate(date, prefomattedDate = false, hideYear = false) {
      const MONTH_NAMES = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const day = date.getDate();
      const month = MONTH_NAMES[date.getMonth()];
      const year = date.getFullYear();
      const hours = date.getHours();
      let minutes = date.getMinutes();

      if (minutes < 10) {
        // Adding leading zero to minutes
        minutes = `0${minutes}`;
      }

      if (prefomattedDate) {
        // Today at 10:20
        // Yesterday at 10:20
        return `${prefomattedDate} at ${hours}:${minutes}`;
      }

      if (hideYear) {
        // 10. January at 10:20
        return `${day}. ${month} at ${hours}:${minutes}`;
      }

      // 10. January 2017. at 10:20
      return `${day}. ${month} ${year}. at ${hours}:${minutes}`;
    },

    timeAgo(dateParam) {
      if (!dateParam) {
        return null;
      }

      const date =
        typeof dateParam === "object" ? dateParam : new Date(dateParam);
      const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
      const today = new Date();
      const yesterday = new Date(today - DAY_IN_MS);
      const seconds = Math.round((today - date) / 1000);
      const minutes = Math.round(seconds / 60);
      const isToday = today.toDateString() === date.toDateString();
      const isYesterday = yesterday.toDateString() === date.toDateString();
      const isThisYear = today.getFullYear() === date.getFullYear();

      if (seconds < 5) {
        return "now";
      } else if (seconds < 60) {
        return `${seconds} seconds ago`;
      } else if (seconds < 90) {
        return "about a minute ago";
      } else if (minutes < 60) {
        return `${minutes} minutes ago`;
      } else if (isToday) {
        return this.getFormattedDate(date, "Today"); // Today at 10:20
      } else if (isYesterday) {
        return this.getFormattedDate(date, "Yesterday"); // Yesterday at 10:20
      } else if (isThisYear) {
        return this.getFormattedDate(date, false, true); // 10. January at 10:20
      }

      return getFormattedDate(date); // 10. January 2017. at 10:20
    },
  },
});
