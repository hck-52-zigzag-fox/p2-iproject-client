<script>
import { GoogleLogin } from "vue3-google-login";
import { usePetStore } from "../stores/counter";
import { mapActions } from "pinia";
export default {
    name: "LoginView",
    data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  methods:{
    ...mapActions(usePetStore, ['login', 'handleGoogleLog']),
    async googleLog(input) {
      // console.log(input);
      await this.handleGoogleLog(input);
    }
  }
}
</script>

<template>
  <section class="h-100 h-custom" style="background-color: #8fc4b7">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-8 col-xl-6">
          <div class="card rounded-3">
            <img
              src="https://www.faunafella.com/wp-content/uploads/2020/05/pet-shop-murah-jakarta.png"
              style="
              border-top-left-radius: 0.3rem;
                border-top-right-radius: 0.3rem;
              "
              alt="Sample photo"
            />
            <div class="card-body p-4 p-md-5">
              <form class="px-md-2" @submit.prevent="login(input)">
                <label class="form-label" for="form3Example1q">Email</label>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1q" class="form-control" 
                  v-model="input.email"
                  />
                </div>
                <label class="form-label" for="form3Example1w"
                  >Password</label
                >
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example1q" class="form-control" 
                  v-model="input.password"
                  />
                </div>
                <button type="submit" class="btn btn-success btn-lg mb-1">
                  Submit
                </button>
              </form>
            </div>
            <GoogleLogin :callback="googleLog" />
            <br> <br>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>