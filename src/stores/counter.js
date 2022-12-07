import { defineStore } from "pinia";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://framdkgssbeinkvaclys.supabase.co";
const SUPABASE_KEY = "SUPABASE_CLIENT_API_KEY";
const SUPABASE_URL = "https://framdkgssbeinkvaclys.supabase.co";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const baseUrl = `http://localhost:3000`;
import axios from "axios";
export const usePetStore = defineStore("pet", {
  state: () => ({
    isLogin: false,
    city: [],
    order: {},
  }),
  actions: {
    async register(input) {
      try {
        // console.log(`dari counter`);
        const { data } = await axios({
          method: `POST`,
          url: `${baseUrl}/users/register`,
          data: input,
        });
        this.router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
    async login(input) {
      try {
        // console.log(`dari counter`);
        // const { data, error } = await supabase.auth.signInWithOAuth({
        //   provider: 'twitter',
        // }
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/users/login`,
          data: input,
        });
        // console.log(data);
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    // ongkir == post
    async ongkir(input) {
      try {
        const { data } = await axios({
          method: `POST`,
          url: `${baseUrl}/order/ongkir`,
          data: input,
        });
        console.log(input);
        // this.router.push("/");
        this.order = data.rajaongkir.results[0].costs;
      } catch (error) {
        console.log(error);
      }
    },
    async getOngkir() {
      try {
        const { data } = await axios({
          method: `GET`,
          url: `${baseUrl}/order/city`,
        });
        this.city = data.rajaongkir.results;
      } catch (error) {
        console.log(error);
      }
    },
    async updatePayment(id) {
      try {
        const { data } = await axios({
          method: `PATCH`,
          url: `${baseUrl}/order/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
      } catch (error) {}
    },
    // midtrans
    async payment() {
      try {
        const { data } = await axios({
          method: `POST`,
          url: `${baseUrl}/order/payment`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const cb = this.updatePayment;
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            cb();
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
      } catch (error) {}
    },
    async loginTwitter() {
      try {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: "twitter",
        });
      } catch (error) {
        console.log(error);
      }
    },
    async logOutTwitter() {
      try {
        const { error } = await supabase.auth.signOut();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
