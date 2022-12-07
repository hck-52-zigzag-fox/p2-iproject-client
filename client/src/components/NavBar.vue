<script>
import { mapActions, mapState } from 'pinia';
import { useCicoStore } from '../stores/cico'

export default {
    name: 'NavBar',
    computed: {
        ...mapState(useCicoStore, ['isLogin', 'userStatus'])
    },
    methods: {
        ...mapActions(useCicoStore, ['logout'])
    }
}
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/register" v-if="!isLogin">register</RouterLink>
        <RouterLink to="/login" v-if="!isLogin">login</RouterLink>
        <RouterLink to="/search" v-if="isLogin">Search</RouterLink>
        <RouterLink to="/calculator" v-if="isLogin">Calculator</RouterLink>
        <RouterLink to="/upgrade" v-if="(isLogin && userStatus == 'unpaid')">upgrade</RouterLink>
        <RouterLink to="/logs" v-if="isLogin">foodlogs</RouterLink>
        <a href="" @click.prevent="logout" v-if="isLogin">logout</a>
    </nav>
</template>