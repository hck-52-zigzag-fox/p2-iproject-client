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
          url: `https://steam2.p.rapidapi.com/appDetail/${id.split("-")[0]}`,
          headers: {
            "X-RapidAPI-Key":
              "01c1cc98d4msh9755372740f5ff8p1eada9jsn461d565bc0fe",
            "X-RapidAPI-Host": "steam2.p.rapidapi.com",
          },
        });
        this.game = dataGame.data;
        const dataPrice = await axios({
          method: "GET",
          url: "https://cheapshark-game-deals.p.rapidapi.com/games",
          params: { id: id.split("-")[1] },
          headers: {
            "X-RapidAPI-Key":
              "01c1cc98d4msh9755372740f5ff8p1eada9jsn461d565bc0fe",
            "X-RapidAPI-Host": "cheapshark-game-deals.p.rapidapi.com",
          },
        });
        dataPrice.data.deals.forEach((el) => {
          if (el.storeID == 1) {
            this.gamePrice = this.formatPrice(el.price);
          }
        });
        this.isLoading = false;
      } catch (err) {
        console.log(err);
        this.isLoading = false;
      }
    },
  },
});
