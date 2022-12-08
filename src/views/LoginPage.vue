<script>
import { mapActions, mapState } from "pinia";
import { useStore } from "../stores";

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
  computed: {
    ...mapState(useStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useStore, ["handleLogin", "fbLogin", "handleGoogleLogin"]),
    async passLoginData(login) {
      await this.handleLogin(login);
      if (this.isLogin) {
        this.$router.push("/");
      }
    },
  },
  mounted() {},
};
</script>

<template>
  <section
    class="d-flex align-items-center"
    style="background-color: lightgray; min-height: calc(100vh - 52.5px)"
  >
    <div class="container h-100">
      <div
        class="row d-flex justify-content-center align-items-center h-100 mt-3"
      >
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://i.pinimg.com/564x/5d/3d/16/5d3d16eb863c4cbdb3d23b30ee8e866f.jpg"
                  alt="login form"
                  class="img-fluid"
                  style="
                    border-radius: 1rem 0 0 1rem;
                    flex-shrink: 0;
                    min-width: 100%;
                    min-height: 100%;
                    object-fit: cover;
                  "
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form @submit.prevent="passLoginData(login)">
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <span class="h1 fw-bold mb-0">Sign In</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                      Sign into your account
                    </h5>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example17"
                        >Email address</label
                      >
                      <input
                        type="email"
                        id="form2Example17"
                        class="form-control form-control-lg"
                        v-model="login.email"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example27"
                        >Password</label
                      >
                      <input
                        type="password"
                        id="form2Example27"
                        class="form-control form-control-lg"
                        v-model="login.password"
                      />
                    </div>

                    <div class="pt-1 mb-4">
                      <button
                        class="btn btn-dark btn-lg btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div
                    class="d-flex justify-content-end align-items-center gap-2"
                  >
                    <!-- put twitter here -->
                    <GoogleLogin :callback="handleGoogleLogin" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
