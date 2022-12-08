import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
// const baseUrl = "http://localhost:3700"
const baseUrl = "https://nasty-bat-production.up.railway.app"

export const useCounterStore = defineStore("counter", {

  state: () => ({
    mainObjects: [],
    objectDetail: {},
    isLogin:false,
    customObjects:[],
    suggestions:[],
    weather:{}
  }),

  actions: {
    async getMainObjects() {
      try {

        const { data } = await axios({
          url: baseUrl + "/planets/mainplanets",
          method: "get"
        })

        console.log('after fetch');
        this.mainObjects = data
      } catch (error) {
        console.log(error);

      }
    },
    async getObjectDetail(name) {
      try {

          const { data } = await axios({
            url: baseUrl + `/planets/mainplanets/${name}`,
            method: "get"
          })
         


        this.objectDetail = data
        this.router.push(`/object/${name}`)
      } catch (error) {
        console.log(error);
      }
    },

    async queryObjectDetail(query){
      try{

        const { data } = await axios({
          url: baseUrl + `/planets/mainplanets/:planetName?objectName=${query}`,
          method: "get"
        })

        this.objectDetail = data
        this.router.push(`/object/${query}`)

      }catch{
        console.log(error);
      }
    },

    async login(input){
      try{

        const {data} = await axios({
          url:baseUrl + "/users/login",
          method:"post",
          data:{
            email:input.email,
            password:input.password
          }
        })

        this.isLogin = true
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("email", data.email)

        this.router.push("/")


      }catch(error){
        console.log(error);
      }
    },

    logout(){
      this.isLogin=false
      localStorage.clear()
    },

    async createObject(input){
      try{

        const {data} = await axios({
          url:baseUrl + "/planets/createobject",
          method:"post",
          data:{
            name:input.name,
            type:input.type,
            imageUrl:input.appearance
          },
          headers:{access_token:localStorage.getItem("access_token")}
        })

        this.router.push("/creatorssystem")

      }catch(error){
        console.log(error);
      }
    },

    async getCustomObject(){
      try{

        console.log(`test from getCustom`);
        const {data} = await axios ({
          url:baseUrl + "/planets/customobjects",
          method:"get"
        })

        this.customObjects = data

      }catch(error){
        console.log(error);
      }
    },

    async getSuggestions(){
      try{

        const {data} = await axios({
          url:baseUrl + "/planets/suggestions",
          method:"get"
        })

        this.suggestions = data
      }catch(error){
        console.log(error);
      }
    },

    async register(input){
      try{

        const {data} = await axios({
          url:baseUrl + "/users/register",
          method:"post",
          data:{
            email:input.email,
            password:input.password
          }
        })

        this.router.push("/login")
      }catch(error){
        console.log(error);
      }
    },

    async checkWeather(){
      try{

        // console.log(city, "test");
        const{data} =  await axios({
          url:baseUrl + `/weathers`,
          method:"get"
        })

        this.weather = data
      }catch(error){
        console.log(error);
      }
    }
  }


});
