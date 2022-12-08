import { defineStore } from 'pinia'
import axios from "axios"
import Swal from 'sweetalert2'
let baseUrl = 'http://localhost:3000/'
// let baseUrl = 'https://mxone.up.railway.app/'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    name: 'Store',
    movies: [],
    movie: {},
    checkRoute: false,
    genres: [],
    recomendations: [],
    carts: []


  }),
  actions: {
    async fetchMovie(page) {
      console.log(page)
      let link = ''
      if (page) link = page
      else link = ''
      try {
        let { data } = await axios({
          url: baseUrl + 'movies' + link,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        // console.log(data.items)
        this.movies = data.movies
      } catch (error) {
        console.log(error)
      }
    },
    async movieDetail(id) {
      try {
        let { data } = await axios({
          url: baseUrl + `movies/${id}`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })

        this.movie = data
        this.router.push(`/movie/${id}`)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    async login(input) {
      try {
        let { data } = await axios({
          url: baseUrl + 'login',
          method: "POST",
          data: input
        })
        localStorage.setItem('access_token', data.access_token)
        this.router.push('/')
        Swal.fire(
          'Login success',
          "",
          'success'
        )
        // console.log(data)
      } catch (error) {
        // console.log(error.response.data.message)
        Swal.fire(
          error.response.data.message,
          "",
          'error'
        )
      }
    },
    async register(input) {
      try {
        await axios({
          url: baseUrl + 'register',
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          data: input
        })
        this.router.push('/login')
      } catch (error) {
        Swal.fire(
          error.response.data.message,
          "",
          'error'
        )
      }
    },
    async fetchGenre() {
      try {
        let { data } = await axios({
          url: baseUrl + "movies/genre",
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        // console.log(data)
        this.genres = data
      } catch (error) {
        console.log(error)
      }
    },
    logout() {
      localStorage.removeItem("access_token")
      this.router.push('/login')
    },

    async addCart(input) {
      try {
        let { data } = await axios({
          url: baseUrl + 'movies/addToCart',
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          data: input
        })
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    },

    async fetchRecomendation(query) {
      try {
        let link = ''
        if (query) link += query
        let { data } = await axios({
          url: baseUrl + `movies/recomendation` + link,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        // console.log(data)
        this.recomendations = data.results
      } catch (error) {
        console.log(error)
      }
    },
    async fetchCart() {
      try {
        let { data } = await axios({
          url: baseUrl + `movies/cart`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        // console.log(data.cart)
        this.carts = data.cart
      } catch (error) {
        console.log(error)
      }
    },

    async deleteCart(id) {
      try {
        let response = await axios({
          url: baseUrl + `movies/cart/${id}`,
          method: "DELETE",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        Swal.fire(
          response.data.message,
          "1 film dihapus",
          'success'
        )

        return response
      } catch (error) {
        Swal.fire(
          error.response.data.message,
          "",
          'error'
        )
      }
    },
    async payment() {
      try {
        let { data } = await axios({
          url: baseUrl + 'payment/midtrans-generate',
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            Swal.fire(
              'Payment success',
              'Pembayaran anda telah berhasil',
              'success'
            )
            console.log(result);
          },
          onPending: function (result) {
            console.log('pending')
            Swal.fire(
              'Payment success',
              'Pembayaran anda sedang kami process',
              'success'
            )
          },
          onError: function (result) { console.log('error'); console.log(result); },
          onClose: function () {
            console.log('customer closed the popup without finishing the payment')
            Swal.fire(
              'Payment denied',
              'Pembayaran anda gagal',
              'error'
            )
          }
        })
      } catch (error) {
        Swal.fire(
          error.response.data.message,
          '',
          'error'
        )
      }

    }
  }
})
