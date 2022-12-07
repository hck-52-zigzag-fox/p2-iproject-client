import { defineStore } from "pinia";
import axios from "axios";

const urlApi = "http://localhost:8081";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    isLogin: localStorage.getItem("token") ? true : false,
    userToken: localStorage.getItem("token") ?? "",
    listOfCourse: [],
  }),
  actions: {
    async loginUser(credential) {
      try {
        const { data } = await axios.post(`${urlApi}/public/login`, credential);
        localStorage.setItem("token", data?.access_token);
        this.isLogin = true;
        this.userToken = data?.access_token;
        this.router.push("/");
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    },
    async loginGoogle(credential) {
      try {
        const { data } = await axios.post(`${urlApi}/public/login`, credential);
        console.log(data);
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    },
    async getCourses() {
      try {
        const { data } = await axios.get(`${urlApi}/public/courses`);
        this.listOfCourse = data;
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    },
  },
});
