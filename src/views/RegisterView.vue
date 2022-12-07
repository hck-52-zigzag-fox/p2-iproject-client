<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["register"]),
  },
};
</script>

<template>
  <div class="row justify-content-center pt-5">
    <div class="col-5">
      <div class="text-center">
        <h1>
          <img
            src="../assets/pngfind.com-gaben-png-113379.png"
            style="max-width: 100px"
          />
        </h1>
        <h4>Lord bersabda:</h4>
        <h1>Register and enjoy</h1>
      </div>
      <form @submit.prevent="register(email, password)">
        <div class="mb-3 mt-3">
          <label for="register-email" class="form-label">Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="register-email"
            placeholder="Email address"
            autocomplete="off"
            required
          />
        </div>
        <div class="mb-3">
          <label for="register-password" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="register-password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
</template>
