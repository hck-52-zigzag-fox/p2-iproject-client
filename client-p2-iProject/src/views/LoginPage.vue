<script>
import { mapActions } from "pinia";
import { useCustomerStore } from "../stores/customerStore";
import { RouterLink } from "vue-router";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCustomerStore, ["login", "googleLogin"]),
    handleLogin() {
      this.login(this.user);
      this.user.email = "";
      this.user.password = "";
    },
    callback(response) {
      this.googleLogin(response);
    },
  },
};
</script>
<template>
  <section class="container" id="login-section">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="mb-3 mt-5">Shopping Comparement App</h1>
        <span>Log in or Sign up First!</span>
      </div>
    </div>
    <div class="row">
      <!-- Login form -->
      <div class="col">
        <div class="form-signin m-auto">
          <div
            class="justify-content-center border rounded p-5 mt-5"
            id="login-form"
          >
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <h1>Login</h1>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="login-email"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email ..."
                  v-model="user.email"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="login-password"
                  placeholder="Enter Your Password ..."
                  v-model="user.password"
                />
              </div>
              <button>Login</button>
              <hr />
              <GoogleLogin :callback="callback" />
              <hr/>
              <div>
                <p>
                  Don't have an account?
                  <RouterLink to="/register" class="text-black-50 fw-bold"
                    >Sign Up</RouterLink
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- BIAR KE KIRI -->
      <div class="col"></div>
    </div>
    <img src="https://cdn-icons-png.flaticon.com/512/181/181795.png" alt="" style="position:absolute; left:25cm; bottom: 0.5cm;">
  </section>
</template>
