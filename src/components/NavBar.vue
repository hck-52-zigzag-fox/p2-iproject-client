<script>
import { mapWritableState } from 'pinia';
import { useStore } from '../stores/store';

export default {
  name: "Navbar",
  computed: {
    ...mapWritableState(useStore, ["isLogin"])
  },
  methods: {
    handleLogout() {
      localStorage.clear()
      this.isLogin = false
    }
  }
}
</script>

<template>
  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
              <img src="src/assets/images/logo.png">
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">

              <li class="scroll-to-section">
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li class="scroll-to-section"><a href="#men">Men's</a></li>
              <li class="scroll-to-section"><a href="#women">Women's</a></li>
              <li class="scroll-to-section"><a href="#kids">Kid's</a></li>
              <li v-if="!isLogin" class="scroll-to-section">
                <RouterLink to="/login">Login</RouterLink>
              </li>
              <li v-if="isLogin" class="scroll-to-section"><a href="#kids">Logout</a></li>
            </ul>
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
</template>