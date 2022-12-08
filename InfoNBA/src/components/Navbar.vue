<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Navbar",
  methods: {
    ...mapActions(useCounterStore, ["logout", 'tokenMidTrans']),
  },
  computed: {
    ...mapState(useCounterStore, ["isLogin"]),
  },
};
</script>

<template>
  <nav class="navbar" id="navbar-section">
    <div class="container-fluid">
      <div class="mb3">
        <a
          class="navbar-brand"
          href=""
          style="color: white; font-size: 30px"
          @:click.prevent="this.$router.push('/')"
          >Info NBA</a
        >
        <a
          class="navbar-brand"
          href=""
          style="color: white; font-size: 20px"
          @:click.prevent="this.$router.push('/teams')"
          v-if="isLogin"
          >Teams</a
        >
        <a
          class="navbar-brand"
          href=""
          style="color: white; font-size: 20px"
          @:click.prevent="this.$router.push('/players')"
          v-if="isLogin"
          >Players</a
        >
        <a
          class="navbar-brand"
          href=""
          style="color: white; font-size: 20px"
          @:click.prevent="this.$router.push('/matches')"
          v-if="isLogin"
          >Matches</a
        >
        <a
          class="navbar-brand"
          href=""
          style="color: white; font-size: 20px"
          @:click.prevent="this.$router.push('/highlights')"
          v-if="isLogin"
          >Highlights</a
        >
        <a
          class="navbar-brand"
          href=""
          style="color: white; font-size: 20px"
          @click.prevent="tokenMidTrans"
          v-if="isLogin"
          >Upgrade</a
        >
      </div>
      <div class="mb3">
        <a
          class="navbar-brand"
          href=""
          style="color: white; font-size: 20px"
          @:click.prevent="this.$router.push('/login')"
          v-if="!isLogin"
          >Login</a
        >
        <a
          class="navbar-brand"
          href=""
          style="color: white; font-size: 20px"
          v-on:click.prevent="logout"
          v-if="isLogin"
          >Logout</a
        >
      </div>
    </div>
  </nav>
</template>
