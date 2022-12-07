import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export const useCicoStore = defineStore('cico', {
  state: () => (
    {
      isLogin: false,
      popularFood: [],
      userEmail: '',
      userStatus: ''
    }),
  actions: {
    logout() {
      localStorage.clear()
      this.isLogin = false
      this.router.push('/')
    },
    async fetchPopularFood() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/popularfood`
        })

        this.popularFood = data

      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    async register(dataForm) {
      try {
        await axios({
          method: "POST",
          url: `${baseUrl}/register`,
          data: dataForm
        })

        this.router.push('/login')

      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    async login(dataForm) {
      try {
        const {data} = await axios({
          method: "POST",
          url: `${baseUrl}/login`,
          data: dataForm
        })

        localStorage.setItem('access_token', data.access_token)
        this.userEmail = data.email
        this.userStatus = data.status
        this.router.push('/')
        this.isLogin = true

      } catch (error) {
        console.log(error.response.data.message);
      }
    }

  },
})
