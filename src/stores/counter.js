import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();
const baseUrl = "https://uap-games-production.up.railway.app";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
    isLoading: true,
    games: [],
    gamePrice: 0,
    unformatPrice: 0,
    game: {},
    myGames: [],
    quotes: "",
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
      this.router.push({ name: "home" });
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
            this.unformatPrice = this.convertCurrency(el.price);
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
    async googleLogin(res) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/users/googleLogin`,
          headers: {
            google_token: res.credential,
          },
        });
        toast.success(`Login Success! Welcome ${data.email.split("@")[0]}`);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        this.isLogin = true;
        this.router.push({ name: "home" });
        this.isLoading = false;
      } catch (err) {
        console.log(err);
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
    async buyGame(id) {
      try {
        const order = await axios({
          method: "POST",
          url: `${baseUrl}/transactions/order`,
          data: {
            steamAppID: id.split("-")[0],
            gameID: id.split("-")[1],
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        const token = await axios({
          method: "POST",
          url: `${baseUrl}/transactions/order/${order.data.id}`,
          data: {
            price: this.unformatPrice,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        snap.pay(token.data.token, {
          onSuccess: async (result) => {
            await axios({
              method: "PATCH",
              url: `${baseUrl}/transactions/order/${order.data.id}`,
              headers: {
                access_token: localStorage.access_token,
              },
            });
            toast.success("Transaction completed");
            console.log(this.router, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
            this.router.push({ name: "mygames" });
          },
          onClose: async () => {
            alert("Your order has been canceled");
            await axios({
              method: "DELETE",
              url: `${baseUrl}/transactions/order/${order.data.id}`,
              headers: {
                access_token: localStorage.access_token,
              },
            });
          },
        });
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
    async fetchOwnedGames(params) {
      try {
        this.isLoading = true;
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/games/mygames`,
          params,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.myGames = data;
        this.isLoading = false;
      } catch (err) {
        toast.error(err.response.data.message);
        this.isLoading = false;
      }
    },
    async getMotivation() {
      try {
        this.isLoading = true;
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/users/motivational`,
        });
        this.quotes = data;
        this.isLoading = false;
      } catch (err) {
        toast.error(err.response.data.message);
        this.isLoading = false;
      }
    },
  },
});
