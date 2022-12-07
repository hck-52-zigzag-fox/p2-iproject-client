<script>
import { mapActions, mapState } from 'pinia';
import { useStore } from '../stores/store';


export default {
  name: "RegisterForm",
  data() {
    return {
      registerData: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      }
    };
  },
  computed: {
    ...mapState(useStore, ["registered"])
  },
  methods: {
    ...mapActions(useStore, ["register", "handleQuotes"]),
    handleRegister() {
      this.register(this.registerData)
    }
  },
  created() {
    this.handleQuotes()
  }
}
</script>

<template>
  <form @submit.prevent="handleRegister" class="mx-1 mx-md-4">

    <div class="d-flex flex-row align-items-center mb-4">
      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="form3Example1c">Username</label>
        <input v-model="registerData.username" type="text" id="form3Example1c" class="form-control" />
      </div>
    </div>

    <div class="d-flex flex-row align-items-center mb-4">
      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="form3Example3c">Email</label>
        <input v-model="registerData.email" type="email" id="form3Example3c" class="form-control" />
      </div>
    </div>

    <div class="d-flex flex-row align-items-center mb-4">
      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="form3Example4c">Password</label>
        <input v-model="registerData.password" type="password" id="form3Example4c" class="form-control" />
      </div>
    </div>

    <div class="d-flex flex-row align-items-center mb-4">
      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="form3Example5c">Phone Number</label>
        <input v-model="registerData.phoneNumber" type="number" id="form3Example5c" class="form-control" />
      </div>
    </div>

    <div class="d-flex flex-row align-items-center mb-4">
      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="form3Example6c">Address</label>
        <input v-model="registerData.address" type="text" id="form3Example6c" class="form-control" />
      </div>
    </div>

    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
      <button type="submit" class="btn btn-primary btn-lg">Register</button>
    </div>

  </form>
</template>