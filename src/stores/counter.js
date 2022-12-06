import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useCounterStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
    games: [],
  }),
  actions: {
    formatPrice(price) {
      price = +price * 15000;
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
    },
    async fetchGamesList() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://cheapshark-game-deals.p.rapidapi.com/deals",
          params: {
            lowerPrice: "0",
            steamRating: "0",
            desc: "0",
            output: "json",
            steamworks: "true",
            sortBy: "Deal Rating",
            AAA: "0",
            pageSize: "8",
            exact: "0",
            upperPrice: "50",
            pageNumber: "0",
            onSale: "0",
            metacritic: "0",
            "storeID[0]": "1",
          },
          headers: {
            "X-RapidAPI-Key":
              "01c1cc98d4msh9755372740f5ff8p1eada9jsn461d565bc0fe",
            "X-RapidAPI-Host": "cheapshark-game-deals.p.rapidapi.com",
          },
        });
        this.games = data;
      } catch (err) {
        // toast.error(err.response.data.message);
        toast.error(err.response.data);
      }
    },
  },
});
