<script>
import NavBar from "../components/NavBar.vue";
import PostCard from "../components/PostCard.vue";
import RightSidebar from "../components/RightSidebar.vue";
import SideNav from "../components/SideNav.vue";

export default {
  name: "HomeView",
  components: { SideNav, RightSidebar, PostCard, NavBar },
};
</script>

<template>
  <NavBar />
  <!-- **************** MAIN CONTENT START **************** -->
  <main>
    <!-- Container START -->
    <div class="container">
      <div class="row g-4">
        <!-- Sidenav START -->
        <SideNav />
        <!-- Sidenav END -->

        <!-- Main content START card -->
        <PostCard />
        <!-- Main content END -->

        <!-- Right sidebar START -->
        <RightSidebar />
        <!-- Right sidebar END -->
      </div>
      <!-- Row END -->
    </div>
    <!-- Container END -->
  </main>
  <!-- **************** MAIN CONTENT END **************** -->
</template>
