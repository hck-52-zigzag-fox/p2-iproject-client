import { defineStore } from "pinia";
const baseUrl = `http://localhost:3000`;
import Swal from 'sweetalert2'
import axios from "axios";
export const usePetStore = defineStore("pet", {
  state: () => ({
    isLogin: false,
    city: [],
    order: [],
    product: [],
    wishlist: [],
  }),
  getters: {
    totalPrice(state) {
      let total = 0;
      state.wishlist.forEach((e, i) => {
        if (e.Product) {
          total += e.Product.price;
        }
      });
      return total;
    },
  },
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
        this.handleError(err[0])
      }
    },
    async login(input) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/users/login`,
          data: input,
        });
        // console.log(data);
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        this.handleError(error)
      }
    },
    async handleGoogleLog(input){
      try {
        // console.log(input.credential,'dari bapaknya');
        const credentials = input.credential
        const {data} = await axios({
          method: "POST",
          url: `${baseUrl}/google-sign-in`,
          headers: {
            google_token: credentials
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true;
        this.router.push('/')
      } catch (error) {
        this.handleError(error)
      }
    },
    async fetchProduct() {
      try {
        const { data } = await axios({
          method: `GET`,
          url: `${baseUrl}/product`,
        });
        this.product = data;
      } catch (error) {
        this.handleError(error)
      }
    },
    //order menuju wishlist
    async addProduct(id, qty) {
      try {
        const { data } = await axios({
          method: `POST`,
          url: `${baseUrl}/order/add/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            quantity: qty,
          },
        });
        this.router.push("/checkout");
        this.listWishlist();
      } catch (error) {
        this.handleError(error)
      }
    },
    async listWishlist() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/order`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.wishlist = data;
      } catch (error) {
        this.handleError(error)
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
        this.order = data.rajaongkir.results[0].costs;
      } catch (error) {
        this.handleError(error)
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
        this.handleError(error)
      }
    },
    async deleteOrder(id) {
      try {
        const { data } = await axios({
          method: `DELETE`,
          url: `${baseUrl}/order/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.router.push("/checkout");
        this.listWishlist();
      } catch (error) {
        this.handleError(error)
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
      } catch (error) {
        this.handleError(error)
        
      }
    },
    // midtrans
    async payment(totalPrice,shipping) {
      try {
        // console.log(totalPrice, shipping);
        const { data } = await axios({
          method: `POST`,
          url: `${baseUrl}/order/payment`,
          data:{
            totalPrice,shipping
          },
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
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert("payment failed!");
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert("you closed the popup without finishing the payment");
          },
        });
      } catch (error) {
        this.handleError(error)
      }
    },
    handleLogout() {
      localStorage.clear();
      this.isLogin = false
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Success signout account',
        showConfirmButton: false,
        timer: 1500
      })
    },
    handleError(err){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data.message,
      })
    }
  },
});
