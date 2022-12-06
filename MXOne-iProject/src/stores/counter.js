import { defineStore } from 'pinia'
import axios from "axios"
let baseUrl = 'http://localhost:3000/'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    name: 'Store',
    movies: [],
    movie: {}


  }),
  actions: {
    // async fetchMovie() {
    //   try {
    //     let { data } = await axios({
    //       url: baseUrl + 'movies',
    //       method: "GET",
    //     })
    //     // console.log(data.items)
    //     this.movies = data.movies
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
    // async movieDetail(id) {
    //   try {
    //     let { data } = await axios({
    //       url: baseUrl + `movies/${id}`,
    //       method: "GET"
    //     })

    //     this.router.push(`/movie/${id}`)
    //     this.movie = data.movie
    //     // console.log(data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  }
})
