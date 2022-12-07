import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";
export const useDataStore = defineStore("dataStore", {
  state: () => ({
    dataChat: [],
    dataOneProfile: {},
    dataAllPosts: [],
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
        this.router.push("/");
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
    async handleEditProfile(value) {
      try {
        // console.log(value.name, "masuk state<<");
        const formData = new FormData();
        formData.append("profilePict", value.profilePict);
        formData.append("name", value.name);
        formData.append("dateOfBirth", value.dateOfBirth);
        formData.append("gender", value.gender);
        formData.append("about", value.about);
        formData.append("job", value.job);
        formData.append("company", value.company);
        // console.log(formData, "<<<");
        const { data } = await axios({
          method: "PUT",
          url: `${baseUrl}/profiles/edit`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: formData,
        });
        this.handleOneProfile();
      } catch (error) {
        console.log(error);
      }
    },
    async handleOneProfile() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/profiles`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(data, "<<<");
        this.dataOneProfile = data;
      } catch (error) {
        console.log(error);
      }
    },
    async handleAllPost() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/posts`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.dataAllPosts = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
