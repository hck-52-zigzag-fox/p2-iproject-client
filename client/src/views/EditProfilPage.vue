<script>
export default {
  name: "EditProfilePage",
};
</script>
<template>
  <div class="flex justify-center">
    <div class="container bg-white w-96 p-6 rounded shadow-lg mt-16 mb-16">
      <div class="flex items-center justify-center mb-10">
        <span class="font-bold text-3xl">Edit Profile</span>
      </div>
      <form>
        <label class="text-gray-700">Profile Picture*</label>
        <input
          class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
          type="file"
        />
        <label class="text-gray-700">Gender*</label>
        <select class="select block w-full py-2 px-1 mb-4 rounded-md">
          <option value="" selected disabled>-- Select Gender* --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label class="text-gray-700">Date of Birth*</label>
        <input
          class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
          type="date"
        />
        <label class="text-gray-700">Location*</label>
        <input
          class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
          type="text"
        />
        <label class="text-gray-700">Games*</label>
        <input
          class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
          type="text"
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
