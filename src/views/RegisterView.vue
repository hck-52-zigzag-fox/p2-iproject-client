<script>
import { mapActions } from 'pinia';
import {useUserStore} from '../stores/user'
export default {
  name:"RegisterView",
  data(){
    return {
      inputRegister : {
        email:'',
        password:""
      }
    }
  },
  methods : {
    ...mapActions(useUserStore,['handleRegister']),
    handleSubmmit(){
     this.handleRegister(this.inputRegister) 
    }
  }
}
</script>

<template>
  <div class="container">
    <form>
      <input v-model="inputRegister.email" type="email">
      <input v-model="inputRegister.password" type="password">
    </form>
  </div>
</template>