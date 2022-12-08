<script>
import ButtonComponent from "./ButtonComponent.vue";
import { mapActions, mapStores } from "pinia";
import { useDataStore } from "../stores/dataStore";
export default {
  name: "FormLoginRegister",
  data: () => ({
    isClick: false,
    passwordValue: null,
    data: {
      email: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions(useDataStore, ["handleLogin", "handleRegister"]),
    showOrHidePassword() {
      if (this.isClick) this.isClick = false;
      else {
        this.isClick = true;
      }
    },
  },
  props: ["page"],
  components: { ButtonComponent },
};
</script>

<template>
  <!-- **************** MAIN CONTENT START **************** -->
  <main>
    <!-- Container START -->
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100 py-5">
        <!-- Main content START -->
        <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
          <!-- Sign in START -->
          <div class="card card-body text-center p-4 p-sm-5">
            <!-- Title -->
            <h1 v-if="page == 'Login'" class="mb-2">Sign in</h1>
            <p v-if="page == 'Login'" class="mb-0">
              Don't have an account?<a
                @click.prevent="$router.push('/register')"
                href=""
              >
                Click here to sign up</a
              >
            </p>
            <h1 v-if="page == 'Register'" class="mb-2">Sign up</h1>
            <p v-if="page == 'Register'" class="mb-0">
              have an account?<a
                @click.prevent="$router.push('/login')"
                href=""
              >
                Click here to sign in</a
              >
            </p>
            <!-- Form START -->
            <form class="mt-sm-4">
              <!-- Email -->
              <div class="mb-3 input-group-lg">
                <input
                  v-model="data.email"
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                />
              </div>
              <!-- New password -->
              <div class="mb-3 position-relative">
                <!-- Password -->
                <div class="input-group input-group-lg">
                  <input
                    v-if="isClick"
                    v-model="data.password"
                    class="form-control fakepassword"
                    id="psw-input"
                    type="text"
                    placeholder="Enter new password"
                  />

                  <input
                    v-if="!isClick"
                    v-model="data.password"
                    class="form-control fakepassword"
                    id="psw-input"
                    type="password"
                    placeholder="Enter new password"
                  />

                  <span class="input-group-text p-0">
                    <i
                      @click.prevent="showOrHidePassword"
                      class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"
                    ></i>
                  </span>
                </div>
              </div>

              <!-- Button -->
              <ButtonComponent
                @click.prevent="handleLogin(data)"
                v-if="page == 'Login'"
                :page="'Login'"
              />
              <ButtonComponent
                @click.prevent="handleRegister(data)"
                v-if="page == 'Register'"
                :page="'Register'"
              />
              <!-- Copyright -->
              <p class="mb-0 mt-3">
                ©2022
                <a target="_blank" href="">Fian.</a>
                All rights reserved
              </p>
            </form>
            <!-- Form END -->
          </div>
          <!-- Sign in START -->
        </div>
      </div>
      <!-- Row END -->
    </div>
    <!-- Container END -->
  </main>
  <!-- **************** MAIN CONTENT END **************** -->
</template>
