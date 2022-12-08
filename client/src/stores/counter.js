import { defineStore } from "pinia";
import axios from "axios";

const baseURL = `http://rz-gaming-production.up.railway.app`;

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
    posts: [],
  }),
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

        this.checkLogin = true;
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    async register(user) {
      try {
        await axios.post(`${baseURL}/register`, user);
        this.checkLogin = false;
        this.router.push("/login");
      } catch (err) {
        console.log(err);
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
        this.router.push("/profiles");
      } catch (err) {
        console.log(err);
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
  },
});
