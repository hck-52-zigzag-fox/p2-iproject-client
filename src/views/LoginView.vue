<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  created() {
    this.getMotivation();
  },
  computed: {
    ...mapState(useCounterStore, ["quotes"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["login", "googleLogin", "getMotivation"]),
  },
};
</script>

<template>
  <div class="row justify-content-center pt-5">
    <div class="col-6">
      <div class="text-center">
        <h1>
          <img
            src="../assets/pngfind.com-gaben-png-113379.png"
            style="max-width: 100px"
          />
        </h1>
        <h4>Lord bersabda:</h4>
        <h6>{{ quotes.split("-")[0] }}</h6>
      </div>
      <form @submit.prevent="login(email, password)">
        <div class="mb-3 mt-3">
          <label for="login-email" class="form-label">Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="login-email"
            placeholder="Email address"
            autocomplete="off"
            required
          />
        </div>
        <div class="mb-3">
          <label for="login-password" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="login-password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <span> or Login with </span>
        <span class="m-2"><GoogleLogin :callback="googleLogin" /></span>
      </form>
    </div>
  </div>
</template>
