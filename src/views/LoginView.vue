<script>
import { mapActions } from 'pinia';
import {useUserStore} from '../stores/user'
export default {
  name:"LoginView",
  data(){
    return {
      inputLogin : {
        email:'',
        password:""
      }
    }
  },
  methods : {
    ...mapActions(useUserStore,['handleLogin']),
    handleSubmmit(){
     this.handleLogin(this.inputLogin) 
    }
  }
}
</script>

<template>
  <div class="container d-column">
    <h1>login form</h1>
    <form @submit.prevent="handleSubmmit" class="form d-column">
      <div>
        <input v-model="inputLogin.email" type="email">
      </div>
      <div>
        <input v-model="inputLogin.password" type="password">
      </div>
      <input type="submit" value="login"/>
    </form>
  </div>
</template>