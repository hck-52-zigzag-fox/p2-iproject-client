<script>


export default {
    name:"Navbar"
}
</script>

<template>
    <div class="container" style="margin-top: 25px;">
    <header class="d-flex justify-content-center py-3 bg-secondary rounded-pill">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link"> <RouterLink class="nav-link text-dark" to="/">Home</RouterLink></a></li>
       
        <li class="nav-item"><a href="#" class="nav-link"><RouterLink to="/solarsystem" class="nav-link text-dark">Solar System</RouterLink></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><RouterLink to="/about" class="nav-link text-dark">About</RouterLink></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><RouterLink to="/about" class="nav-link text-dark">Login</RouterLink></a></li>
      </ul>
    </header>
  </div>
</template>