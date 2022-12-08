<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import { GoogleLogin } from "vue3-google-login";
export default {
  name: "Login",
  components: { GoogleLogin },
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["login", "loginGoogle"]),
  },
};
</script>

<template>
  <div class="container text-center">
    <img src="../image/logo-rentroom.png" alt="" />
  </div>
  <div class="container-fluid d-flex w-75">
    <div id="login" class="container text-center w-50">
      <h2 style="color: white">LOGIN</h2>
      <form
        id="login-form"
        v-on:submit.prevent="
          login(this.dataLogin.email, this.dataLogin.password)
        "
      >
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="login-email"
            placeholder="Enter email here"
            autocomplete="off"
            v-model="dataLogin.email"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="login-password"
            placeholder="Enter password here"
            autocomplete="off"
            v-model="dataLogin.password"
          />
        </div>
        <div>
          <button class="btn btn btn-primary" type="submit">Login</button>
        </div>
        <p style="color: white" class="text-center mt-3 mb-0">
          Don't have an account?
          <a
            href=""
            class="fw-bold link-blue"
            @:click.prevent="this.$router.push('/register')"
            >Register here!</a
          >
        </p>
        <div class="d-flex justify-content-center" style="margin-top: 50px;">
          <GoogleLogin :callback="loginGoogle" />
        </div>
      </form>
    </div>
  </div>
</template>
