import { defineStore } from 'pinia'
import axios from "axios"
let baseUrl = ''

export const useCounterStore = defineStore('counter', {
  state: () => ({
    name: 'Store',
    movies: [],
    movie: {}


  }),
  actions: {
    async fetchMovie() {
      try {
        let { data } = await axios({
          url: 'https://api.themoviedb.org/3/list/1?api_key=c4d809a9cf31fcc2c4d624e115c02593&language=en-US',
          method: "GET",
        })
        console.log(data.items)
        this.movies = data.items
      } catch (error) {
        console.log(error)
      }
    },
    async movieDetail(id) {
      try {
        let { data } = await axios({
          url: `https://api.themoviedb.org/3/movie/${id}?api_key=c4d809a9cf31fcc2c4d624e115c02593&language=en-US`,
          method: "GET"
        })

        this.router.push(`/movie/${id}`)
        this.movie = data
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
