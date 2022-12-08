<script>
import { mapActions } from "pinia";
import { useRzStore } from "../stores/counter";

export default {
  name: "RegisterPage",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useRzStore, ["register"]),
  },
};
</script>
<template>
  <div class="flex justify-center">
    <div class="container bg-white w-96 p-6 rounded shadow-lg mt-16 mb-16">
      <div class="flex items-center justify-center mb-10">
        <span class="font-bold text-3xl">Sign up and enjoy</span>
      </div>
      <form @submit.prevent="register(user)">
        <label class="text-gray-700">Username*</label>
        <input
          v-model="user.username"
          class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
          type="text"
        />
        <label class="text-gray-700">Email*</label>
        <input
          v-model="user.email"
          class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
          type="text"
        />
        <label class="text-gray-700">Password*</label>
        <input
          v-model="user.password"
          class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
          type="password"
        />
        <button
          type="submit"
          class="bg-gray-500 w-full text-gray-100 py-2 rounded hover:bg-gray-600 transition-colors mb-4"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>
