import { defineStore } from "pinia";
import axios from 'axios'
const baseUrl = 'http://localhost:3000'

export const useUserStore =defineStore('user',{
  state(){
    return {
      isLogin :false
    }
  },
  actions : {
    async handleLogin(input){
      try {
        console.log(input)
        const  {data} = await axios({
          url:`${baseUrl}/login`,
          method:'post',
          data : input
        })
        console.log(data)
        localStorage.setItem('access_token',data.access_token)
        this.isLogin = true
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    async handleRegister(input){
      try {
        const  {data} = await axios({
          url:`${baseUrl}/register`,
          method:'post',
          data : input
        })
        console.log(data)
        this.router.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters :  {

  }
})