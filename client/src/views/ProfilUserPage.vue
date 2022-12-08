<script>
import { mapActions, mapState } from "pinia";
import { useRzStore } from "../stores/counter";

export default {
  name: "ProfilUserPage",
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
  computed: {
    ...mapState(useRzStore, ["profile"]),
  },
  methods: {
    ...mapActions(useRzStore, ["fetchProfileById"]),
  },
  created() {
    let id = this.$route.params.id;
    this.fetchProfileById(id);
  },
};
</script>
<template>
  <div class="mt-5 mb-5 px-10 grid grid-rows-1 grid-flow-col gap-4">
    <div class="row-span3 px-5">
      <div class="w-64 p-2 bg-white rounded-xl">
        <h1
          class="mb-5 pl-8 py-4 text-xl font-bold"
          v-if="profile.User.username"
        >
          {{ profile.User.username }}
        </h1>
        <div class="flex justify-center mb-5">
          <img
            :src="profile.imgUrl"
            alt=""
            class="w-48 h-48"
            v-if="profile.imgUrl"
          />
        </div>
        <div class="mb-5">
          <RouterLink to="/addProfile" class="pl-8 py-4 text-md"
            >Add New Profile</RouterLink
          >
        </div>
        <div class="mb-5">
          <RouterLink to="/editProfile" class="pl-8 py-4 text-md"
            >Edit Profile</RouterLink
          >
        </div>
      </div>
    </div>
    <div class="col-span-2 ...">
      <div class="w-auto p-2 mb-2 bg-white rounded-xl">
        <h1
          class="pl-8 py-4 text-xl font-bold text-center"
          v-if="profile.User.username"
        >
          {{ profile.User.username }}
        </h1>
      </div>
      <div class="w-auto p-2 bg-white rounded-xl">
        <div class="flex justify-center">
          <img
            :src="profile.imgUrl"
            alt=""
            class="w-64 h-64"
            v-if="profile.imgUrl"
          />
        </div>
        <div class="p-2">
          <p class="text-sm text-gray-600"></p>
        </div>
        <div class="m-2">
          <p class="text-sm text-gray-600" v-if="profile.gender">
            Gender : {{ profile.gender }}
          </p>
          <p class="text-sm text-gray-600" v-if="profile.dateOfBirth">
            Date of Birth : {{ profile.dateOfBirth }}
          </p>
          <p class="text-sm text-gray-600" v-if="profile.location">
            Location : {{ profile.location }}
          </p>
          <p class="text-sm text-gray-600" v-if="profile.games">
            Games : {{ profile.games }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
