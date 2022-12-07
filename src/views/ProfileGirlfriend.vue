<script>
import Navbar from "../component/Navbar.vue";
import { mapState, mapActions } from "pinia";
import { useGirlfriendStore } from "../stores/girlfriend";
import GirlfriendCard from "../component/GirlfriendCard.vue";
export default {
  name: "ProfileGirlfriend",
  computed: {
    ...mapState(useGirlfriendStore, ["girlfriends"]),
  },
  data() {
    return {
      oneProfile: {},
    };
  },
  methods: {
    ...mapActions(useGirlfriendStore, ["fetchGirlfriends"]),
  },
  components: {
    Navbar,
    GirlfriendCard,
  },
  created() {
    this.fetchGirlfriends();
    this.oneProfile = this.girlfriends.find(el => el.User.email == localStorage.email)
    
  },
};
</script>

<template>
  <Navbar />
  {{ oneProfile }}
  <div class="container p-4 row">
    <div class="col-3">
      <div class="card-container" style="left: 2rem !important">
        <img
          class="round"
          src="https://th.bing.com/th/id/OIP.0miyOJMoCeGLhaeCAYQiDwHaHa?w=209&h=209&c=7&r=0&o=5&pid=1.7"
          alt="user"
        />
        <h4 class="text-wrap">
          <!-- {{oneProfile.name}} -->
        </h4>
        <h6>Jakarta</h6>
        <p>* Gohanisuru? Ofuuro isuru ?? soretomo? *</p>
        <div class="skills text-center"></div>
      </div>
    </div>
    <div class="col-6"></div>
    <div class="col-3">
      <GirlfriendCard :girlfriend="oneProfile" />
    </div>
  </div>
</template>
