<script>
import { mapActions, mapState } from "pinia";

import NavbarVue from "../components/Navbar.vue";
import FooterVue from "../components/Footer.vue";
import ButtonVue from "../components/Button.vue";
import { useGlobalStore } from "../stores/globalStore";

export default {
  name: "UploadVue",
  components: {
    NavbarVue,
    FooterVue,
    ButtonVue,
  },
  data() {
    return {
      payload: {
        name: "",
        price: "",
        description: "",
        MentorId: 1,
        thumbnail: "",
      },
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["isLoading"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["createCourse"]),

    handleSubmit(evt) {
      this.payload.thumbnail = evt.target.files[0];
    },
    handleVideo(evt) {
      this.payload.description = evt.target.files[0];
    },
  },
};
</script>

<template>
  <NavbarVue />
  <div class="grid grid-cols-1 container mx-auto p-10 my-10 gap-5">
    <main class="mx-auto md:w-6/12">
      <h1 class="text-2xl text-center md:text-left text-gray-900 mb-6">
        <span class="font-bold">Create Course </span>
      </h1>
      <form @submit.prevent="createCourse(payload)">
        <div class="flex flex-col mb-4">
          <label htmlFor="email" class="text-lg mb-2 capitalize">
            course name</label
          >

          <input
            v-model="payload.name"
            name="name"
            type="type"
            class="bg-white focus:outline-none border w-full px-4 py-3 border-gray-600 focus:border-teal-500"
            placeholder="course name"
          />
        </div>

        <div class="flex flex-col mb-4">
          <label htmlFor="email" class="text-lg mb-2 capitalize"> price </label>
          <input
            v-model="payload.price"
            name="price"
            type="number"
            class="bg-white focus:outline-none border w-full px-4 py-3 border-gray-600 focus:border-teal-500"
            placeholder="course price"
          />
        </div>

        <div class="flex flex-col mb-4">
          <label htmlFor="email" class="text-lg mb-2 capitalize">
            thumbnail
          </label>
          <input
            @change="handleSubmit($event)"
            type="file"
            class="bg-white focus:outline-none border w-full px-4 py-3 border-gray-600 focus:border-teal-500"
            placeholder="thumbnail"
          />
        </div>

        <div class="flex flex-col mb-4">
          <label htmlFor="email" class="text-lg mb-2 capitalize">
            Description
          </label>
          <input
            v-model="payload.description"
            name="Description"
            type="text"
            class="bg-white focus:outline-none border w-full px-4 py-3 border-gray-600 focus:border-teal-500"
            placeholder="course Description"
          />
        </div>

        <ButtonVue type="submit" title="Create Course" disable="isLoading" />
      </form>
    </main>
  </div>
  <FooterVue />
</template>
