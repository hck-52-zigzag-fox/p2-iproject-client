import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
const baseUrl = "http://localhost:3000";
export const useDataStore = defineStore("dataStore", {
  state: () => ({
    dataChat: [],
    dataOneProfile: {},
    dataAllPosts: [],
    dataAllProfiles: [],
    dataProfileChat: [],
    dataAllComments: [],
    isPass: false,
    qr: "",
    lokal: [],
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
        this.isPass = false;
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("isPass", false);
        this.router.push("/2FA");
      } catch (err) {
        this.handleError(err);
      }
    },
    async fetchChat(receiverId) {
      try {
        // console.log(`jalann`);
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/users/chat/${receiverId}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.dataChat = data;
      } catch (err) {
        this.handleError(err);
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
      } catch (err) {
        this.handleError(err);
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
      } catch (err) {
        this.handleError(err);
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
      } catch (err) {
        this.handleError(err);
      }
    },
    async fetchAllProfile() {
      try {
        console.log(`jalann`);
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/profiles/all`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.dataAllProfiles = data;
        console.log(this.dataAllProfiles);
      } catch (err) {
        this.handleError(err);
      }
    },
    async fetchOneProfile(id) {
      try {
        console.log(`jalan`);
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/profiles/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.dataProfileChat = data;
      } catch (err) {
        this.handleError(err);
      }
    },
    async handleSendChat(value) {
      try {
        console.log(value, "masuk state<<");
        // const { data } = await axios({
        //   method: "POST",
        //   url: `${baseUrl}/users/chat`,
        //   headers: {
        //     access_token: localStorage.getItem("access_token"),
        //   },
        //   data: value,
        // });
        // console.log(data, "<<<<<");
        this.fetchChat(value.ReceiverId);
      } catch (err) {
        this.handleError(err);
      }
    },
    async getTwoFactorSecret() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/users/2FA`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        let dataSecret = data;

        let save = dataSecret.secret.split("?secret=")[1];
        localStorage.setItem("secret", save);
        const { data: qr } = await axios({
          method: "GET",
          url: `https://api.happi.dev/v1/qrcode?data=${dataSecret.secret}&width=&dots=000000&bg=FFFFFF&apikey=132fdax6K7vXiNZYAZudtI3roSuDSAmbFkGMQh3GU08pySHxOfWNdp2H`,
        });
        this.qr = qr.qrcode;
        return data;
      } catch (err) {
        this.handleError(err);
      }
    },
    async verifyTwoFactorSecret(value) {
      try {
        let token = +value.join("");
        let secret = localStorage.getItem("secret");
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/users/2FA`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            token,
            secret,
          },
        });
        localStorage.setItem("isPass", true);
        this.router.push("/");
      } catch (err) {
        this.handleError(err);
      }
    },
    async handleAddPost(value) {
      try {
        const formData = new FormData();
        formData.append("imgUrl", value.imgUrl);
        formData.append("content", value.content);
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/posts`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: formData,
        });
        this.handleAllPost();
      } catch (err) {
        this.handleError(err);
      }
    },

    async handleAddComment(message, id) {
      try {
        console.log(message, id, "<<<");
        console.log(message, id, "<<<");
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/comments/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            message,
          },
        });
        this.handleAllPost();
      } catch (err) {
        this.handleError(err);
      }
    },
    async handleDeleteComment(id) {
      try {
        const { data } = await axios({
          method: "DELETE",
          url: `${baseUrl}/comments/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.handleAllPost();
      } catch (err) {
        this.handleError(err);
      }
    },
    handleError(err) {
      if (err.response.request.status == 401) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You are not authorized to access this page!",
        });
        this.isLogin = false;
        localStorage.clear();
      } else {
        Swal.fire({
          icon: "error",
          title: `Status : ${err.response.request.status}`,
          text: err.response.data.message,
        });
      }
    },
  },
});
