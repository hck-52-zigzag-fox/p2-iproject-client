<script>
import { mapActions, mapState } from "pinia";

import { useGlobalStore } from "../stores/globalStore";
import FooterVue from "../components/Footer.vue";
import NavbarVue from "../components/Navbar.vue";

export default {
  name: "MyVideoView",
  components: {
    FooterVue,
    NavbarVue,
  },
  methods: {
    ...mapActions(useGlobalStore, ["getMyVideo"]),
  },
  computed: {
    ...mapState(useGlobalStore, ["myVideo"]),
  },
  created() {
    this.getMyVideo();
  },
};
</script>

<template>
  <NavbarVue />
  <main class="container mx-auto py-10">
    <div
      class="max-w-sm w-full lg:max-w-full lg:flex"
      v-for="(course, n) in myVideo"
      :key="n"
    >
      <img
        :src="course?.Course?.thumbnail"
        :alt="course?.Course?.name"
        class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden w-full"
        title="Woman holding a mug"
      />
      <div
        class="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-8">
          <p class="flex items-center">
            <span
              class="inline-block bg-teal-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ course?.Course?.level }}</span
            >
            <span
              class="inline-block bg-orange-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ course?.Course?.type }}</span
            >
          </p>
          <h1 class="text-gray-900 font-bold text-xl mb-2">
            {{ course?.Course?.name }}
          </h1>
          <p class="text-gray-700 text-base">
            {{ course?.Course?.description }}
          </p>
        </div>
      </div>
    </div>
    <!-- Course Content -->
    Course Content
    <div class="bg-white border border-gray-300 overflow-hidden">
      <div
        class="pl-4 py-2 relative flex justify-start items-center gap-2"
        v-for="(chapter, n) in course?.Chapters"
        :key="n"
      >
        <svg
          class="bg-black rounded-full w-5 h-5"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="23" cy="23" r="23" />
          <path
            d="M32 21.2679C33.3333 22.0377 33.3333 23.9623 32 24.7321L20 31.6603C18.6667 32.4301 17 31.4678 17 29.9282L17 16.0718C17 14.5322 18.6667 13.5699 20 14.3397L32 21.2679Z"
            fill="white"
          />
        </svg>

        <span class="text-gray-600">{{ chapter?.name }}</span>
      </div>
    </div>
  </main>
  <FooterVue />
</template>
