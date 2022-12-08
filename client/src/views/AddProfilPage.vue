<script>
import { mapState, mapActions } from "pinia";
import { useRzStore } from "../stores/counter";

export default {
  name: "AddProfilePage",
  computed: {
    ...mapState(useRzStore, ["profile"]),
  },
  methods: {
    ...mapActions(useRzStore, ["addProfile"]),
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      console.log(e.target.files);

      this.profile.imgUrl = e.target.files[0];
    },
  },
};
</script>
<template>
  <div class="flex justify-center">
    <div class="container bg-white w-96 p-6 rounded shadow-lg mt-16 mb-16">
      <div class="flex items-center justify-center mb-10">
        <span class="font-bold text-3xl">Add New Profile</span>
      </div>
      <form @submit.prevent="addProfile">
        <label class="text-gray-700">Profile Picture*</label>
        <input
          @change="onFileChange"
          class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
          type="file"
        />
        <label class="text-gray-700">Gender*</label>
        <select
          v-model="profile.gender"
          class="select block w-full py-2 px-1 mb-4 rounded-md"
        >
          <option value="" selected disabled>-- Select Gender* --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label class="text-gray-700">Date of Birth*</label>
        <input
          v-model="profile.dateOfBirth"
          class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
          type="date"
        />
        <label class="text-gray-700">Location*</label>
        <input
          v-model="profile.location"
          class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
          type="text"
        />
        <label class="text-gray-700">Games*</label>
        <input
          v-model="profile.games"
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
