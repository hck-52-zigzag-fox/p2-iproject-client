<script>
import { mapState, mapActions } from "pinia";
import { useRzStore } from "../stores/counter";

export default {
  name: "Navbar",
  data() {
    return {
      username: localStorage.getItem("username"),
      id: localStorage.getItem("id"),
    };
  },
  computed: {
    ...mapState(useRzStore, ["checkLogin"]),
  },
  methods: {
    ...mapActions(useRzStore, ["logout"]),
  },
};
</script>
<template>
  <nav class="bg-white rounded shadow-lg">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <div class="flex items-center space-x-3 h-20 w-20">
            <img src="../assets/RZ.png" alt="" />
          </div>
          <div class="flex items-center space-x-3">
            <span class="font-bold">RZ Gaming Community</span>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-3">
          <RouterLink
            to="/"
            v-if="checkLogin"
            class="py-4 px-3 text-gray-700 text-1xl font-bold hover:bg-gray-200"
            >Home</RouterLink
          >
          <RouterLink
            to="/login"
            v-if="!checkLogin"
            class="py-4 px-3 text-gray-700 text-1xl font-bold hover:bg-gray-200"
            >Login</RouterLink
          >
          <RouterLink
            to="/register"
            v-if="!checkLogin"
            class="py-4 px-3 text-gray-700 text-1xl font-bold hover:bg-gray-200"
            >Register</RouterLink
          >
          <a
            @click.prevent="logout"
            v-if="checkLogin"
            class="py-4 px-3 text-gray-700 text-1xl font-bold hover:bg-gray-200"
            >Logout</a
          >
          <RouterLink
            :to="`/profiles/${id}`"
            v-if="checkLogin"
            class="py-4 px-3 text-gray-700 text-1xl font-bold hover:bg-gray-200"
            >{{ username }}</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>
