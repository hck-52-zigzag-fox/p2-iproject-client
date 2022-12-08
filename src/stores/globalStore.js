import { defineStore } from "pinia";
import axios from "axios";

const urlApi = "https://jazzed-trees-production.up.railway.app";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    isLogin: localStorage.getItem("token") ? true : false,
    userToken: localStorage.getItem("token") ?? "",
    listOfCourse: [],
    course: {},
    myVideo: [],
    isLoading: false,
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
    async loginGithub(code) {
      try {
        const { data } = await axios.get(
          `${urlApi}/public/login/github?code=${code}`
        );
        localStorage.setItem("token", data?.access_token);
        this.isLogin = true;
        this.userToken = data?.access_token;
        this.router.push("/");
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    },
    async signInGoogle(res) {
      try {
        const { data } = await axios.post(
          `${urlApi}/public/google-login`,
          {},
          {
            headers: {
              google_token: res.credential,
            },
          }
        );
        localStorage.setItem("token", data?.access_token);
        this.isLogin = true;
        this.userToken = data?.access_token;
        this.router.push("/");
      } catch (error) {
        this.showAlertError(error?.response?.data?.message);
      }
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
    },

    async successPayment(trxId, id) {
      try {
        const { data } = await axios.post(
          `${urlApi}/public/success-payment/${id}`,
          { transaction_id: trxId },
          {
            headers: {
              Authorization: `Bearer ${this.userToken}`,
            },
          }
        );
        console.log(data);
        this.router.push("/");
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    },

    async payVideo(id) {
      try {
        const { data } = await axios.post(
          `${urlApi}/public/checkout/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${this.userToken}`,
            },
          }
        );

        const cb = this.successPayment;

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            alert("payment success!");
            cb(result.transaction_id, id);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert("wating your payment!");
            console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert("payment failed!");
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert("you closed the popup without finishing the payment");
          },
        });
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    },
    /**
     * courses
     */
    async getCourses() {
      try {
        const { data } = await axios.get(`${urlApi}/public/courses`);
        this.listOfCourse = data;
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    },
    async getCourse(id) {
      try {
        const { data } = await axios.get(`${urlApi}/public/courses/${id}`);
        this.course = data;
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    },

    async getMyVideo() {
      try {
        const { data } = await axios.get(`${urlApi}/public/mycourse`, {
          headers: {
            Authorization: `Bearer ${this.userToken}`,
          },
        });
        this.myVideo = data;
        console.log(data);
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    },

    async uploadData() {
      try {
        const { data } = await axios.post(`${urlApi}/private/courses`, {
          headers: {
            Authorization: `Bearer ${this.userToken}`,
          },
        });
        this.myVideo = data;
        console.log(data);
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    },

    async createCourse(payload) {
      try {
        let formdata = new FormData();
        formdata.append("name", payload.name);
        formdata.append("thumbnail", payload.thumbnail);
        formdata.append("price", payload.price);
        formdata.append("description", payload.description);
        formdata.append("MentorId", payload.MentorId);

        this.isLoading = true;

        await axios.post(`${urlApi}/private/courses`, formdata, {
          headers: {
            Authorization: `Bearer ${this.userToken}`,
          },
        });
        this.router.push("/");
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    },
    //
  },
});
