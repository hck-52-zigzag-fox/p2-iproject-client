<script>
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import { useGlobalStore } from "../stores/globalStore";

export default {
  name: "NavbarVue",
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useGlobalStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["logout"]),
  },
};
</script>

<template>
  <header class="w-full bg-orange-100">
    <div class="container mx-auto flex justify-between items-center px-1 py-4">
      <RouterLink to="/" class="text-lg font-medium">VideoKu</RouterLink>
      <ul
        class="transition-all duration-200 items-center fixed inset-0 pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible"
      >
        <li class="leading-10">
          <RouterLink
            to="/"
            class="hover:text-teal-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium"
          >
            Home
          </RouterLink>
        </li>
        <li class="leading-10" v-if="!isLogin">
          <RouterLink
            to="/login"
            class="hover:text-teal-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium"
          >
            Login
          </RouterLink>
        </li>
        <li class="leading-10" v-if="!isLogin">
          <RouterLink
            to="/register"
            class="hover:text-teal-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium"
          >
            Register
          </RouterLink>
        </li>
        <li class="leading-10" v-if="isLogin">
          <RouterLink
            to="/my-video"
            class="hover:text-teal-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium"
          >
            My Video
          </RouterLink>
        </li>
        <li class="leading-10" v-if="isLogin">
          <RouterLink
            to="/upload"
            class="hover:text-teal-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium"
          >
            Create Course
          </RouterLink>
        </li>
        <li class="leading-10" v-if="isLogin">
          <button
            @click="logout"
            class="hover:text-teal-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>
