import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();
const baseUrl = "http://localhost:3000";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
    isLoading: true,
    games: [],
    gamePrice: 0,
    game: {},
  }),
  actions: {
    convertCurrency(price) {
      return +price * 15000;
    },
    formatPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.convertCurrency(price));
    },
    logout() {
      toast.info(`Success! Logout success!`);
      localStorage.clear();
      this.isLogin = false;
    },
    async fetchGamesList(params) {
      try {
        this.isLoading = true;
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/games`,
          params,
        });
        this.games = data;
        this.isLoading = false;
      } catch (err) {
        toast.error(err.response.data.message);
        this.isLoading = false;
      }
    },
    async fetchOneGame(id) {
      try {
        this.isLoading = true;
        const dataGame = await axios({
          method: "GET",
          url: `${baseUrl}/games/steam/${id.split("-")[0]}`,
        });
        this.game = dataGame.data;
        const dataPrice = await axios({
          method: "GET",
          url: `${baseUrl}/games/cheapshark/${id.split("-")[1]}`,
        });
        dataPrice.data.deals.forEach((el) => {
          if (el.storeID == 1) {
            this.gamePrice = this.formatPrice(el.price);
          }
        });
        this.isLoading = false;
      } catch (err) {
        toast.error(err.response.data.message);
        this.isLoading = false;
      }
    },
    async login(email, password) {
      try {
        this.isLoading = true;
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/users/login`,
          data: {
            email,
            password,
          },
        });
        toast.success(`Login success! Welcome ${data.email.split("@")[0]}`);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        this.isLogin = true;
        this.router.push({ name: "home" });
        this.isLoading = false;
      } catch (err) {
        toast.warning(err.response.data.message);
        this.isLoading = false;
      }
    },
    async register(email, password) {
      try {
        this.isLoading = true;
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/users/register`,
          data: {
            email,
            password,
          },
        });
        toast.success(
          `Success! Successfully create an account with email ${data.email}`
        );
        this.router.push({ name: "login" });
        this.isLoading = false;
      } catch (err) {
        toast.warning(err.response.data.message.join(", "));
        this.isLoading = false;
      }
    },
  },
});
