import { defineStore } from 'pinia'
import axios from "axios"
let baseUrl = 'http://localhost:3000/'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    name: 'Store',
    movies: [],
    movie: {},
    checkRoute: false,
    genres: []


  }),
  actions: {
    async fetchMovie(page) {
      console.log(page)
      let link = ''
      if (page) link = page
      try {
        let { data } = await axios({
          url: baseUrl + 'movies' + link,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        console.log(data.items)
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
        // console.log(data)
      } catch (error) {
        // if (error.response.statusText === 'Unauthorized') {
        //   this.$router.push('/login')
        // }
        console.log(error)
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
        console.log(error)
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
        console.log(data)
        this.genres = data
      } catch (error) {
        // console.log(error)
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
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
  }
})
