<script>
import { mapActions, mapState } from "pinia";
import { useRzStore } from "../stores/counter";

export default {
  name: "ProfilUserPage",
  data() {
    return {
      profiles: {
        imgUrl: "",
        gender: "",
        dateOfBirth: "",
        location: "",
        games: "",
      },
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
    this.profiles = this.profile;
  },
};
</script>
<template>
  <div class="px-10 mt-10 mb-10">
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img :src="profile?.imgUrl" alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ profile?.User.username }}</h2>
        <p>Gender : {{ profile?.gender }}</p>
        <p>Date of Birth : {{ profile?.dateOfBirth }}</p>
        <p>Location : {{ profile?.location }}</p>
        <p>Games : {{ profile?.games }}</p>
      </div>
    </div>
  </div>
</template>
