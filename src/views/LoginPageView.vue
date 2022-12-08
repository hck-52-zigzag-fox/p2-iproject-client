<script>
import { mapActions } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import { useCounterStore } from "../stores/counter";

export default {
  name: "LoginPage",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["handleLogin", "googleLogin"]),

    callback(res) {
      this.googleLogin(res.credential);
    },
  },
};
</script>

<template>
  <section class="gradient-custom" id="container-login">
    <div class="container py-3">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-4 col-xl-5">
          <div class="card shadow" style="border-radius: 1rem">
            <div class="card-body p-3 text-center">
              <div class="mb-md-3 mt-md-1 pb-1">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-50 mb-3">
                  Please enter your login and password!
                </p>
                <form
                  @submit.prevent="handleLogin(login.email, login.password)"
                >
                  <div class="form-outline form-white mb-2">
                    <label class="form-label" for="typeEmailX">Email</label>
                    <input
                      v-model="login.email"
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-outline form-white mb-2">
                    <label class="form-label" for="typePasswordX"
                      >Password</label
                    >
                    <input
                      v-model="login.password"
                      type="password"
                      id="typePasswordX"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <button
                    class="btn btn-lg px-5"
                    type="submit"
                    style="background-color: #aeefe7"
                  >
                    Login
                  </button>
                </form>
                <div class="d-flex justify-content-center text-center mt-2">
                  <GoogleLogin :callback="callback" style="width: 150px;"/>
                </div>
              </div>
              <div>
                <p>
                  Don't have an account?
                  <RouterLink
                    to="/register"
                    class="text-50 fw-bold"
                    style="color: #30c2c3"
                    >Sign Up</RouterLink
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
