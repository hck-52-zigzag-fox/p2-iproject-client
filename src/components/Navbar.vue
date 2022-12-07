<script>
import { RouterLink } from "vue-router";
export default {
  name: "NavbarVue",
  components: {
    RouterLink,
  },
};
</script>

<template>
  <header class="w-full bg-orange-100">
    <div class="container mx-auto flex justify-between items-center px-1 py-4">
      <RouterLink to="/" class="text-lg font-medium">E-Learning</RouterLink>
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
        <li class="leading-10">
          <RouterLink
            to="/login"
            class="hover:text-teal-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium"
          >
            Login
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>
