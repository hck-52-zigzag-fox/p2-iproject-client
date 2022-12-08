import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "https://iproject-rent-me.up.railway.app";
import Swal from "sweetalert2";
export const useChatStore = defineStore("chat", {
  state() {
    return {
      chats: [],
    };
  },
  actions: {
    async myChat(id) {
      try {
        const { data } = await axios({
          url: `${baseUrl}/chats/${id}`,
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.chats = data;
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
          text: `${error.response.data.msg}`
        })
      }
    },
    async saveChat(input, id) {
      try {
        await axios({
          url: `${baseUrl}/chats/${id}`,
          data: {
            text: input,
          },
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.myChat();
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
          title: 'Your message has been send',
        })
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
          text: `${error.response.data.msg}`
        })
      }
    },
  },
  getters: {},
});
