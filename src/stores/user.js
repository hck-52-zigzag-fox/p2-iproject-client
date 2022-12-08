import { defineStore } from "pinia";
import axios from 'axios'
import Swal from "sweetalert2";
const baseUrl = 'https://iproject-rent-me.up.railway.app'

export const useUserStore =defineStore('user',{
  state(){
    return {
      isLogin :false
    }
  },
  actions : {
    async handleLogin(input){
      try {
        const  {data} = await axios({
          url:`${baseUrl}/login`,
          method:'post',
          data : input
        })
        localStorage.setItem('access_token',data.access_token)
        localStorage.setItem('email',data.email)
        localStorage.setItem('role',data.role)
        this.isLogin = true
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          background:'rgb(185, 100, 100)',
          color:'white',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully',
          text: `Welcome ${data.email}`
        })
        this.router.push('/')

      } catch (error) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          background:'rgb(185, 100, 100)',
          color:'white',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Sign in failed',
          text: `${error.response.data.msg}`
        })
      }
    },
    async handleCredentialResponse(response) {
      try {
        const credential = response.credential;
        const { data } = await axios({
          method: "post",
          url: `${baseUrl}/google-login`,
          headers: {
            google_token: credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem('role',data.role)
        this.isLogin = true
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          background:'rgb(185, 100, 100)',
          color:'white',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully',
          text: `Welcome ${data.email}`
        })
        this.router.push('/')
      } catch (error) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          background:'rgb(185, 100, 100)',
          color:'white',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Sign in failed',
          text: `${error.response.data.msg}`
        })
      }
    },
    async handleRegister(input){
      try {
        await axios({
          url:`${baseUrl}/register`,
          method:'post',
          data : input
        })
        this.router.push('/login')
      } catch (error) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          background:'rgb(185, 100, 100)',
          color:'white',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Register failed',
          text: `${error.response.data.msg}`
        })
      }
    }
  },
  getters :  {

  }
})