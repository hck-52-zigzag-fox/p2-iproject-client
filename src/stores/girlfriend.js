import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = 'https://iproject-rent-me.up.railway.app'

export const useGirlfriendStore = defineStore("girlfriend", {
  state() {
    return {
      girlfriends: [],
    };
  },
  actions: {
    async fetchGirlfriends() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/profile-girlfriends`,
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.girlfriends = data;
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
