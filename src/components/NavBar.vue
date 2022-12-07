<script>
import { RouterLink} from "vue-router";

export default {
  name: "NavBar",
};
</script>

<template>
  <nav
    class="navbar shadow-sm sticky-top navbar-expand-lg bg-light bg-opacity-75"
  >
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand" href="#"
        ><h3 id="logo-font" style="font-family: Helvetica, sans-serif">
          Hzkeepr
        </h3></RouterLink
      >
      <button
        class="navbar-toggler bg-danger"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse gap-2" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/myKeepr" class="nav-link active text-dark" aria-current="page" href="#"
              >My keepr</RouterLink
            >
          </li>
        </ul>
        <RouterLink
          to="/login"
          type="button"
          class="btn text-light"
          style="background-color: #30c2c3"
        >
          Sign In
        </RouterLink>
        <button
          type="button"
          class="btn text-light"
          style="background-color: #30c2c3"
        >
          Sign Out
        </button>
      </div>
    </div>
  </nav>
</template>
