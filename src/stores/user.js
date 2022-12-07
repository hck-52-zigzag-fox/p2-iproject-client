import { defineStore } from "pinia";
import axios from 'axios'
import Swal from "sweetalert2";
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
        const  {data} = await axios({
          url:`${baseUrl}/login`,
          method:'post',
          data : input
        })
        localStorage.setItem('access_token',data.access_token)
        localStorage.setItem('email',data.email)
        localStorage.setItem('role',data.role)
        this.isLogin = true
        this.router.push('/')
      } catch (error) {
        console.log(error)
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
        this.isLogin = true
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          background:'rgb(27, 23, 23)',
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
          background:'rgb(27, 23, 23)',
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