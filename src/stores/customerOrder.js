import axios from "axios";
import { defineStore } from "pinia";
const baseUrl = "https://iproject-rent-me.up.railway.app";
import Swal from 'sweetalert2'

export const useCustomerOrderStore = defineStore("customerOrder", {
  state() {
    return {
      token: "",
      orderDetail:{},
      orders : []
    };
  },
  actions: {
    async myOrders(){
      try {
        const {data} = await axios({
          url:`${baseUrl}/customer-orders`,
          method:'get',
          headers : {
            access_token : localStorage.access_token
          }
        })
        this.orders = data
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
    async addOrder(input, id) {
      try {
        const { data } = await axios({
          url: `${baseUrl}/customer-orders/${id}`,
          method: "post",
          data: input,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.token = data.token;
        this.orderDetail = data.order
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
    async handlePayment(token) {
      window.snap.pay(token, {
        onSuccess: function (result) {
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
            title: 'Success process your payment. happy dating',
          })
        },
        onPending: function (result) {
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
            title: 'Please wait we are processing your payment',
          })
        },
        onError: function (result) {
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
            text: `${result}`
          })
        },
        onClose: function () {
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
          })
        },
      });
      this.token = ""
    },
  },
  getters: {},
});
