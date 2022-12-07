import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export const useCicoStore = defineStore('cico', {
  state: () => (
    {
      isLogin: false,
      popularFood: [],
      userEmail: localStorage.getItem('email'),
      userStatus: localStorage.getItem('status'),
      foundFood: {},
      foodLogs: [],
      calcResult: '',
      dailyCalories: localStorage.getItem('dailyCalories')
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
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/login`,
          data: dataForm
        })
        console.log(data);
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('status', data.status)
        localStorage.setItem('email', data.email)
        localStorage.setItem('dailyCalories', data.dailyCalories)

        this.userEmail = data.email
        this.router.push('/')
        this.isLogin = true


      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    async fetchFood(input) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/food`,
          params: {
            item: input
          }
        })

        this.foundFood = data

      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    async updateStatus() {
      try {
        await axios({
          method: "PATCH",
          url: `${baseUrl}/users`,
          data: {
            status: 'paid'
          },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })

        localStorage.setItem('status', 'paid')
      } catch (error) {
        console.log(error);
      }
    },

    async order() {
      try {

        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/generate-midtrans-token`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }

        })

        const cb = this.updateStatus

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            cb()
          }
        })
      } catch (error) {
        console.log(error);
      }
    },

    async add(id) {
      try {
        await axios({
          method: "POST",
          url: `${baseUrl}/foodlogs/${id}`,
          params: {
            id
          },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })

      } catch (error) {
        console.log(error);
      }
    },

    async getLogs() {
      try {

        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/foodlogs`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })

        this.foodLogs = data

      } catch (error) {
        console.log(error);
      }
    },

    async deleteLog(id){
      try {
        // console.log(id);
        const {data} = await axios ({
          method: "DELETE",
          url: `${baseUrl}/foodlogs/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        
        console.log(data);
        this.getLogs()
      } catch (error) {
        console.log(error);
      }
    }

  },
})
