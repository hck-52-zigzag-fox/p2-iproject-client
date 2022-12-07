<script>
import { RouterLink } from "vue-router";
export default {
  name: "FooterVue",
  components: {
    RouterLink,
  },
};
</script>

<template>
  <footer class="w-full bg-orange-100 p-4">
    <div class="flex justify-between flex-wrap container mx-auto px-1 py-4">
      <div class="w-full sm:w-1/6">
        <h6 class="hover:text-teal-500">Company</h6>
        <ul class="mt-4">
          <li class="mt-2">
            <RouterLink to="" class="hover:text-teal-500 hover:underline">
              API Developer
            </RouterLink>
          </li>
          <li class="mt-2">
            <RouterLink to="" class="hover:text-teal-500 hover:underline">
              Career
            </RouterLink>
          </li>
          <li class="mt-2">
            <RouterLink to="" class="hover:text-teal-500 hover:underline">
              Our Story
            </RouterLink>
          </li>
          <li class="mt-2">
            <RouterLink to="" class="hover:text-teal-500 hover:underline">
              New Soon
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="w-full sm:w-1/6">
        <h6 class="hover:text-teal-500">Student</h6>
        <ul class="mt-4">
          <li class="mt-2">
            <RouterLink to="" class="hover:text-teal-500 hover:underline">
              Get Scholarship
            </RouterLink>
          </li>
          <li class="mt-2">
            <RouterLink to="" class="hover:text-teal-500 hover:underline">
              Our Pathskills
            </RouterLink>
          </li>
          <li class="mt-2">
            <RouterLink to="" class="hover:text-teal-500 hover:underline">
              All Features
            </RouterLink>
          </li>
          <li class="mt-2">
            <RouterLink to="" class="hover:text-teal-500 hover:underline">
              Refund Policy
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="w-full sm:w-1/6">
        <h6 class="hover:text-teal-500">Address</h6>
        <p class="mt-4 leading-loose">
          Jl. Arteri Pd. Indah No.7, RT.5/RW.9, Kby. Lama Sel., Kec. Kby. Lama,
          Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240
        </p>
      </div>
      <div class="w-full sm:w-2/6">
        <h6 class="hover:text-teal-500">Promotions</h6>
        <p class="mt-4">Submit your email for new updates</p>
        <form class="flex mt-6">
          <input
            type="text"
            class="bg-white focus:outline-none border-0 px-4 sm:px-6 py-3 w-full md:w-1/2"
            placeholder="Your email addres"
          />
          <button
            class="text-white bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner px-4 sm:px-6 py-3 whitespace-no-wrap"
          >
            Daftar Now
          </button>
        </form>
      </div>
    </div>
    <div class="border-t pt-8 mt-8 border-gray-800 text-center">
      <p class="">2022 Copyright SonyMelliFriady. All Rights Reserved</p>
    </div>
  </footer>
</template>
