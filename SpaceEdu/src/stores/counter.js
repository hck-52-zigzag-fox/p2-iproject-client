import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3700"

export const useCounterStore = defineStore("counter",{
  
  state:()=> ({
    mainObjects:[]
  }),

  actions:{
    async getMainObjects(){
      try{
        
        const {data} = await axios({
          url: baseUrl + "/planets/mainplanets",
          method:"get"
        })

        console.log('after fetch');
        this.mainObjects = data
      }catch(error){
        console.log(error);

      }
    }
  }
  
});
