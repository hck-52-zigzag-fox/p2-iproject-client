<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Register",
  data() {
    return {
      dataRegister: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["register"]),
  },
};
</script>

<template>
  <div class="container text-center">
  </div>
  <div class="container-fluid d-flex w-75">
    <div id="register" class="container text-center w-50">
      <h2 style="color: white">REGISTER</h2>
      <form
        id="register-form"
        v-on:submit.prevent="
          register(this.dataRegister.email, this.dataRegister.password)
        "
      >
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="register-email"
            placeholder="Enter email here"
            autocomplete="off"
            v-model="dataRegister.email"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="register-password"
            placeholder="Enter password here"
            autocomplete="off"
            v-model="dataRegister.password"
          />
        </div>
        <div class="mb-3">
          <button class="btn btn-primary" type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>
