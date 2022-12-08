import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const usePublicStore = defineStore("public", {
  state() {
    return {
      baseUrl: "https://anim8-production.up.railway.app",
      loggedIn: false,
      logged_username: "",
      logged_id: null,
      top_status: false,
      top_animes: [],
      top_pages: null,
      top_page: null,
      top_type: "",
      all_animes: [],
      all_pages: null,
      all_page: null,
      all_type: "",
      all_status: "",
      all_order_by: "",
      upc_status: false,
      upc_animes: [],
      upc_filter: "",
      upc_pages: null,
      upc_page: null,
      rand_img: "",
      oneAnime: {},
      oneAnimeStatus: false,
      login_email: "",
      login_password: "",
      register_email: "",
      register_password: "",
      register_username: "",
      liked_status: false,
      liked: [],
      user: {},
    };
  },
  actions: {
    async getTopAllTime() {
      try {
        let params = {
          limit: 10,
        };
        if (this.top_page) {
          params = {
            ...params,
            page: this.top_page,
          };
        }
        if (this.top_type) {
          params = {
            ...params,
            type: this.top_type,
          };
        }
        let { data } = await axios.get(this.baseUrl + "/anime/topAll", {
          params,
        });
        // console.log(data.data);
        this.top_status = true;
        this.top_pages = data.pagination.last_visible_page;
        this.top_page = data.pagination.current_page;
        this.top_animes = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getUpcoming() {
      try {
        let params = {
          limit: 10,
        };
        if (this.upc_filter) {
          params = {
            ...params,
            filter: this.upc_filter,
          };
        }
        let { data } = await axios.get(this.baseUrl + "/anime/upcoming", {
          params,
        });
        // console.log(data.data);
        this.upc_status = true;
        this.upc_pages = data.pagination.last_visible_page;
        this.upc_page = data.pagination.current_page;
        this.upc_animes = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getAnime() {
      // console.log('hai');
      try {
        let params = {
          order_by: "score",
          sort: "desc",
          sfw: true,
          limit: 20,
        };
        if (this.all_page) {
          params = {
            ...params,
            page: this.all_page,
          };
        }
        if (this.all_type) {
          params = {
            ...params,
            type: this.all_type,
          };
        }
        if (this.all_status) {
          params = {
            ...params,
            status: this.all_status,
          };
        }
        if (this.all_order_by) {
          params.order_by = this.all_order_by;
        }
        let { data } = await axios.get(this.baseUrl + "/anime/all", { params });
        // console.log(data.data);
        this.all_pages = data.pagination.last_visible_page;
        this.all_page = data.pagination.current_page;
        this.all_animes = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    goToDetail(id) {
      this.oneAnime = {};
      this.oneAnimeStatus = false;
      this.router.push("/detail/" + id);
    },
    async getOneAnime(id) {
      try {
        let { data } = await axios.get(this.baseUrl + "/anime/" + id);
        this.oneAnimeStatus = true;
        this.oneAnime = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getImage() {
      try {
        let { data } = await axios.get(this.baseUrl + "/anime/image");
        this.rand_img = data.url;
      } catch (error) {
        console.log(error);
      }
    },
    changeType() {
      console.log(event.target.value);
      this.all_page = null;
      this.all_type = event.target.value;
      this.getAnime();
    },
    changeStatus() {
      console.log(event.target.value);
      this.all_page = null;
      this.all_status = event.target.value;
      this.getAnime();
    },
    changeOrder() {
      console.log(event.target.value);
      this.all_page = null;
      this.all_order_by = event.target.value;
      this.getAnime();
    },
    clearSearch() {
      this.all_page = null;
      this.all_type = "";
      this.all_status = "";
      this.all_order_by = "";
      this.getAnime();
    },
    incrPage() {
      this.all_page = this.all_page + 1;
      this.getAnime();
    },
    decrPage() {
      this.all_page = this.all_page - 1;
      this.getAnime();
    },
    async login() {
      try {
        let { data } = await axios.post(this.baseUrl + "/users/login", {
          email: this.login_email,
          password: this.login_password,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem(
          "user",
          JSON.stringify({ id: data.id, username: data.username })
        );
        this.logged_username = data.username;
        this.logged_id = data.id;
        this.loggedIn = true;
        this.login_email = "";
        this.login_password = "";
        this.getTopAllTime();
        this.getUpcoming();
        this.getImage();
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      localStorage.clear();
      this.logged_username = "";
      this.logged_id = null;
      this.loggedIn = false;
      this.liked = [];
      this.router.push("/");
    },
    async register() {
      try {
        let { data } = axios.post(this.baseUrl + "/users/register", {
          email: this.register_email,
          username: this.register_username,
          password: this.register_password,
        });
        this.register_email = "";
        this.register_username = "";
        this.register_password = "";
        this.router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    async like(animeId) {
      try {
        // console.log(animeId);
        let { data } = await axios.post(
          this.baseUrl + "/like/" + animeId + "/" + this.logged_id
        );
      } catch (error) {
        console.log(error);
      }
    },
    async getLike() {
      try {
        // console.log("hai");
        let { data } = await axios.get(
          this.baseUrl + "/like/liked/" + this.logged_id
        );
        // console.log(data);
        this.liked_status = true;
        this.liked = data;
      } catch (error) {
        console.log(error);
      }
    },
    async getUser() {
      try {
        let {data} = await axios.get(this.baseUrl + '/users/' + this.logged_id)
        this.user = data
      } catch (error) {
        console.log(error);
      }
    },
    async recommend(animeId) {
      try {
        // console.log('hai');
        let { data } = await axios.patch(
          this.baseUrl + "/like/recommend/" + animeId + "/" + this.logged_id
        );
        this.getLike();
      } catch (error) {
        console.log(error);
      }
    },
    async unrecommend(animeId) {
      try {
        let { data } = await axios.patch(
          this.baseUrl + "/like/unrecommend/" + animeId + "/" + this.logged_id
        );
        this.getLike();
      } catch (error) {
        console.log(error);
      }
    },
    async callback(response) {
      try {
        // console.log(response);
        let { data } = await axios({
          method: "post",
          url: this.baseUrl + "/users/googlelogin",
          headers: {
            google_token: response.credential,
          },
        });
        // console.log(googlelogin);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem(
          "user",
          JSON.stringify({ id: data.id, username: data.username })
        );
        this.loggedIn = true
        this.router.push("/");
        // this.$swal("Logged In!", "Successfully Logged In!", "success");
      } catch (error) {
        console.log(error);
      }
    },
    async changeStatus() {
      try {
        let {data} = await axios.patch(this.baseUrl+'/users/premium/' +this.logged_id)
      } catch (error) {
        console.log(error);
      }
    },
    async paymentmt() {
      try {
        let {data} = await axios({
          method: 'post',
          url: this.baseUrl + '/users/paymentmt/' + this.logged_id,
          headers:{
            access_token : localStorage.getItem('access_token')
          }
        })
        let change = this.changeStatus
        console.log(data.token);
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            change()
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
});
