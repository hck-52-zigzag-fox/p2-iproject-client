<script>
export default {
  name: "LoginPage",
};
</script>
<template>
  <div class="flex justify-center">
    <div class="container bg-white w-96 p-6 rounded shadow-lg mt-16">
      <!-- <div class="h-36">
      </div> -->
      <div class="flex items-center justify-center mb-5">
        <div class="flex justify-center h-40 w-40">
          <img src="../assets/RZ.png" alt="" />
        </div>
        <span class="font-bold text-2xl">Login to your Account</span>
      </div>
      <form @submit.prevent="loginToSite(email, password)">
        <label class="text-gray-700">Email*</label>
        <input
          v-model="email"
          class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
          type="text"
        />
        <label class="text-gray-700">Password*</label>
        <input
          v-model="password"
          class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
          type="password"
        />
        <button
          type="submit"
          class="bg-gray-500 w-full text-gray-100 py-2 rounded hover:bg-gray-600 transition-colors mb-4"
        >
          Login
        </button>
      </form>
      <GoogleLogin :callback="callback" />
    </div>
  </div>
</template>
