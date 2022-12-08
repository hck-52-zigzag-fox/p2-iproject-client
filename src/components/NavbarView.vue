<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { usePublicStore } from "../stores/public";

export default {
  name: 'Navbar',
  computed: {
    ...mapState(usePublicStore, ['loggedIn'])
  },
   methods: {
    ...mapActions(usePublicStore, ['logout'])
   }
}
</script>

<template>
  
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <div class="flex items-center">
        <img src="../assets/22218-fox-face-icon.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white cursor-default">Anim8</span>
    </div>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <RouterLink to="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/animes" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Animes</RouterLink>
        </li>
        <li v-if="loggedIn">
          <RouterLink to="/profile" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</RouterLink>
        </li>
        <li v-if="!loggedIn">
          <RouterLink to="/login" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log In</RouterLink>
        </li>
        <li v-if="loggedIn">
          <div @click.prevent="logout" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log Out</div>
        </li>
        <li v-if="!loggedIn">
          <RouterLink to="/register" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>
