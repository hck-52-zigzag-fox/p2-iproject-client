<script>
import { mapActions } from "pinia";
import { useCustomerStore } from "../stores/customerStore";
export default {
  name: "Register",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useCustomerStore, ["register"]),
    handleRegister() {
      console.log(`masuk register`);
      console.log(this.user,`<<<<<<<<<<<<`)
      this.register(this.user);
      this.username = "";
      this.email = "";
      this.password = "";
      this.phoneNumber = "";
      this.address = "";
    },
  },
};
</script>
<template>
  <section class="container" id="login-section">
    <div class="row" style="z-index: 1; position: relative">
      <div class="col-12 text-center">
        <h1 class="mb-3 mt-5">Tops-Brand Register</h1>
        <h4>Sign up</h4>
      </div>
    </div>
    <div class="row">
      <div class="col"></div>
      <!-- Register -->
      <div class="col">
        <div class="form-signin m-auto">
          <div
            class="justify-content-center border rounded p-5 mt-5"
            id="register-form"
          >
            <form @submit.prevent="handleRegister">
              <div class="mb-3">
                <h1>Register</h1>
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="register-username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter your username ..."
                  v-model="user.username"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="register-email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Email ..."
                  v-model="user.email"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="register-password"
                  class="form-control"
                  id="password"
                  placeholder="Enter your Password ..."
                  v-model="user.password"
                />
              </div>
              <div class="mb-3">
                <label for="register-phone" class="form-label"
                  >Phone Number</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="register-phone"
                  placeholder="Enter phone number (optional) ..."
                  autocomplete="off"
                  v-model="user.phoneNumber"
                />
              </div>
              <div class="mb-3">
                <label for="register-address" class="form-label">Address</label>
                <textarea
                  id="register-address"
                  class="form-control"
                  rows="3"
                  placeholder="Enter your address (optional) ..."
                  autocomplete="off"
                  v-model="user.address"
                ></textarea>
              </div>

              <button>Register</button>
            </form>
          </div>
        </div>
        <!-- End of Register Form -->
      </div>
    </div>
    <img src="https://cdn-icons-png.flaticon.com/512/53/53183.png" alt="" style="position:absolute; bottom:0.2cm">
  </section>
</template>
