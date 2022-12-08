<script>
import { mapActions } from 'pinia';
import {useUserStore} from '../stores/user'
import { RouterLink } from 'vue-router';
import Navbar from '../component/Navbar.vue';
export default {
    name: "RegisterView",
    data() {
        return {
            inputRegister: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        ...mapActions(useUserStore, ["handleRegister"]),
        handleSubmit() {
            this.handleRegister(this.inputRegister);
        }
    },
    components: { Navbar }
}
</script>

<template>
  <Navbar />
  <div class="limiter max-vh-100" id="login">
    <div
      class="container-login100"
      style="
        background-image: url();
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6"></div>
          <div class="col-md-5 col-md-offset-1">
            <div class="login_topimg"></div>
            <div class="wrap-login100">
              <form
                class="login100-form validate-form"
                @submit.prevent="handleSubmit"
              >
                <span class="login100-form-title"> Register </span>
                <span class="login100-form-subtitle">
                  Already have account?
                  <RouterLink to="/login" class="text-light">
                    login
                  </RouterLink>
                </span>
                <div
                  class="wrap-input100 validate-input m-b-16 mt-4"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    class="input100"
                    type="text"
                    name="Email"
                    placeholder="Email"
                    v-model="inputRegister.email"
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <span class="glyphicon glyphicon-user"></span>
                  </span>
                </div>
                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Password is required"
                >
                  <input
                    class="input100"
                    type="password"
                    name="pass"
                    placeholder="Password"
                    v-model="inputRegister.password"
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <span class="glyphicon glyphicon-lock"></span>
                  </span>
                </div>
                <div class="container-login100-form-btn p-t-25">
                  <button class="login100-form-btn" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>