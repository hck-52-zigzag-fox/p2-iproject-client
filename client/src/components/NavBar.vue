<script>
export default {
  name: "Navbar",
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
          <a
            class="py-4 px-3 text-gray-700 text-1xl font-bold hover:bg-gray-200"
            >Home</a
          >
          <a
            class="py-4 px-3 text-gray-700 text-1xl font-bold hover:bg-gray-200"
            >Login</a
          >
          <a
            class="py-4 px-3 text-gray-700 text-1xl font-bold hover:bg-gray-200"
            >Register</a
          >
          <a
            class="py-4 px-3 text-gray-700 text-1xl font-bold hover:bg-gray-200"
            >Logout</a
          >
          <a
            class="py-4 px-3 text-gray-700 text-1xl font-bold hover:bg-gray-200"
            >email</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
