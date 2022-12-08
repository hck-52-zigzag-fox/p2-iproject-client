<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "facebookLogin",
  methods: {
    ...mapActions(useCounterStore, ["logInWithFacebook"),
  },
};
</script>
<template>
  <div>
    <button class="button" @click="logInWithFacebook">
      Login with Facebook
    </button>
  </div>
</template>
<style>
.button {
  color: white;
  min-width: 150px;
  background-color: #000000a1;
  height: 2.5rem;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}
</style>
