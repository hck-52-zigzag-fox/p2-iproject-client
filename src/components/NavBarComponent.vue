<script>
import { mapActions, mapWritableState } from 'pinia';
import { useStore } from '../stores/counter';

export default {
    name: "NavbarComponent",
    methods: {
        ...mapActions(useStore, ["logout"])
    },
    computed: {
        ...mapWritableState(useStore, ["isLogin"])
    }
}

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark sticky-top navbar-dark p-3 shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="#"><i class="fa-solid fa-shop me-2"></i> <strong>ELGOLA.ID</strong></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
                <div class="input-group">
                    <span class="border-warning input-group-text bg-warning text-white"><i
                            class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" class="form-control border-light" style="color:#7a7a7a">
                    <button class="btn btn-warning text-white">Search</button>
                </div>
            </div>
            <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                <div class="ms-auto d-none d-lg-block">
                    <div v-if="isLogin" class="input-group">
                        <span class="border-warning input-group-text bg-warning text-white"><i
                                class="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" class="form-control border-warning" style="color:#7a7a7a">
                        <button class="btn btn-warning text-white">Search</button>
                    </div>
                </div>
                <ul class="navbar-nav ms-auto ">
                    <li v-if="isLogin" class="nav-item">
                        <RouterLink to="/">
                            <a class="nav-link mx-2 text-uppercase" href="#">Products</a>
                        </RouterLink>
                    </li>
                    <li v-if="isLogin" class="nav-item">
                        <a class="nav-link mx-2 text-uppercase" href="#">Catalog</a>
                    </li>
                    <li v-if="isLogin" class="nav-item">
                        <a class="nav-link mx-2 text-uppercase" href="#">Services</a>
                    </li>
                    <li v-if="isLogin" class="nav-item">
                        <a class="nav-link mx-2 text-uppercase" href="#">About</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto ">
                    <li v-if="isLogin" class="nav-item">
                        <RouterLink to="/orders">
                            <a class="nav-link mx-2 text-uppercase" href="#"><i class="bi bi-cart-plus"></i>
                                Cart</a>
                        </RouterLink>
                    </li>
                    <li v-if="isLogin" class="nav-item">
                        <RouterLink to="/login" @click.prevent="logout">
                            <a class="nav-link mx-2 text-uppercase" href="#"><i class="bi bi-person-circle"></i>
                                Logout</a>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>